#!/usr/bin/env python3
"""JS per route: external <script src> bytes + inline executable <script> bytes (JSON-LD excluded)."""
import re, sys
from pathlib import Path

def measure(base: Path):
    total_files = sum(p.stat().st_size for p in base.rglob("*.js"))
    rows = {}
    for f in sorted(base.rglob("index.html")) + [base / "404.html"]:
        if not f.exists():
            continue
        s = f.read_text(encoding="utf-8")
        ext = set(re.findall(r'<script[^>]+src="([^"?]+)', s))
        ext_bytes = sum((base / x.lstrip("/")).stat().st_size for x in ext if (base / x.lstrip("/")).exists())
        inline = [b for a, b in re.findall(r'<script(?![^>]*\bsrc=)([^>]*)>(.*?)</script>', s, re.S)
                  if "ld+json" not in a]
        rel = "/" + f.relative_to(base).parent.as_posix().strip(".") + ("/" if f.name == "index.html" else "404.html")
        rows[rel.replace("//", "/")] = (len(ext), ext_bytes, sum(len(b.encode()) for b in inline))
    return total_files, rows

for name in sys.argv[1:]:
    total, rows = measure(Path(name))
    print(f"== {name}: all .js files {total} B")
    for r, (n, eb, ib) in rows.items():
        print(f"{r}\text={n} {eb} B\tinline={ib} B\ttotal={eb+ib} B")
