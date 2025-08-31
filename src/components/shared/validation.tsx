import { z } from "zod";

export const emailSchema = z
  .string({ error: "ایمیل الزامی است" })
  .email("ایمیل معتبر نیست");

export const phoneSchema = z
  .string({ error: "شماره موبایل الزامی است" })
  .regex(/^09\d{9}$/, "شماره موبایل معتبر نیست");

export const imageSchema = z
  .custom<File>((file) => file instanceof File, {
    message: "فایل معتبر نیست",
  })
  .refine((file) => ["image/jpeg", "image/png", "image/jpg"].includes(file.type), {
    message: "فقط فرمت jpg و png مجاز است",
  })
  .refine((file) => file.size <= 1024 * 1024, { // 1MB
    message: "حجم فایل نباید بیشتر از 1 مگابایت باشد",
  });

export const nameSchema = z
  .string({ error: "این فیلد الزامی است" })
  .min(3, "حداقل ۳ کاراکتر وارد کنید");

export const selectSchema = z
  .string({ error: "انتخاب یک گزینه الزامی است" })
  .min(1, "باید یک گزینه انتخاب کنید");

  export const usernameSchema = z
  .string()
  .min(3, "نام کاربری باید حداقل ۳ کاراکتر باشد")
  .max(30, "نام کاربری نباید بیشتر از ۳۰ کاراکتر باشد")
  .regex(/^[a-zA-Z][a-zA-Z0-9_.]*$/, {
    message:
      "نام کاربری باید با حرف شروع شود و فقط شامل حروف انگلیسی، عدد، نقطه یا _ باشد",
  });