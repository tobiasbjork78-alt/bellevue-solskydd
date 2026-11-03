#!/usr/bin/env bash
# Lighthouse mobile (performance only) against dist served by `npx astro preview --port 4403`.
# Usage: OUT=/path/to/dir bash scripts/seo-audit/lighthouse.sh
# Uses Playwright's Chromium; npx fetches lighthouse as a one-off tool (not a site dependency).
set -euo pipefail
OUT=${OUT:-/tmp/lighthouse}
mkdir -p "$OUT"
export CHROME_PATH=${CHROME_PATH:-$(ls -d ~/.cache/ms-playwright/chromium-*/chrome-linux64/chrome | tail -1)}
for u in / /markiser-malmo/ /pergola-malmo/ /persienner-malmo/ /guider/solskydd-varme/; do
  n=$(echo "$u" | tr '/' '_')
  npx -y lighthouse@12 "http://127.0.0.1:4403$u" --quiet --only-categories=performance --form-factor=mobile \
    --output=json --output-path="$OUT/$n.json" --chrome-flags="--headless=new --no-sandbox"
done
