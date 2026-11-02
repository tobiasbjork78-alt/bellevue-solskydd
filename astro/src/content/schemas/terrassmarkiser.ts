// Template "terrassmarkiser": bespoke layout for /terrassmarkiser-malmo/.
// All visible page text lives in src/content/pages/terrassmarkiser-malmo.md.
import { z } from "astro/zod";
import { baseSchema, faqItemSchema } from "./base";

const textBlock = z.object({
  eyebrow: z.string().optional(),
  heading: z.string(),
  /** HTML allowed (inline links with classes) */
  paragraphs: z.array(z.string()),
});

const modelCard = z.object({
  maker: z.string(),
  name: z.string(),
  slug: z.string(),
  type: z.string(),
  body: z.string(),
  specs: z.array(z.string()),
  passarDigOm: z.string(),
  extraNote: z
    .object({
      kind: z.enum(["kundord", "begransning"]),
      text: z.string(),
      source: z.string().optional(),
    })
    .optional(),
  alt: z.string(),
  /** Current image; null = placeholder (page-level placeholderImage) as in nextjs-v3 */
  image: z.string().nullable(),
  /** Intended path from the TODO comment in nextjs-v3 (file does not exist yet) */
  plannedImage: z.string().optional(),
});

const supplier = textBlock.extend({ models: z.array(modelCard) });

export const terrassmarkiserSchema = baseSchema.extend({
  template: z.literal("terrassmarkiser"),
  /** 1×1 transparent SVG used where no product image exists */
  placeholderImage: z.string(),
  hero: z.object({
    image: z.string(),
    plannedImage: z.string().optional(),
    imageAlt: z.string(),
    watermark: z.string(),
    eyebrow: z.string().optional(),
    h1: z.string(),
    lead: z.string(),
    facts: z.array(z.string()),
  }),
  tldr: z.object({ label: z.string(), eyebrow: z.string(), items: z.array(z.string()) }),
  usage: textBlock,
  harol: supplier,
  selt: supplier,
  fonstermiljo: supplier,
  korgmarkis: textBlock.extend({ linkText: z.string(), linkHref: z.string() }),
  process: textBlock,
  investment: textBlock.extend({ closing: z.string() }),
  warranty: textBlock,
  faqEyebrow: z.string().optional(),
  faqHeading: z.string(),
  faqs: z.array(faqItemSchema),
  cta: z.object({
    eyebrow: z.string().optional(),
    headingLine1: z.string(),
    headingLine2: z.string(),
    body: z.string(),
  }),
});
