import { z } from "zod";
import { emailSchema, nameSchema } from "@/components/shared/validation";
import { phoneSchema } from "@/components/shared/validation";
import { selectSchema } from "@/components/shared/validation";
export const validation = z.object({
  name: nameSchema,
  lname: nameSchema,

  phone: phoneSchema,

  email: emailSchema,

  skills: selectSchema,

  location: z
    .string()
    .min(2, "محل سکونت باید حداقل 2 کاراکتر باشد"),
});
