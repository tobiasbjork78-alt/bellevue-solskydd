// Template "zipScreen" (/zip-screen-malmo/).
import { z } from "astro/zod";
import { baseSchema, faqItemSchema } from "./base";
import { heroSchema, tldrSchema, proseBlockSchema, darkCtaSchema } from "./utvandigt-shared";

const modelSchema = z.object({
  maker: z.string(),
  name: z.string(),
  slug: z.string(),
  type: z.string(),
  body: z.string(),
  specs: z.array(z.string()),
  passarDigOm: z.string(),
  extraNote: z
    .object({ kind: z.enum(["kundord", "begransning"]), text: z.string(), source: z.string().optional() })
    .optional(),
  alt: z.string(),
  /** Missing = placeholder (1×1 SVG + model name), as in nextjs-v3 */
  image: z.string().optional(),
});

export const zipScreenSchema = baseSchema.extend({
  template: z.literal("zipScreen"),
  hero: heroSchema,
  tldr: tldrSchema,
  contextImage: z.object({ src: z.string(), width: z.number(), height: z.number(), alt: z.string() }),
  usage: proseBlockSchema,
  harol: proseBlockSchema.extend({ models: z.array(modelSchema) }),
  selt: proseBlockSchema.extend({ models: z.array(modelSchema) }),
  process: proseBlockSchema,
  investment: proseBlockSchema.extend({ closing: z.string() }),
  warranty: proseBlockSchema.extend({ backgroundImage: z.string() }),
  faqEyebrow: z.string(),
  faqHeading: z.string(),
  faqs: z.array(faqItemSchema),
  cta: darkCtaSchema,
});
