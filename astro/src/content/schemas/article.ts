// Template "article": guides and the invändiga product pages.
// Layout: breadcrumbs, eyebrow + h1, AnswerBox, Markdown body (## = section), FAQ, CTA.
import { z } from "astro/zod";
import { baseSchema, faqItemSchema, ctaSchema } from "./base";

export const articleSchema = baseSchema.extend({
  template: z.literal("article"),
  /** guide = <article>/<header> wrappers (guider), product = <div> wrappers */
  variant: z.enum(["guide", "product"]),
  eyebrow: z.string(),
  h1: z.string(),
  /** HTML allowed (inline links/strong) */
  answerBox: z.string().optional(),
  faqEyebrow: z.string().optional(),
  faqHeading: z.string().optional(),
  faqs: z.array(faqItemSchema).optional(),
  cta: ctaSchema.optional(),
  /** Section rendered after the FAQ (heading + HTML body) */
  afterFaq: z.object({ heading: z.string(), html: z.string() }).optional(),
});
