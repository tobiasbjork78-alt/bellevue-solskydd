# Static SEO audit of the built site in dist/ (report only, changes nothing).
# Usage: python3 scripts/seo-audit/audit.py   (from astro/, after npm run build)
# Writes docs/seo-audit/lankar.csv; raw results go to $AUDIT_JSON (default: /tmp/seo-audit.json).
import csv
import os
import json
import re
import struct
from collections import Counter, defaultdict, deque
from pathlib import Path

from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parents[2]
DIST = ROOT / "dist"
OUT = ROOT / "docs" / "seo-audit"
ARCHIVE = ROOT.parent / "arkiv"
SITE = "https://bellevuesolskydd.se"
OUT.mkdir(parents=True, exist_ok=True)

GENERIC_ANCHORS = {"läs mer", "här", "klicka här", "mer", "mer info", "läs", "se mer", "länk", "this", "here", "read more"}
BANNED = ["40 år", "Testfakta", "Bäst i Test", "patent", "egen produktion", "Di Gasell", "500 000"]
# Second-person plural (reader addressed as "ni"); the company "ni" is judged manually in the report
NI_RE = re.compile(r"\b(ni|er|era|ert|eder|er själva)\b", re.IGNORECASE)


def url_of(path: Path) -> str:
    rel = path.relative_to(DIST).as_posix()
    if rel == "404.html":
        return "/404.html"
    return "/" + rel[: -len("index.html")]


def words(text: str) -> int:
    return len([w for w in re.split(r"\s+", text.strip()) if w])


def norm(text: str) -> str:
    return re.sub(r"\s+", " ", text or "").strip()


def image_size(p: Path):
    """Return (w, h) for jpg/png/webp without external deps beyond PIL fallback."""
    try:
        from PIL import Image

        with Image.open(p) as im:
            return im.size
    except Exception:
        return None


pages_files = sorted(DIST.rglob("index.html")) + [DIST / "404.html"]
pages = {}
for f in pages_files:
    pages[url_of(f)] = BeautifulSoup(f.read_text(encoding="utf-8"), "html.parser")

existing = set(pages)

# ---------- redirects ----------
redirects = []
rfile = DIST / "_redirects"
for line in rfile.read_text().splitlines():
    if line.strip() and not line.strip().startswith("#"):
        parts = line.split()
        redirects.append({"from": parts[0], "to": parts[1], "status": parts[2] if len(parts) > 2 else "301"})
redir_map = {r["from"]: r["to"] for r in redirects}
redir_issues = []
for r in redirects:
    if r["to"] in redir_map:
        redir_issues.append(f"Kedja: {r['from']} -> {r['to']} -> {redir_map[r['to']]}")
    if r["to"] == r["from"]:
        redir_issues.append(f"Loop: {r['from']}")
    tgt = r["to"].split("#")[0]
    if tgt.startswith("/") and tgt not in existing and not (DIST / tgt.lstrip("/")).exists():
        redir_issues.append(f"Mål finns inte: {r['from']} -> {r['to']}")

# ---------- sitemap ----------
sm_urls = []
for sm in DIST.glob("sitemap-*.xml"):
    if sm.name == "sitemap-index.xml":
        continue
    sm_urls += re.findall(r"<loc>([^<]+)</loc>", sm.read_text())
sm_paths = [u.replace(SITE, "") for u in sm_urls]
robots_txt = (DIST / "robots.txt").read_text()

# ---------- per page ----------
report = {}
links = []  # (from, to, anchor, type)
faq_mismatch = {}
nap = {"telefon": Counter(), "adress": Counter(), "namn": Counter(), "epost": Counter(), "orgnr": Counter()}
nap_pages = defaultdict(set)
sentences_by_page = defaultdict(set)


def link_type(a):
    for parent in a.parents:
        if parent.name == "nav" and parent.get("aria-label") == "Brödsmulor":
            return "breadcrumb"
        if parent.name == "header":
            return "meny"
        if parent.name == "footer":
            return "footer"
        if parent.name == "div" and "fixed" in (parent.get("class") or []) and "bottom-0" in (parent.get("class") or []):
            return "sticky"
        if parent.name == "section" and "bg-ink" in (parent.get("class") or []):
            return "cta"
        if parent.name == "main":
            return "brodtext"
    return "ovrigt"


