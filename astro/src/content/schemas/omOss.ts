// Template "omOss": placeholder page ("Innehåll kommer snart") + contact facts.
import { z } from "astro/zod";
import { baseSchema } from "./base";

export const contactFacts = z.object({
  phoneLabel: z.string(),
  phone: z.string(),
  phoneHref: z.string(),
  emailLabel: z.string(),
  email: z.string(),
  addressLabel: z.string(),
  addressLines: z.array(z.string()),
});

export const omOssSchema = baseSchema.extend({
  template: z.literal("omOss"),
  eyebrow: z.string(),
  h1Line1: z.string(),
  h1Line2: z.string(),
  notice: z.object({ label: z.string(), heading: z.string(), body: z.string() }),
  contact: contactFacts,
});
