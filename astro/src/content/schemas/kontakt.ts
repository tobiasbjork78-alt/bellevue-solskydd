// Template "kontakt": contact facts + opening hours. Form slot stays empty (Web3Forms TODO, as in nextjs-v3).
import { z } from "astro/zod";
import { baseSchema } from "./base";
import { contactFacts } from "./omOss";

export const kontaktSchema = baseSchema.extend({
  template: z.literal("kontakt"),
  eyebrow: z.string(),
  h1: z.string(),
  intro: z.string(),
  contact: contactFacts,
  hoursLabel: z.string(),
  hours: z.array(z.object({ days: z.string(), time: z.string() })),
});
