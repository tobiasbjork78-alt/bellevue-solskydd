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

/** Comparison table: first column is the model name; every row has one cell per column */
export const comparisonSchema = z
  .object({
    heading: z.string(),
    intro: oneSentence.optional(),
    columns: z.array(z.string()).min(2),
    rows: z.array(z.array(z.string())).min(2),
    footnote: z.string().optional(),
  })
  .refine((c) => c.rows.every((r) => r.length === c.columns.length), { message: "Varje rad måste ha en cell per kolumn" });

/** Model card with maker above the name and 2–3 fact lines; image null = text-only card */
export const shortModelCardSchema = z.object({
  maker: z.string(),
  name: z.string(),
  type: z.string(),
  body: z.string(),
  specs: z.array(z.string()).min(2).max(3),
  alt: z.string(),
  image: z.string().nullable(),
  /** Intended image path while `image` is null */
  plannedImage: z.string().optional(),
});

/** A group of model cards under one H2 (id = anchor for the hero link) */
export const modelGroupSchema = z.object({
  id: z.string().optional(),
  heading: z.string(),
  intro: oneSentence,
  /** Optional second paragraph under the intro (e.g. awards) */
  note: z.string().optional(),
  models: z.array(shortModelCardSchema).min(1),
});

export type ComparisonData = z.infer<typeof comparisonSchema>;
