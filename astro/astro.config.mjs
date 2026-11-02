// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { unified } from "@astrojs/markdown-remark";
import { readSitemapMeta } from "./src/lib/sitemap-meta.mjs";
import { rehypeProse } from "./src/lib/rehype-prose.mjs";

const SITE = "https://bellevuesolskydd.se";
const meta = readSitemapMeta(new URL("./src/content/pages/", import.meta.url));

export default defineConfig({
  site: SITE,
  output: "static",
  trailingSlash: "always",
  build: { format: "directory" },
  markdown: {
    // smartypants off: text must stay character-identical to nextjs-v3 (straight quotes, no dash conversion)
    processor: unified({ smartypants: false, rehypePlugins: [rehypeProse] }),
  },
  integrations: [
    sitemap({
      // Same URL selection as nextjs-v3/public/sitemap.xml: pages with `sitemap: false` are excluded
      filter: (page) => {
        const path = new URL(page).pathname;
        const m = meta.get(path);
        return Boolean(m && m.include);
      },
      serialize(item) {
        const path = new URL(item.url).pathname;
        const m = meta.get(path);
        if (m) {
          item.lastmod = m.updated;
          if (m.changefreq) item.changefreq = /** @type {any} */ (m.changefreq);
          if (m.priority !== undefined) item.priority = m.priority;
        }
        return item;
      },
    }),
  ],
});
