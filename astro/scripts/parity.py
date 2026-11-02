#!/usr/bin/env python3
"""Parity checks between nextjs-v3/out (reference) and astro/dist.

Usage: python3 -I scripts/parity.py [route ...]
  No routes = all routes. Exit code 1 if any text/JSON-LD/route deviation.

- Routes: every index.html route in out/ must exist in dist/ and vice versa.
- Text: visible text without script/style/noscript/template/header/nav/footer,
  whitespace-normalized; reports word counts and differing sentences.
- JSON-LD: set of top-level @type per route (BreadcrumbList deduplicated in
  the reference) and BreadcrumbList count in dist (must be exactly 1 where
  the reference has one).
"""
import difflib
import json
import re
import sys
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
import os
OUT = Path(os.environ.get("PARITY_OUT", ROOT / "nextjs-v3" / "out"))
DIST = Path(os.environ.get("PARITY_DIST", ROOT / "astro" / "dist"))
SKIP = {"script", "style", "noscript", "template", "header", "nav", "footer", "head"}
VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "track", "wbr"}
IGNORE_ROUTES = {"/404/", "/_not-found/"}


class TextExtractor(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.stack = []
        self.parts = []

    def handle_starttag(self, tag, attrs):
        if tag in VOID:
            if tag == "br":
                self.parts.append(" ")
            return
        self.stack.append(tag)

    def handle_startendtag(self, tag, attrs):
        if tag == "br":
            self.parts.append(" ")

    def handle_endtag(self, tag):
        if tag in VOID:
            return
        # pop to matching tag (tolerant)
        for i in range(len(self.stack) - 1, -1, -1):
            if self.stack[i] == tag:
                del self.stack[i:]
                break

    def handle_data(self, data):
        if any(t in SKIP for t in self.stack):
            return
        self.parts.append(data)


def visible_text(path):
    p = TextExtractor()
    # Drop HTML comments (React inserts <!-- --> between text nodes)
    p.feed(re.sub(r"<!--.*?-->", "", path.read_text(encoding="utf-8"), flags=re.S))
    return re.sub(r"\s+", " ", " ".join(p.parts)).strip()


def jsonld_types(path):
    html = path.read_text(encoding="utf-8")
    types = []
    for block in re.findall(r'<script[^>]*application/ld\+json[^>]*>(.*?)</script>', html, re.S):
        data = json.loads(block)
        for node in data.get("@graph", [data]):
            types.append(node.get("@type"))
    return types


def routes(base):
    out = set()
    for f in base.rglob("index.html"):
        rel = f.parent.relative_to(base).as_posix()
        out.add("/" if rel == "." else f"/{rel}/")
    return out - IGNORE_ROUTES


def sentences(text):
    return [s for s in re.split(r"(?<=[.!?])\s+", text) if s]


def main(argv):
    ok = True
    ref_routes, new_routes = routes(OUT), routes(DIST)
    only_ref = sorted(ref_routes - new_routes)
    only_new = sorted(new_routes - ref_routes)
    print(f"ROUTES out={len(ref_routes)} dist={len(new_routes)} only_out={only_ref} only_dist={only_new}")
    if only_ref or only_new:
        ok = False

    selected = argv or sorted(ref_routes & new_routes)
    for route in selected:
        ref_file = OUT / route.strip("/") / "index.html" if route != "/" else OUT / "index.html"
        new_file = DIST / route.strip("/") / "index.html" if route != "/" else DIST / "index.html"
        if not new_file.exists():
            print(f"{route}: MISSING in dist")
            ok = False
            continue
        a, b = visible_text(ref_file), visible_text(new_file)
        wa, wb = len(a.split()), len(b.split())
        ta, tb = jsonld_types(ref_file), jsonld_types(new_file)
        set_ok = sorted(set(ta)) == sorted(set(tb))
        bc_ok = tb.count("BreadcrumbList") == (1 if "BreadcrumbList" in ta else 0)
        diff = [l for l in difflib.unified_diff(sentences(a), sentences(b), lineterm="", n=0)
                if l.startswith(("+", "-")) and not l.startswith(("+++", "---"))]
        status = "OK" if (a == b and set_ok and bc_ok) else "DIFF"
        if status != "OK":
            ok = False
        print(f"{route}: {status} words out={wa} dist={wb} text={'same' if a == b else 'differs'} "
              f"jsonld_out={sorted(ta)} jsonld_dist={sorted(tb)} types={'same' if set_ok else 'DIFF'} "
              f"breadcrumb_once={'yes' if bc_ok else 'NO'}")
        for line in diff:
            print("    " + line)
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
