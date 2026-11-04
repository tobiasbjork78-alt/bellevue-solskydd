# Alt-text check on the built site (dist/). Exit code 1 on any failure.
# Usage: python3 scripts/seo-audit/alt-check.py   (from astro/, after npm run build)
# Fails if an <img> has no alt attribute, an alt is longer than 125 characters,
# starts with "Bild"/"Foto", names a place, or two different image files share the same non-empty alt.
# The same rules apply to og:image:alt, which must exist and be non-empty on every indexable page (404 is noindex).
import re
import sys
from collections import defaultdict
from pathlib import Path

from bs4 import BeautifulSoup

DIST = Path(__file__).resolve().parents[2] / "dist"
PLACES = ["Malmö", "Lund", "Skåne", "Skanör", "Falsterbo", "Limhamn", "Vellinge", "Staffanstorp"]
# The logo exists as a dark and a white file of the same artwork; they count as one image
SAME_IMAGE = [{"/images/bellevue-logo.webp", "/images/bellevue-logo-white.webp"}]
place_re = re.compile(r"\b(" + "|".join(PLACES) + r")", re.IGNORECASE)

errors = []
alt_to_src = defaultdict(set)
count = 0
for f in sorted(DIST.rglob("*.html")):
    page = "/" + f.relative_to(DIST).as_posix().replace("index.html", "")
    soup = BeautifulSoup(f.read_text(encoding="utf-8"), "html.parser")
    og = soup.find("meta", property="og:image:alt")
    og_alt = (og.get("content") or "").strip() if og else ""
    robots = soup.find("meta", attrs={"name": "robots"})
    noindex = bool(robots and "noindex" in robots.get("content", ""))
    if not og_alt and not noindex:
        errors.append(f"{page}: saknar og:image:alt")
    elif len(og_alt) > 125 or re.match(r"^(bild|foto)", og_alt, re.IGNORECASE) or place_re.search(og_alt):
        errors.append(f"{page}: og:image:alt bryter mot reglerna: {og_alt}")
    for img in soup.find_all("img"):
        count += 1
        src = img.get("src", "")[:80]
        if not img.has_attr("alt"):
            errors.append(f"{page}: saknar alt: {src}")
            continue
        alt = img["alt"].strip()
        if len(alt) > 125:
            errors.append(f"{page}: alt över 125 tecken ({len(alt)}): {src}")
        if re.match(r"^(bild|foto)", alt, re.IGNORECASE):
            errors.append(f"{page}: alt börjar med Bild/Foto: {alt}")
        m = place_re.search(alt)
        if m:
            errors.append(f"{page}: alt innehåller ortnamnet {m.group(1)}: {alt}")
        if alt:
            alt_to_src[alt].add(src)

for alt, srcs in alt_to_src.items():
    if len(srcs) > 1 and not any(srcs <= group for group in SAME_IMAGE):
        errors.append(f"Samma alt på olika bilder ({', '.join(sorted(srcs))}): {alt}")

print(f"{count} <img> kontrollerade i {DIST}")
if errors:
    print("\n".join("FAIL " + e for e in errors))
    sys.exit(1)
print("PASS alla alt-texter")
