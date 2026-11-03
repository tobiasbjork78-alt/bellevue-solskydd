// Template "fonstermarkiser" (/fonstermarkiser-malmo/). Same section order as /markiser-malmo/.
import { z } from "astro/zod";
import { baseSchema } from "./base";
import {
  crossLinkCardsSchema,
  processStepsSchema,
  costFactorsSchema,
  guaranteeTilesSchema,
  comparisonSchema,
  modelGroupSchema,
} from "./sections";
import { heroSchema, faqSectionSchema, finalCtaSchema } from "./markiser";

export const fonstermarkiserSchema = baseSchema.extend({
  template: z.literal("fonstermarkiser"),
  hero: heroSchema,
  answerBox: z.string(),
  /** Visible "last updated" line under the AnswerBox */
  updatedLabel: z.string(),
  /** `label` is the section's aria-label (no visible label) */
  tldr: z.object({ label: z.string(), items: z.array(z.string()) }),
  modelGroups: z.array(modelGroupSchema).min(1),
  comparison: comparisonSchema,
  otherProducts: crossLinkCardsSchema,
  process: processStepsSchema,
  investment: costFactorsSchema,
  warranty: guaranteeTilesSchema,
  faq: faqSectionSchema.extend({ items: faqSectionSchema.shape.items.min(6).max(9) }),
  finalCta: finalCtaSchema,
});
