// Template "fonstermarkiser" (/fonstermarkiser-malmo/).
import { z } from "astro/zod";
import { baseSchema } from "./base";
import {
  heroSchema,
  tldrSchema,
  splitSectionSchema,
  textSectionSchema,
  faqSectionSchema,
  finalCtaSchema,
} from "./markiser";

export const fonstermarkiserSchema = baseSchema.extend({
  template: z.literal("fonstermarkiser"),
  hero: heroSchema,
  tldr: tldrSchema,
  usage: splitSectionSchema,
  models: z.object({
    eyebrow: z.string().optional(),
    heading: z.string(),
    intro: z.string(),
    cards: z.array(
      z.object({
        maker: z.string(),
        name: z.string(),
        slug: z.string(),
        type: z.string(),
        body: z.string(),
        specs: z.array(z.string()),
        alt: z.string(),
        /** Current src: null = placeholder (1×1 SVG + model name), same as nextjs-v3 */
        image: z.string().nullable(),
        /** Intended image path from the nextjs-v3 TODO comment; file does not exist yet */
        plannedImage: z.string().optional(),
      })
    ),
  }),
  otherModels: z.object({
    eyebrow: z.string().optional(),
    heading: z.string(),
    intro: z.string(),
    items: z.array(z.object({ maker: z.string(), name: z.string(), qualitative: z.string() })),
  }),
  contrast: splitSectionSchema,
  process: splitSectionSchema,
  investment: textSectionSchema,
  warranty: textSectionSchema,
  faq: faqSectionSchema,
  finalCta: finalCtaSchema,
});
