import { z } from "zod";

export const validation = z
  .object({
    old_password: z
      .string()
      .min(6, "رمز فعلی باید حداقل ۶ کاراکتر باشد"),

      password: z
      .string()
      .min(6, "رمز جدید باید حداقل ۶ کاراکتر باشد"),

      password_confirmation: z
      .string()
      .min(6, "تکرار رمز جدید باید حداقل ۶ کاراکتر باشد"),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "رمز جدید و تکرار آن باید یکسان باشند",
    path: ["confirmPassword"], // خطا رو روی فیلد تکرار رمز نشون بده
  });
