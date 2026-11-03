// Template "article": guides and the invändiga product pages.
// Layout: breadcrumbs, eyebrow + h1, AnswerBox, Markdown body (## = section), FAQ, CTA.
import { z } from "astro/zod";
import { baseSchema, faqItemSchema, ctaSchema } from "./base";
import { crossLinkCardsSchema, processStepsSchema, costFactorsSchema } from "./sections";

export const articleSchema = baseSchema.extend({
  template: z.literal("article"),
  /** guide = <article>/<header> wrappers (guider), product = <div> wrappers */
  variant: z.enum(["guide", "product"]),
  eyebrow: z.string().optional(),
  h1: z.string(),
  /** HTML allowed (inline links/strong) */
  answerBox: z.string().optional(),
  faqEyebrow: z.string().optional(),
  faqHeading: z.string().optional(),
  faqs: z.array(faqItemSchema).optional(),
  cta: ctaSchema.optional(),
  /**
   * Sections rendered after the Markdown body, before the FAQ, in this order.
   * prose = a body section moved here to keep the page order (heading + HTML).
   */
  tail: z
    .array(
      z.discriminatedUnion("kind", [
        z.object({ kind: z.literal("prose"), heading: z.string(), html: z.string() }),
        crossLinkCardsSchema.extend({ kind: z.literal("crossLinks") }),
        processStepsSchema.extend({ kind: z.literal("processSteps") }),
        costFactorsSchema.extend({ kind: z.literal("costFactors") }),
      ])
    )
    .optional(),
  /** Section rendered after the FAQ (heading + HTML body) */
  afterFaq: z.object({ heading: z.string(), html: z.string() }).optional(),
});
