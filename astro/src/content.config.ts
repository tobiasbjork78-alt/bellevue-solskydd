// One collection: every route has exactly one Markdown file in src/content/pages.
// File path = route (index.md = "/", guider/index.md = "/guider/").
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { homeSchema } from "./content/schemas/home";
import { articleSchema } from "./content/schemas/article";
import { citySchema } from "./content/schemas/city";
import { guideIndexSchema } from "./content/schemas/guideIndex";
import { kontaktSchema } from "./content/schemas/kontakt";
import { omOssSchema } from "./content/schemas/omOss";
import { referenserSchema } from "./content/schemas/referenser";
import { markiserSchema } from "./content/schemas/markiser";
import { terrassmarkiserSchema } from "./content/schemas/terrassmarkiser";
import { fonstermarkiserSchema } from "./content/schemas/fonstermarkiser";
import { insektsskyddSchema } from "./content/schemas/insektsskydd";
import { pergolaSchema } from "./content/schemas/pergola";
import { zipScreenSchema } from "./content/schemas/zipScreen";

const pages = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/pages" }),
  schema: z.discriminatedUnion("template", [
    homeSchema,
    articleSchema,
    citySchema,
    guideIndexSchema,
    kontaktSchema,
    omOssSchema,
    referenserSchema,
    markiserSchema,
    terrassmarkiserSchema,
    fonstermarkiserSchema,
    insektsskyddSchema,
    pergolaSchema,
    zipScreenSchema,
  ]),
});

export const collections = { pages };
