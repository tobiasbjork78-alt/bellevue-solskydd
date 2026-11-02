// Screenshots of nextjs-v3/out and astro/dist (served statically) at 1440 px and 390 px.
// Playwright is loaded from ~/projects/product-scraper (not a dependency of this project).
// Usage: node scripts/screens.mjs   (expects servers on :4401 = out, :4402 = dist)
import { createRequire } from "node:module";
import { mkdirSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const require = createRequire(join(homedir(), "projects/product-scraper/package.json"));
const { chromium } = require("playwright");

const OUT_DIR = new URL("../docs/port-screens/", import.meta.url).pathname;
mkdirSync(OUT_DIR, { recursive: true });

const routes = [
  ["start", "/"],
  ["markiser-malmo", "/markiser-malmo/"],
  ["pergola-malmo", "/pergola-malmo/"],
  ["zip-screen-malmo", "/zip-screen-malmo/"],
  ["persienner-malmo", "/persienner-malmo/"],
  ["guide-solskydd-insyn", "/guider/solskydd-insyn/"],
];
const sources = [
  ["nextjs", "http://127.0.0.1:4401"],
  ["astro", "http://127.0.0.1:4402"],
];
const viewports = [
  ["desktop-1440", { width: 1440, height: 900 }],
  ["mobil-390", { width: 390, height: 844 }],
];

const browser = await chromium.launch();
for (const [vpName, viewport] of viewports) {
  const context = await browser.newContext({ viewport, reducedMotion: "reduce" });
  const page = await context.newPage();
  for (const [name, route] of routes) {
    for (const [src, base] of sources) {
      await page.goto(base + route, { waitUntil: "networkidle" });
      // Reveal elements are made visible the same way on both (reduced motion)
      await page.evaluate(() => document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible")));
      await page.waitForTimeout(300);
      const file = join(OUT_DIR, `${name}__${vpName}__${src}.png`);
      await page.screenshot({ path: file, fullPage: true });
      console.log(file);
    }
  }
  await context.close();
}
await browser.close();