def anchor_text(a):
    t = norm(a.get_text(" "))
    if not t:
        t = a.get("aria-label") or ""
        if not t:
            img = a.find("img")
            t = img.get("alt", "") if img else ""
    return norm(t)


for url, s in pages.items():
    head = s.head
    r = {}
    title = norm(s.title.get_text()) if s.title else ""
    r["title"] = title
    r["title_len"] = len(title)
    md = s.find("meta", attrs={"name": "description"})
    r["desc"] = md["content"] if md else ""
    r["desc_len"] = len(r["desc"])
    rb = s.find("meta", attrs={"name": "robots"})
    r["robots"] = rb["content"] if rb else ""
    canon = s.find("link", rel="canonical")
    r["canonical"] = canon["href"] if canon else ""
    r["canonical_ok"] = r["canonical"] == SITE + url
    # headings
    hs = [(int(h.name[1]), norm(h.get_text(" "))) for h in s.find_all(re.compile(r"^h[1-6]$"))]
    r["h1"] = [t for lvl, t in hs if lvl == 1]
    jumps = []
    prev = 0
    for lvl, t in hs:
        if prev and lvl > prev + 1:
            jumps.append(f"h{prev} -> h{lvl} ({t[:50]})")
        prev = lvl
    r["heading_jumps"] = jumps
    r["headings"] = [f"h{l} {t}" for l, t in hs]
    og = {}
    for m in s.find_all("meta", attrs={"property": re.compile("^og:")}):
        og[m["property"]] = m.get("content", "")
    r["og"] = og
    # preload / fetchpriority
    r["preload"] = [str(l) for l in head.find_all("link", rel="preload")]
    # structured data
    types, sd_errors = [], []
    faq_ld = []
    for sc in s.find_all("script", type="application/ld+json"):
        try:
            data = json.loads(sc.string)
        except Exception as e:  # noqa
            sd_errors.append(f"JSON-fel: {e}")
            continue
        nodes = data.get("@graph", [data]) if isinstance(data, dict) else data
        for n in nodes:
            t = n.get("@type")
            types.append(t if isinstance(t, str) else "/".join(t))
            tt = t if isinstance(t, list) else [t]
            if "BreadcrumbList" in tt:
                for i, it in enumerate(n.get("itemListElement", []), 1):
                    if not all(k in it for k in ("position", "name", "item")):
                        sd_errors.append(f"BreadcrumbList pos {i} saknar fält")
                last = n.get("itemListElement", [{}])[-1].get("item")
                if last and last != SITE + url:
                    sd_errors.append(f"BreadcrumbList sista item {last} != sidans URL")
            if "FAQPage" in tt:
                for q in n.get("mainEntity", []):
                    if not q.get("name") or not q.get("acceptedAnswer", {}).get("text"):
                        sd_errors.append("FAQPage fråga saknar name/acceptedAnswer.text")
                    faq_ld.append((norm(q.get("name")), norm(q.get("acceptedAnswer", {}).get("text"))))
            if "Service" in tt:
                for k in ("name", "provider"):
                    if k not in n:
                        sd_errors.append(f"Service saknar {k}")
            if any(x in tt for x in ("LocalBusiness", "Organization", "HomeAndConstructionBusiness")):
                for k in ("name", "address", "telephone", "url"):
                    if k not in n:
                        sd_errors.append(f"{t} saknar {k}")
                if "telephone" in n:
                    nap["telefon"][n["telephone"]] += 1
                    nap_pages[("telefon", n["telephone"])].add(url + " (JSON-LD)")
                if "address" in n:
                    a = n["address"]
                    addr = ", ".join(str(a.get(k, "")) for k in ("streetAddress", "postalCode", "addressLocality")) if isinstance(a, dict) else str(a)
                    nap["adress"][addr] += 1
                    nap_pages[("adress", addr)].add(url + " (JSON-LD)")
                if "name" in n:
                    nap["namn"][n["name"]] += 1
                    nap_pages[("namn", n["name"])].add(url + " (JSON-LD)")
                r["localbusiness"] = n
    r["schema_types"] = types
    r["schema_errors"] = sd_errors
    # visible FAQ
    vis = []
    for btn in s.find_all(attrs={"data-faq-toggle": True}):
        q = norm(btn.get_text(" "))
        panel = btn.find_next(attrs={"data-faq-panel": True})
        ps = panel.find_all("p") if panel else []
        # answer = first paragraph(s); the optional link line is excluded
        ans = norm(" ".join(p.get_text(" ") for p in ps if not p.find("a") or p.get_text(strip=True) != p.find("a").get_text(strip=True)))
        vis.append((q, ans))
    r["faq_visible"] = len(vis)
    r["faq_ld"] = len(faq_ld)
    mism = []
    if faq_ld or vis:
        if len(faq_ld) != len(vis):
            mism.append(f"Antal: JSON-LD {len(faq_ld)}, synliga {len(vis)}")
        for (q1, a1), (q2, a2) in zip(faq_ld, vis):
            if q1 != q2:
                mism.append(f"Fråga skiljer: '{q1}' / '{q2}'")
            elif a1 != a2:
                mism.append(f"Svar skiljer på '{q1}': LD='{a1[:80]}…' synligt='{a2[:80]}…'")
    r["faq_mismatch"] = mism
    # content
    main = s.find("main")
    main_text = norm(main.get_text(" ")) if main else ""
    r["words_main"] = words(main_text)
    ab = s.find("aside", attrs={"aria-label": "Snabbsvar"})
    r["answerbox_words"] = words(ab.get_text(" ")) if ab else None
    r["updated"] = bool(re.search(r"Senast uppdaterad", main_text))
    r["updated_text"] = (re.search(r"Senast uppdaterad[^.]{0,30}", main_text) or [None])[0] if r["updated"] else None
    r["emdash"] = main_text.count("—") + norm(s.head.get_text(" ")).count("—") + sum(
        (m.get("content") or "").count("—") for m in s.find_all("meta")
    )
    full_text = norm(s.get_text(" "))
    r["banned"] = [b for b in BANNED if b.lower() in (main_text + " " + r["title"] + " " + r["desc"]).lower()]
    ni_hits = []
    if main:
        for el in main.find_all(["p", "li", "h2", "h3", "h4", "button", "span", "td", "th", "a"]):
            if el.find(["p", "li"]):
                continue
            t = norm(el.get_text(" "))
            for m in NI_RE.finditer(t):
                ni_hits.append(t[max(0, m.start() - 50): m.end() + 50])
    r["ni_hits"] = sorted(set(ni_hits))
    # sentences (template phrases): block-level text inside main
    if main:
        for el in main.find_all(["p", "li", "h2", "h3", "dd", "td", "button"]):
            if el.find(["p", "li"]):
                continue
            for sent in re.split(r"(?<=[.!?])\s+", norm(el.get_text(" "))):
                if words(sent) >= 6:
                    sentences_by_page[sent].add(url)
    # NAP in visible text and links
    for m in re.finditer(r"(?:\+46|0)\s?\(?\d{1,3}\)?[\s-]?\d{2,3}[\s-]?\d{2}[\s-]?\d{2,3}", full_text):
        nap["telefon"][m.group(0)] += 1
        nap_pages[("telefon", m.group(0))].add(url)
    for a in s.find_all("a", href=re.compile("^tel:")):
        nap["telefon"][a["href"]] += 1
        nap_pages[("telefon", a["href"])].add(url)
    for m in re.finditer(r"[A-ZÅÄÖ][a-zåäö]+(?:gatan|vägen|väg|gränd|plan|torget|allén)\s?\d+[A-Z]?(?:[, ]+\d{3}\s?\d{2}\s+[A-ZÅÄÖ][a-zåäö]+)?", full_text):
        nap["adress"][m.group(0)] += 1
        nap_pages[("adress", m.group(0))].add(url)
    for m in re.finditer(r"\d{3}\s?\d{2}\s+(?:Malmö|Lund|Vellinge|Skanör|Falsterbo|Höllviken)", full_text):
        nap["adress"][m.group(0)] += 1
        nap_pages[("adress", m.group(0))].add(url)
    for m in re.finditer(r"Bellevue(?:\s+Solskydd)?(?:\s+(?:AB|Malmö i Sverige AB|i Malmö))?", full_text):
        nap["namn"][m.group(0)] += 1
        nap_pages[("namn", m.group(0))].add(url)
    for m in re.finditer(r"[\w.+-]+@[\w-]+\.[\w.]+", full_text + " " + " ".join(a.get("href", "") for a in s.find_all("a"))):
        nap["epost"][m.group(0)] += 1
        nap_pages[("epost", m.group(0))].add(url)
    for m in re.finditer(r"\b\d{6}-\d{4}\b", full_text):
        nap["orgnr"][m.group(0)] += 1
        nap_pages[("orgnr", m.group(0))].add(url)
    # images
    imgs = []
    for im in s.find_all("img"):
        src = im.get("src", "")
        fp = DIST / src.lstrip("/") if src.startswith("/") else None
        size = fp.stat().st_size if fp and fp.exists() else None
        dims = image_size(fp) if fp and fp.exists() else None
        imgs.append({
            "src": src,
            "alt": im.get("alt"),
            "has_alt_attr": im.has_attr("alt"),
            "aria_hidden": im.get("aria-hidden") == "true",
            "width": im.get("width"),
            "height": im.get("height"),
            "loading": im.get("loading"),
            "fetchpriority": im.get("fetchpriority"),
            "webp": src.lower().endswith((".webp", ".avif", ".svg")),
            "bytes": size,
            "natural": dims,
            "in_header": any(p.name == "header" for p in im.parents),
        })
    r["images"] = imgs
    vids = []
    for v in s.find_all("video"):
        srcs = [x.get("src") for x in v.find_all("source")]
        sizes = {x: (DIST / x.lstrip("/")).stat().st_size for x in srcs if x and (DIST / x.lstrip("/")).exists()}
        poster = v.get("poster")
        pb = (DIST / poster.lstrip("/")).stat().st_size if poster and (DIST / poster.lstrip("/")).exists() else None
        vids.append({"sources": sizes, "preload": v.get("preload"), "poster": poster, "poster_bytes": pb})
    r["videos"] = vids
    # links
    for a in s.find_all("a", href=True):
        href = a["href"]
        typ = link_type(a)
        if href.startswith(("mailto:", "tel:", "javascript:")):
            continue
        if href.startswith(SITE):
            href = href[len(SITE):] or "/"
        if href.startswith("http"):
            links.append((url, href, anchor_text(a), typ, "extern"))
            continue
        if href.startswith("#"):
            continue
        links.append((url, href, anchor_text(a), typ, "intern"))
    report[url] = r

