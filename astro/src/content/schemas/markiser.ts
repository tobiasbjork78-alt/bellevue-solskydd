// Template "markiser" (/markiser-malmo/). Also exports the building blocks
// shared by the "fonstermarkiser" and "insektsskydd" templates.
// Strings marked HTML may contain inline <strong>/<span>/<a> exactly as in nextjs-v3.
import { z } from "astro/zod";
import { baseSchema, faqItemSchema } from "./base";

export const linkSchema = z.object({ label: z.string(), href: z.string() });

export const heroSchema = z.object({
  /** Current src. Today a 1×1 transparent SVG placeholder (data URI). */
  image: z.string(),
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
  secondaryCta: linkSchema,
  badges: z.array(z.string()),
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

export const markiserSchema = baseSchema.extend({
  template: z.literal("markiser"),
  hero: heroSchema,
  tldr: tldrSchema,
  types: z.object({
    eyebrow: z.string().optional(),
    heading: z.string(),
    intro: z.string(),
    items: z.array(
      z.object({
        heading: z.string(),
        /** HTML paragraphs */
        paragraphs: z.array(z.string()),
        link: linkSchema,
      })
    ),
  }),
  pergola: splitSectionSchema,
  method: splitSectionSchema,
  price: textSectionSchema,
  warranty: textSectionSchema,
  faq: faqSectionSchema,
  finalCta: finalCtaSchema,
});
