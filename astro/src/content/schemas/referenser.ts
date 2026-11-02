// Template "referenser": intro, case study cards, footnote, CTA.
import { z } from "astro/zod";
import { baseSchema, ctaSchema } from "./base";

export const productColor = z.enum(["markiser", "persienner", "plisse", "rullgardiner", "zipscreen", "pergola"]);

export const referenserSchema = baseSchema.extend({
  template: z.literal("referenser"),
  eyebrow: z.string(),
  h1Line1: z.string(),
  h1Line2: z.string(),
  intro: z.string(),
  cases: z.array(
    z.object({
      title: z.string(),
      location: z.string(),
      productLabel: z.string(),
      productColor,
      description: z.string(),
    })
  ),
  footnote: z.string(),
  cta: ctaSchema,
});