# ---------- link analysis ----------
content_pages = [u for u in pages if u != "/404.html"]
link_rows = []
broken, no_slash, to_redirect = [], [], []
inbound = defaultdict(lambda: Counter())
outbound_body = Counter()
anchors = defaultdict(Counter)
graph_all = defaultdict(set)
graph_body = defaultdict(set)
for frm, href, txt, typ, kind in links:
    if frm == "/404.html":
        continue
    if kind == "extern":
        link_rows.append((frm, href, txt, typ))
        continue
    path = href.split("#")[0].split("?")[0] or frm
    link_rows.append((frm, href, txt, typ))
    asset = re.search(r"\.[a-z0-9]{2,4}$", path)
    if asset:
        if not (DIST / path.lstrip("/")).exists():
            broken.append((frm, href, txt))
        continue
    if not path.endswith("/"):
        no_slash.append((frm, href, txt))
    if path in redir_map or path.rstrip("/") + "/" in redir_map:
        to_redirect.append((frm, href, txt))
    target = path if path.endswith("/") else path + "/"
    if target not in existing:
        broken.append((frm, href, txt))
        continue
    if target == frm:
        continue
    inbound[target][typ] += 1
    anchors[target][txt] += 1
    graph_all[frm].add(target)
    if typ in ("brodtext", "cta"):
        outbound_body[frm] += 1
        graph_body[frm].add(target)

