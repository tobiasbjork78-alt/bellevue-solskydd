// Template "pergola" (/pergola-malmo/).
import { z } from "astro/zod";
import { baseSchema, faqItemSchema } from "./base";
import { heroSchema, tldrSchema, proseBlockSchema, darkCtaSchema } from "./utvandigt-shared";

const modelSchema = z.object({
  maker: z.string(),
  name: z.string(),
  slug: z.string(),
  type: z.string(),
  body: z.string(),
  specs: z.array(z.string()),
  alt: z.string(),
  /** Missing = placeholder (1×1 SVG + model name), as in nextjs-v3 */
  image: z.string().optional(),
});

const comparisonRowSchema = z.object({
  maker: z.string(),
  name: z.string(),
  type: z.string(),
  size: z.string(),
  water: z.string(),
  bestFor: z.string(),
  image: z.string().optional(),
  alt: z.string().optional(),
});

export const pergolaSchema = baseSchema.extend({
  template: z.literal("pergola"),
  hero: heroSchema,
  intro: proseBlockSchema.extend({ contact: z.string() }),
  tldr: tldrSchema,
  models: z.object({ eyebrow: z.string().optional(), heading: z.string(), body: z.string(), items: z.array(modelSchema) }),
  comparison: z.object({
    eyebrow: z.string().optional(),
    heading: z.string(),
    body: z.string(),
    labels: z.object({
      image: z.string(),
      model: z.string(),
      type: z.string(),
      size: z.string(),
      water: z.string(),
      bestFor: z.string(),
    }),
    rows: z.array(comparisonRowSchema),
  }),
  craft: proseBlockSchema,
  investment: proseBlockSchema.extend({ closing: z.string() }),
  warranty: proseBlockSchema,
  faqEyebrow: z.string().optional(),
  faqHeading: z.string(),
  faqs: z.array(faqItemSchema),
  cta: darkCtaSchema,
});
