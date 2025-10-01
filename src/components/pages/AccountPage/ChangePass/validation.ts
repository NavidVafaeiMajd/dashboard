import { z } from "zod";

export const validation = z
  .object({
    currentPassword: z
      .string()
      .min(6, "رمز فعلی باید حداقل ۶ کاراکتر باشد"),

    newPassword: z
      .string()
      .min(6, "رمز جدید باید حداقل ۶ کاراکتر باشد"),

    confirmPassword: z
      .string()
      .min(6, "تکرار رمز جدید باید حداقل ۶ کاراکتر باشد"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "رمز جدید و تکرار آن باید یکسان باشند",
    path: ["confirmPassword"], // خطا رو روی فیلد تکرار رمز نشون بده
  });
