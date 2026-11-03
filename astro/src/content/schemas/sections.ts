// Structured section blocks shared by several templates:
// CrossLinkCards, ProcessSteps, CostFactors and GuaranteeTiles (src/components/sections/).
// Word limits are enforced here so a too-long line fails the build.
import { z } from "astro/zod";

const wordCount = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;
const maxWords = (n: number) =>
  z.string().refine((s) => wordCount(s) <= n, { message: `Max ${n} ord` });
/** One sentence at most (no sentence break inside the string) */
const oneSentence = z
  .string()
  .refine((s) => !/[.!?]\s+\S/.test(s.trim()), { message: "Max en ingressmening" });

const sectionBase = z.object({
  heading: z.string(),
  intro: oneSentence.optional(),
});

/** "När X, Y eller Z passar bättre": 2–4 cards, each a single link */
export const crossLinkCardsSchema = sectionBase.extend({
  items: z
    .array(z.object({ name: z.string(), text: maxWords(12), href: z.string() }))
    .min(2)
    .max(4),
});

/** "Från hembesök till …": 3–5 numbered steps */
export const processStepsSchema = sectionBase.extend({
  steps: z
    .array(z.object({ title: maxWords(3), text: maxWords(12) }))
    .min(3)
    .max(5),
});

/** "Det här avgör vad … kostar": 4–6 numbered factors, optional chips (no prices) */
export const costFactorsSchema = sectionBase.extend({
  factors: z
    .array(z.object({ name: z.string(), text: maxWords(12) }))
    .min(4)
    .max(6),
  chips: z.array(z.string()).optional(),
});

/** Guarantee section: 1–3 tiles with the figure as text, plus one service line */
export const guaranteeTilesSchema = sectionBase.extend({
  tiles: z
    .array(z.object({ value: z.string(), label: z.string() }))
    .min(1)
    .max(3),
  service: z.string(),
});

export type CrossLinkCardsData = z.infer<typeof crossLinkCardsSchema>;
export type ProcessStepsData = z.infer<typeof processStepsSchema>;
export type CostFactorsData = z.infer<typeof costFactorsSchema>;
export type GuaranteeTilesData = z.infer<typeof guaranteeTilesSchema>;
