// Pixel comparison of docs/port-screens/*__nextjs.png vs *__astro.png (sharp).
// Reports both heights and % of differing pixels over the common area (threshold 16/255 per channel).
import sharp from "sharp";
import { readdirSync } from "node:fs";
const dir = new URL("../docs/port-screens/", import.meta.url).pathname;
for (const f of readdirSync(dir).filter((x) => x.endsWith("__nextjs.png")).sort()) {
  const a = sharp(dir + f), b = sharp(dir + f.replace("__nextjs", "__astro"));
  const [ma, mb] = await Promise.all([a.metadata(), b.metadata()]);
  const w = Math.min(ma.width, mb.width), h = Math.min(ma.height, mb.height);
  const [ra, rb] = await Promise.all([
    a.extract({ left: 0, top: 0, width: w, height: h }).removeAlpha().raw().toBuffer(),
    b.extract({ left: 0, top: 0, width: w, height: h }).removeAlpha().raw().toBuffer(),
  ]);
  let diff = 0;
  for (let i = 0; i < ra.length; i += 3) {
    if (Math.abs(ra[i] - rb[i]) > 16 || Math.abs(ra[i + 1] - rb[i + 1]) > 16 || Math.abs(ra[i + 2] - rb[i + 2]) > 16) diff++;
  }
  console.log(`${f.replace("__nextjs.png", "")}\theight next=${ma.height} astro=${mb.height}\tdiff=${((diff / (w * h)) * 100).toFixed(2)}%`);
}