# unique-source inbound counts
inbound_sources = defaultdict(lambda: defaultdict(set))
for frm, href, txt, typ, kind in links:
    if kind != "intern" or frm == "/404.html":
        continue
    path = href.split("#")[0].split("?")[0] or frm
    t = path if path.endswith("/") else path + "/"
    if t in existing and t != frm:
        inbound_sources[t]["a" if typ in ("brodtext", "cta") else "b"].add(frm)


def bfs(graph):
    depth = {"/": 0}
    q = deque(["/"])
    while q:
        u = q.popleft()
        for v in graph[u]:
            if v not in depth:
                depth[v] = depth[u] + 1
                q.append(v)
    return depth


depth_all = bfs(graph_all)
depth_body = bfs(graph_body)
orphans = [u for u in content_pages if u != "/" and not inbound_sources[u]["a"]]

with open(OUT / "lankar.csv", "w", newline="", encoding="utf-8") as fh:
    w = csv.writer(fh)
    w.writerow(["fran", "till", "ankartext", "typ"])
    for row in link_rows:
        w.writerow(row)

# ---------- template sentences ----------
template = sorted(
    ((s, sorted(p)) for s, p in sentences_by_page.items() if len(p) >= 2),
    key=lambda x: (-len(x[1]), x[0]),
)

