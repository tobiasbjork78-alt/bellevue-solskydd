// Template "city": local city page (port of CityPageView). All text stored expanded per page.
import { z } from "astro/zod";
import { baseSchema, faqItemSchema, ctaSchema } from "./base";
import { processStepsSchema } from "./sections";

const section = z.object({ heading: z.string(), paragraphs: z.array(z.string()) });

export const citySchema = baseSchema.extend({
  template: z.literal("city"),
  eyebrow: z.string().optional(),
  h1: z.string(),
  answerBox: z.string(),
  why: section,
  overview: section.extend({ link: z.object({ href: z.string(), label: z.string() }) }),
  process: processStepsSchema,
  faqEyebrow: z.string().optional(),
  faqHeading: z.string(),
  faqs: z.array(faqItemSchema),
  cta: ctaSchema,
});
