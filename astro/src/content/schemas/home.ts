// Template "home": hero, local proof badges, product grid, consultation CTA.
import { z } from "astro/zod";
import { baseSchema, ctaSchema } from "./base";

const productCard = z.object({
  title: z.string(),
  description: z.string(),
  href: z.string(),
  /** null = dark placeholder card (no image), same as nextjs-v3 */
  image: z.string().nullable(),
});

export const homeSchema = baseSchema.extend({
  template: z.literal("home"),
  hero: z.object({
    image: z.string(),
    eyebrow: z.string(),
    headingLine1: z.string(),
    headingLine2: z.string(),
    body: z.string(),
  }),
  localProof: z.object({
    eyebrow: z.string().optional(),
    heading: z.string(),
    items: z.array(
      z.object({
        icon: z.enum(["house", "shield-check", "wrench", "message-circle"]),
        title: z.string(),
        description: z.string(),
      })
    ),
  }),
  products: z.object({
    eyebrow: z.string().optional(),
    heading: z.string(),
    body: z.string(),
    indoorLabel: z.string(),
    indoor: z.array(productCard),
    outdoorLabel: z.string(),
    outdoor: z.array(productCard),
  }),
  cta: ctaSchema,
});