# ---------- duplicates ----------
dup_title = {t: [u for u in content_pages if report[u]["title"] == t] for t in Counter(report[u]["title"] for u in content_pages) if Counter(report[x]["title"] for x in content_pages)[t] > 1}
dup_desc = {t: [u for u in content_pages if report[u]["desc"] == t] for t in Counter(report[u]["desc"] for u in content_pages) if Counter(report[x]["desc"] for x in content_pages)[t] > 1}
dup_h1 = {}
for u in content_pages:
    for h in report[u]["h1"]:
        dup_h1.setdefault(h, []).append(u)
dup_h1 = {k: v for k, v in dup_h1.items() if len(v) > 1}

# ---------- old WordPress URLs ----------
wp = json.loads((ARCHIVE / "content" / "sitemap.json").read_text())
wp_sitemap = [x["url"].replace(SITE, "") or "/" for k in ("pages", "posts") for x in wp[k]]
mirror = ARCHIVE / "raw-mirror" / "bellevuesolskydd.se"
mirror_paths = set()
for f in mirror.rglob("*.html"):
    rel = "/" + f.relative_to(mirror).as_posix()
    if "?" in rel or "/feed/" in rel or rel.startswith(("/wp-", "/wp-json")) or "wp-login" in rel:
        continue
    if rel.endswith("/index.html"):
        rel = rel[: -len("index.html")]
    mirror_paths.add(rel)
query_urls = sorted({"/" + f.relative_to(mirror).as_posix() for f in mirror.rglob("*.html") if "?p=" in f.name})
wp_all = sorted(set(wp_sitemap) | mirror_paths)
wp_status = []
for p in wp_all:
    if p in redir_map:
        st = f"301 -> {redir_map[p]}"
    elif p in existing:
        st = "finns på nya sajten (samma adress)"
    else:
        st = "SAKNAS (404)"
    wp_status.append((p, "sitemap.json" if p in wp_sitemap else "endast spegel", st))

# ---------- og image ----------
og_img_info = {}
for u in content_pages:
    img = report[u]["og"].get("og:image", "")
    if img and img not in og_img_info:
        fp = DIST / img.replace(SITE, "").lstrip("/")
        og_img_info[img] = {"exists": fp.exists(), "natural": image_size(fp) if fp.exists() else None, "bytes": fp.stat().st_size if fp.exists() else None}

out = {
    "pages": report,
    "redirects": redirects,
    "redirect_issues": redir_issues,
    "sitemap": sm_paths,
    "robots": robots_txt,
    "inbound": {u: {"a_links": sum(v for k, v in inbound[u].items() if k in ("brodtext", "cta")),
                    "a_sources": len(inbound_sources[u]["a"]),
                    "b_links": sum(v for k, v in inbound[u].items() if k not in ("brodtext", "cta")),
                    "b_sources": len(inbound_sources[u]["b"]),
                    "by_type": dict(inbound[u]),
                    "a_from": sorted(inbound_sources[u]["a"])} for u in content_pages},
    "outbound_body": {u: outbound_body[u] for u in content_pages},
    "outbound_body_targets": {u: sorted(graph_body[u]) for u in content_pages},
    "depth_all": depth_all,
    "depth_body": depth_body,
    "orphans": orphans,
    "anchors": {u: dict(anchors[u]) for u in content_pages},
    "broken": broken,
    "no_slash": no_slash,
    "to_redirect": to_redirect,
    "template_sentences": template,
    "dup_title": dup_title,
    "dup_desc": dup_desc,
    "dup_h1": dup_h1,
    "wp": wp_status,
    "wp_query_urls": query_urls,
    "nap": {k: dict(v) for k, v in nap.items()},
    "nap_pages": {f"{k[0]}|{k[1]}": sorted(v) for k, v in nap_pages.items()},
    "og_images": og_img_info,
}
Path(os.environ.get("AUDIT_JSON", "/tmp/seo-audit.json")).write_text(json.dumps(out, ensure_ascii=False, indent=1, default=str), encoding="utf-8")
print("pages", len(report), "links", len(link_rows), "broken", len(broken), "no_slash", len(no_slash), "orphans", orphans)
