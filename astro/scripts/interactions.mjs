// Interaction smoke test (Playwright from ~/projects/product-scraper).
// Usage: BASE=http://127.0.0.1:4402 node scripts/interactions.mjs   (default: dist served on :4402; dev: BASE=http://127.0.0.1:4321)
import { createRequire } from "node:module";
import { homedir } from "node:os";
import { join } from "node:path";
const require = createRequire(join(homedir(), "projects/product-scraper/package.json"));
const { chromium } = require("playwright");
const base = process.env.BASE ?? "http://127.0.0.1:4402";
const b = await chromium.launch();
const results = [];
const check = (name, ok) => results.push(`${ok ? "PASS" : "FAIL"} ${name}`);

// Mobile menu
let p = await b.newPage({ viewport: { width: 390, height: 844 } });
await p.goto(base + "/persienner-malmo/");
await p.click("[data-menu-open]");
check("menu opens", await p.isVisible("#mobile-menu"));
check("aria-expanded true", (await p.getAttribute("[data-menu-open]", "aria-expanded")) === "true");
check("body scroll locked", (await p.evaluate(() => document.body.style.overflow)) === "hidden");
check("mobile menu: Terrassmarkiser → /markiser-malmo/", (await p.locator('#mobile-menu a[href="/markiser-malmo/"]').textContent()).trim() === "Terrassmarkiser");
check("mobile menu: Fönstermarkiser not nested under Terrassmarkiser", await p.evaluate(() => {
  const t = document.querySelector('#mobile-menu a[href="/markiser-malmo/"]').closest("ul");
  const f = document.querySelector('#mobile-menu a[href="/fonstermarkiser-malmo/"]').closest("ul");
  return t === f;
}));
check("focus moved into menu", await p.evaluate(() => document.getElementById("mobile-menu").contains(document.activeElement)));
for (let i = 0; i < 40; i++) await p.keyboard.press("Tab");
check("focus trapped after 40 Tab", await p.evaluate(() => document.getElementById("mobile-menu").contains(document.activeElement)));
await p.keyboard.press("Shift+Tab");
check("focus trapped Shift+Tab", await p.evaluate(() => document.getElementById("mobile-menu").contains(document.activeElement)));
await p.keyboard.press("Escape");
check("Esc closes", !(await p.isVisible("#mobile-menu")));
check("focus returned to trigger", await p.evaluate(() => document.activeElement?.hasAttribute("data-menu-open")));
check("scroll unlocked", (await p.evaluate(() => document.body.style.overflow)) === "");

// FAQ
const first = p.locator("[data-faq-toggle]").first();
const second = p.locator("[data-faq-toggle]").nth(1);
check("FAQ first initial aria-expanded=true", (await first.getAttribute("aria-expanded")) === "true");
// First answer visible on load, closes with one click
const firstPanel = p.locator("[data-faq-panel]").first();
check("FAQ first answer visible on load (height>0)", (await firstPanel.evaluate((e) => e.getBoundingClientRect().height)) > 0);
// All answers present in server HTML (not inserted by JS)
const rawHtml = await (await fetch(base + "/persienner-malmo/")).text();
const answers = await p.locator("[data-faq-panel] p").allTextContents();
const decode = (t) => t.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
check(`FAQ all ${answers.length} answers in server HTML`, answers.length > 0 && answers.every((a) => decode(rawHtml).includes(a.trim())));
await first.click();
await p.waitForTimeout(600);
check("FAQ first closes with one click (aria-expanded=false)", (await first.getAttribute("aria-expanded")) === "false");
check("FAQ first closes with one click (height 0)", (await firstPanel.evaluate((e) => e.getBoundingClientRect().height)) === 0);
await first.click();
await p.waitForTimeout(600);
check("FAQ first reopens with one click (height>0)", (await firstPanel.evaluate((e) => e.getBoundingClientRect().height)) > 0);
await second.click();
await p.waitForTimeout(600);
const h = await p.locator("[data-faq-panel]").nth(1).evaluate((e) => e.getBoundingClientRect().height);
check("FAQ second opens (height>0)", h > 0);
await second.click();
await p.waitForTimeout(600);
const h2 = await p.locator("[data-faq-panel]").nth(1).evaluate((e) => e.getBoundingClientRect().height);
check("FAQ second closes", h2 === 0);

// Header scroll state
await p.evaluate(() => window.scrollTo(0, 400));
await p.waitForTimeout(200);
check("header scrolled class", await p.evaluate(() => document.querySelector("[data-site-header]").classList.contains("bg-canvas-soft/95")));
await p.close();

// Desktop dropdown (CSS hover, as nextjs-v3)
p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto(base + "/");
await p.hover("nav >> text=Utvändigt");
await p.waitForTimeout(400);
check("dropdown visible on hover", await p.isVisible("text=Fönstermarkiser"));
// Terrassmarkiser and Fönstermarkiser are equal items in the Utvändigt dropdown
const dropdownTerrass = p.locator('header nav.hidden a[href="/markiser-malmo/"]');
check("dropdown: Terrassmarkiser → /markiser-malmo/", (await dropdownTerrass.count()) === 1 && (await dropdownTerrass.textContent()).trim() === "Terrassmarkiser" && (await dropdownTerrass.isVisible()));
check("dropdown: Terrassmarkiser and Fönstermarkiser are siblings", await p.evaluate(() => {
  const t = document.querySelector('header nav a[href="/markiser-malmo/"]');
  const f = document.querySelector('header nav a[href="/fonstermarkiser-malmo/"]');
  return Boolean(t && f && t.parentElement === f.parentElement);
}));
check('dropdown: "Zip screen" label', (await p.locator('header nav a[href="/zip-screen-malmo/"]').first().textContent()).trim() === "Zip screen");
// Reveal on home
await p.waitForTimeout(500);
check("reveal: hero visible", await p.evaluate(() => document.querySelector("h1.reveal").classList.contains("visible")));
await p.close();

// Page change from footer link starts at top (no #anchor)
p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto(base + "/");
check("footer: Terrassmarkiser → /markiser-malmo/", (await p.locator('footer a[href="/markiser-malmo/"]').first().textContent()).trim() === "Terrassmarkiser");
const footerLink = p.locator('footer a[href="/persienner-malmo/"]').first();
await footerLink.scrollIntoViewIfNeeded();
await p.waitForTimeout(300);
check("footer link: start page scrolled down before click", (await p.evaluate(() => window.scrollY)) > 0);
await Promise.all([p.waitForURL("**/persienner-malmo/"), footerLink.click()]);
await p.waitForLoadState("load");
await p.waitForTimeout(1000);
check("footer link: new page window.scrollY === 0", (await p.evaluate(() => window.scrollY)) === 0);
await b.close();
console.log(`BASE ${base}`);
console.log(results.join("\n"));
const failed = results.filter((r) => r.startsWith("FAIL")).length;
process.exit(failed ? 1 : 0);
