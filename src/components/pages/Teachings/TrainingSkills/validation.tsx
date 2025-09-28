import { z } from "zod";

export const validation = z.object({
  name: z
    .string()
    .min(2, "  برای مهارت باید حداقل 2  کارتکتر باشد")
    .regex(/^[\u0600-\u06FF\s]+$/, "فقط حروف فارسی مجاز است"),


});
