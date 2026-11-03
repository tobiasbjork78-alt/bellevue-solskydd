// Lazy-loading check at mobile viewport (390x844), Playwright from ~/projects/product-scraper.
// Usage: BASE=http://127.0.0.1:4403 node scripts/seo-audit/fold.mjs  (dist served with astro preview)
// Prints, per page: images below the fold without loading="lazy" and images above the fold with loading="lazy".
import { createRequire } from "node:module";
import { homedir } from "node:os";
import { join } from "node:path";
import { readFileSync } from "node:fs";
const require = createRequire(join(homedir(), "projects/product-scraper/package.json"));
const { chromium } = require("playwright");
const base = process.env.BASE ?? "http://127.0.0.1:4403";
const sitemap = readFileSync(new URL("../../dist/sitemap-0.xml", import.meta.url), "utf8");
const paths = [...sitemap.matchAll(/<loc>https:\/\/bellevuesolskydd\.se([^<]*)<\/loc>/g)].map((m) => m[1]);
paths.push("/om-oss/");
const b = await chromium.launch();
const out = {};
for (const path of paths) {
  const p = await b.newPage({ viewport: { width: 390, height: 844 } });
  await p.goto(base + path, { waitUntil: "load" });
  out[path] = await p.evaluate(() => {
    const vh = window.innerHeight;
    const res = { belowEager: [], aboveLazy: [] };
    for (const img of document.querySelectorAll("img")) {
      const r = img.getBoundingClientRect();
      const visible = r.width > 0 && r.height > 0 && getComputedStyle(img).display !== "none";
      if (!visible || img.closest("#mobile-menu")) continue;
      const src = img.getAttribute("src").slice(0, 80);
      const top = Math.round(r.top + window.scrollY);
      if (top >= vh && img.loading !== "lazy") res.belowEager.push(`${src} (top ${top})`);
      if (top < vh && img.loading === "lazy") res.aboveLazy.push(`${src} (top ${top})`);
    }
    return res;
  });
  await p.close();
}
await b.close();
console.log(JSON.stringify(out, null, 1));
