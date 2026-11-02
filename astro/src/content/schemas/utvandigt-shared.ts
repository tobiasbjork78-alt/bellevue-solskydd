// Shared frontmatter pieces for the bespoke utvändiga pages (pergola, zip-screen).
import { z } from "astro/zod";

export const heroSchema = z.object({
  image: z.string(),
  alt: z.string(),
  eyebrow: z.string().optional(),
  h1: z.string(),
  body: z.string(),
  primaryCta: z.string(),
  secondaryCta: z.string(),
  trust: z.array(z.string()),
});

export const tldrSchema = z.object({ eyebrow: z.string(), items: z.array(z.string()) });

/** Paragraph strings may contain inline HTML (links/strong) */
export const proseBlockSchema = z.object({
  eyebrow: z.string().optional(),
  heading: z.string(),
  paragraphs: z.array(z.string()),
});

export const darkCtaSchema = z.object({
  eyebrow: z.string().optional(),
  headingLine1: z.string(),
  headingLine2: z.string(),
  body: z.string(),
  button: z.string(),
});
