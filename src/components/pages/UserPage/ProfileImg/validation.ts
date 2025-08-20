import { z } from "zod";

export const validation = z.object({
image: z
  .instanceof(File, { message: "لطفا یک تصویر انتخاب کنید" })
  .refine((file) => file.size < 2 * 1024 * 1024, {
    message: "حجم تصویر نباید بیشتر از 2MB باشد",
  }),
});

