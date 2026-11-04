// Template "markiser" (/markiser-malmo/). Also exports the building blocks
// shared by the "fonstermarkiser" and "insektsskydd" templates.
// Strings marked HTML may contain inline <strong>/<span>/<a> exactly as in nextjs-v3.
import { z } from "astro/zod";
import { baseSchema, faqItemSchema } from "./base";
import { crossLinkCardsSchema, processStepsSchema, costFactorsSchema, guaranteeTilesSchema } from "./sections";

export const linkSchema = z.object({ label: z.string(), href: z.string() });

export const heroSchema = z.object({
  /** Current src: a real image, or a 1×1 transparent SVG placeholder (data URI) */
  image: z.string(),
  /** object-position of the hero image from md (≥768 px) up, e.g. "50% 35%" */
  heroFocus: z.string().optional(),
  /** object-position below md (mobile), e.g. "70% 40%"; falls back to heroFocus */
  heroFocusMobile: z.string().optional(),
  /** "split": text left on the page background, image in the right half (mobile: image 4:3 on top). Default: image behind text */
  heroLayout: z.enum(["overlay", "split"]).optional(),
  /** Intended real image (from the nextjs-v3 TODO comment); file does not exist yet. */
  plannedImage: z.string().optional(),
  imageAlt: z.string(),
  /** Large faded word shown behind the hero while the image is a placeholder */
  watermark: z.string(),
  /** Visual breadcrumb in the hero; last item = current page (no url) */
  crumbs: z.array(z.object({ name: z.string(), url: z.string().optional() })),
  eyebrow: z.string().optional(),
  h1: z.string(),
  intro: z.string(),
  primaryCta: linkSchema,
  secondaryCta: linkSchema.optional(),
  badges: z.array(z.string()).optional(),
});

export const tldrSchema = z.object({ eyebrow: z.string(), items: z.array(z.string()) });

/** Two-column section: eyebrow/heading left, paragraphs (HTML) right */
export const splitSectionSchema = z.object({
  eyebrow: z.string().optional(),
  heading: z.string(),
  paragraphs: z.array(z.string()),
  link: linkSchema.optional(),
});

/** Single-column section; `closing` is rendered as the last paragraph in text-ink */
export const textSectionSchema = z.object({
  eyebrow: z.string().optional(),
  heading: z.string(),
  paragraphs: z.array(z.string()),
  closing: z.string().optional(),
});

export const faqSectionSchema = z.object({
  eyebrow: z.string().optional(),
  heading: z.string(),
  items: z.array(faqItemSchema),
});

export const finalCtaSchema = z.object({
  eyebrow: z.string().optional(),
  headingLine1: z.string(),
  headingLine2: z.string(),
  body: z.string(),
  cta: linkSchema,
});

/** Model card on /markiser-malmo/ (maker label above model name; image null = placeholder) */
export const modelCardSchema = z.object({
  maker: z.string(),
  name: z.string(),
  type: z.string(),
  body: z.string(),
  specs: z.array(z.string()),
  alt: z.string(),
  image: z.string().nullable(),
  /** Intended image path while `image` is null */
  plannedImage: z.string().optional(),
});

export const markiserSchema = baseSchema.extend({
  template: z.literal("markiser"),
  hero: heroSchema,
  answerBox: z.string(),
  /** Visible "last updated" line under the AnswerBox */
  updatedLabel: z.string(),
  /** Four lines; `label` is the section's aria-label (no visible label) */
  tldr: z.object({ label: z.string(), items: z.array(z.string()) }),
  featured: z.object({ heading: z.string(), intro: z.string(), model: modelCardSchema }),
  alternatives: z.object({ heading: z.string(), intro: z.string(), models: z.array(modelCardSchema) }),
  comparison: z.object({
    heading: z.string(),
    intro: z.string(),
    columns: z.array(z.string()),
    rows: z.array(z.array(z.string())),
    footnote: z.string(),
  }),
  otherProducts: crossLinkCardsSchema,
  process: processStepsSchema,
  price: costFactorsSchema,
  warranty: guaranteeTilesSchema,
  faq: faqSectionSchema,
  finalCta: finalCtaSchema,
});
