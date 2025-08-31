import { z } from "zod";

export const validation = z.object({
  name: z
    .string()
    .min(2, "نام باید حداقل 2 کاراکتر باشد")
    .regex(/^[\u0600-\u06FF\s]+$/, "فقط حروف فارسی مجاز است"),

  lname: z
    .string()
    .min(2, "نام خانوادگی باید حداقل 2 کاراکتر باشد")
    .regex(/^[\u0600-\u06FF\s]+$/, "فقط حروف فارسی مجاز است"),

  phone: z
    .string()
    .regex(/^09\d{9}$/, "شماره موبایل باید با 09 شروع شود و 11 رقم باشد"),

  email: z
    .string()
    .email("ایمیل معتبر نیست"),

  skills: z.string().nonempty("انتخاب مهارت الزامی است"),

  location: z
    .string()
    .min(2, "محل سکونت باید حداقل 2 کاراکتر باشد"),
});
