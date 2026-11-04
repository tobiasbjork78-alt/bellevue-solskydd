// Template "zipScreen" (/zip-screen-malmo/). Same section order as /markiser-malmo/.
import { z } from "astro/zod";
import { baseSchema, faqItemSchema } from "./base";
import { heroSchema, darkCtaSchema } from "./utvandigt-shared";
import {
  crossLinkCardsSchema,
  processStepsSchema,
  costFactorsSchema,
  guaranteeTilesSchema,
  comparisonSchema,
  modelGroupSchema,
} from "./sections";

export const zipScreenSchema = baseSchema.extend({
  template: z.literal("zipScreen"),
  hero: heroSchema,
  answerBox: z.string(),
  /** Visible "last updated" line under the AnswerBox */
  updatedLabel: z.string(),
  /** `label` is the section's aria-label (no visible label) */
  tldr: z.object({ label: z.string(), items: z.array(z.string()) }),
  contextImage: z.object({ src: z.string(), width: z.number(), height: z.number(), alt: z.string() }),
  modelGroups: z.array(modelGroupSchema).min(1),
  comparison: comparisonSchema,
  otherProducts: crossLinkCardsSchema,
  process: processStepsSchema,
  investment: costFactorsSchema,
  warranty: guaranteeTilesSchema,
  faqHeading: z.string(),
  faqs: z.array(faqItemSchema).min(6).max(8),
  cta: darkCtaSchema,
});
