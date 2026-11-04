// og:image per page. Run again when hero or model images change:
//   node scripts/og-images.mjs        (from astro/)
// For each page in src/content/pages: crop the hero image (or the hero video poster) to 1200×630 JPG,
// otherwise the first model card that has an image. Pages without either get the shared standard image
// (logo centred on #F6F2EA). Writes public/images/og/<slug>.jpg and src/data/og-images.json,
// which BaseLayout reads by page path.
import { readFileSync, writeFileSync, readdirSync, statSync, mkdirSync, existsSync } from "node:fs";
import { join, relative, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { parse } from "yaml";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PAGES = join(ROOT, "src/content/pages");
const PUBLIC = join(ROOT, "public");
const OUT_DIR = join(PUBLIC, "images/og");
const W = 1200, H = 630, MAX_BYTES = 300 * 1024;
const BG = "#F6F2EA";
const LOGO = join(ROOT, "src/assets/bellevue-logo-980.webp"); // black logo on white, 980×283 (copy of repo-root assets/)
const STANDARD = { image: "/images/og/standard.jpg", alt: "Bellevue Solskydds logotyp på ljus bakgrund" };

// Alt for source images whose alt on the page is empty or belongs to another file (same rules as alt-check.py)
const ALT_FOR = {
  "/images/terrassmarkis-malmo-hero.webp": "Terrassmarkis utfälld över en uteplats vid ett tegelhus i kvällssol",
  "/images/pergola/pergola-hero-poster.webp": "Lamellpergola vid ett tegelhus i skymningen med personer i en soffgrupp",
};
const PLACES = /\b(Malmö|Lund|Skåne|Skanör|Falsterbo|Limhamn|Vellinge|Staffanstorp)/i;

function walk(dir) {
  return readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? walk(p) : n.endsWith(".md") ? [p] : [];
  });
}

function frontmatter(file) {
  const m = readFileSync(file, "utf8").match(/^---\n([\s\S]*?)\n---/);
  return m ? parse(m[1]) : {};
}

const isImage = (v) => typeof v === "string" && v.startsWith("/images/");

/** Hero first (poster when the hero is a video), then the first model card with an image */
function pickSource(d) {
  if (d.heroVideo && isImage(d.heroPoster)) return { src: d.heroPoster, alt: "" };
  if (d.hero && isImage(d.hero.image)) return { src: d.hero.image, alt: d.hero.alt ?? d.hero.imageAlt ?? "" };
  const cards = [
    d.featured?.model,
    ...(d.alternatives?.models ?? []),
    ...(d.modelGroups ?? []).flatMap((g) => g.models ?? []),
    ...(d.models ?? []),
  ].filter(Boolean);
  const card = cards.find((c) => isImage(c.image));
  return card ? { src: card.image, alt: card.alt ?? "" } : null;
}

async function writeJpg(pipeline, out) {
  for (let q = 86; q >= 50; q -= 4) {
    const buf = await pipeline.clone().jpeg({ quality: q, mozjpeg: true }).toBuffer();
    if (buf.length <= MAX_BYTES) {
      writeFileSync(out, buf);
      return buf.length;
    }
  }
  throw new Error(`${out}: över 300 KB även vid kvalitet 50`);
}

mkdirSync(OUT_DIR, { recursive: true });
mkdirSync(join(ROOT, "src/data"), { recursive: true });

// Standard image: logo multiplied onto the background so the logo's white box disappears
const logo = await sharp(LOGO).resize({ width: 560 }).toBuffer();
const std = sharp({ create: { width: W, height: H, channels: 3, background: BG } }).composite([{ input: logo, gravity: "centre", blend: "multiply" }]);
await writeJpg(std, join(PUBLIC, STANDARD.image));

const map = {};
const errors = [];
for (const file of walk(PAGES).sort()) {
  const rel = relative(PAGES, file).replace(/\\/g, "/").replace(/\.md$/, "");
  const base = rel.replace(/(^|\/)index$/, "");
  const path = base ? `/${base}/` : "/";
  const slug = rel === "index" ? "startsida" : rel.replace(/\/index$/, "").replace(/\//g, "-");
  const source = pickSource(frontmatter(file));
  if (!source) {
    map[path] = { ...STANDARD, width: W, height: H };
    continue;
  }
  const alt = (ALT_FOR[source.src] ?? source.alt).trim();
  if (!alt || alt.length > 125 || /^(bild|foto)/i.test(alt) || PLACES.test(alt)) errors.push(`${path}: ogiltig alt för ${source.src}: "${alt}"`);
  const input = join(PUBLIC, source.src);
  if (!existsSync(input)) {
    errors.push(`${path}: källbilden finns inte: ${source.src}`);
    continue;
  }
  const image = `/images/og/${slug}.jpg`;
  const bytes = await writeJpg(sharp(input).resize(W, H, { fit: "cover", position: "centre" }).flatten({ background: "#ffffff" }), join(PUBLIC, image));
  map[path] = { image, alt, width: W, height: H, source: source.src };
  console.log(`${path} ← ${source.src} → ${image} (${Math.round(bytes / 1024)} KB)`);
}
writeFileSync(join(ROOT, "src/data/og-images.json"), JSON.stringify({ standard: { ...STANDARD, width: W, height: H }, pages: map }, null, 2) + "\n");
const std_n = Object.values(map).filter((v) => v.image === STANDARD.image).length;
console.log(`${Object.keys(map).length} sidor, ${std_n} med standardbilden`);
if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
