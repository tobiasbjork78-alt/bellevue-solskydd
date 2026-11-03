// Template "insektsskydd" (/insektsskydd-malmo/).
import { z } from "astro/zod";
import { baseSchema } from "./base";
import { processStepsSchema, guaranteeTilesSchema } from "./sections";
import {
  heroSchema,
  tldrSchema,
  splitSectionSchema,
  faqSectionSchema,
  finalCtaSchema,
} from "./markiser";

export const insektsskyddSchema = baseSchema.extend({
  template: z.literal("insektsskydd"),
  hero: heroSchema,
  tldr: tldrSchema,
  usage: splitSectionSchema,
  types: z.object({
    eyebrow: z.string().optional(),
    heading: z.string(),
    intro: z.string(),
    items: z.array(z.object({ title: z.string(), body: z.string() })),
  }),
  craft: processStepsSchema,
  warranty: guaranteeTilesSchema,
  faq: faqSectionSchema,
  finalCta: finalCtaSchema,
});
