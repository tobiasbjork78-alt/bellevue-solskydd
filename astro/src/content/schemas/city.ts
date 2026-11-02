// Template "city": local city page (port of CityPageView). All text stored expanded per page.
import { z } from "astro/zod";
import { baseSchema, faqItemSchema, ctaSchema } from "./base";

const section = z.object({ heading: z.string(), paragraphs: z.array(z.string()) });

export const citySchema = baseSchema.extend({
  template: z.literal("city"),
  eyebrow: z.string(),
  h1: z.string(),
  answerBox: z.string(),
  why: section,
  overview: section.extend({ link: z.object({ href: z.string(), label: z.string() }) }),
  process: z.object({
    heading: z.string(),
    intro: z.string(),
    steps: z.array(z.object({ index: z.string(), title: z.string(), body: z.string() })),
  }),
  faqEyebrow: z.string(),
  faqHeading: z.string(),
  faqs: z.array(faqItemSchema),
  cta: ctaSchema,
});
