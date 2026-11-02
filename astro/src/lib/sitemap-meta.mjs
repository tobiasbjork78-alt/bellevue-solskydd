// Reads frontmatter from src/content/pages/**/*.md(x) at config time so the
// sitemap integration can use `updated` (lastmod) and the `sitemap` field.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "yaml";

/** Content file path (relative, without extension) -> route path with trailing slash */
export function routeFromId(id) {
  const clean = id.split(sep).join("/").replace(/\.(md|mdx)$/, "");
  if (clean === "index") return "/";
  if (clean.endsWith("/index")) return `/${clean.slice(0, -"/index".length)}/`;
  return `/${clean}/`;
}

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });
}

export function readSitemapMeta(baseUrl) {
  const base = fileURLToPath(baseUrl);
  const map = new Map();
  for (const file of walk(base)) {
    if (!/\.(md|mdx)$/.test(file)) continue;
    const src = readFileSync(file, "utf-8");
    const fm = src.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!fm) continue;
    const data = parse(fm[1]) ?? {};
    const route = routeFromId(relative(base, file));
    const sm = data.sitemap;
    map.set(route, {
      include: sm !== false,
      updated: String(data.updated),
      priority: sm && typeof sm === "object" ? sm.priority : undefined,
      changefreq: sm && typeof sm === "object" ? sm.changefreq : undefined,
    });
  }
  return map;
}
