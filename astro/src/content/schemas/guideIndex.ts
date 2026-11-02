// Template "guideIndex": /guider/ — intro + list of guide cards.
import { z } from "astro/zod";
import { baseSchema } from "./base";

export const guideIndexSchema = baseSchema.extend({
  template: z.literal("guideIndex"),
  eyebrow: z.string().optional(),
  h1: z.string(),
  intro: z.string(),
  guides: z.array(
    z.object({
      title: z.string(),
      excerpt: z.string(),
      href: z.string(),
      eyebrow: z.string().optional(),
    })
  ),
});
