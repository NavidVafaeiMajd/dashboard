import { z } from "zod";
import { emailSchema, nameSchema } from "@/components/shared/validation";
import { phoneSchema } from "@/components/shared/validation";
import { selectSchema } from "@/components/shared/validation";
export const validation = z.object({
  first_name: nameSchema,
  last_name: nameSchema,

  phone: phoneSchema,

  email: emailSchema,

  specialty: selectSchema,

  address: z.string().min(2, "محل سکونت باید حداقل 2 کاراکتر باشد"),
});
