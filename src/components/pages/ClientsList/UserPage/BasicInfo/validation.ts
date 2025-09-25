import { z } from "zod";

export const validation = z.object({
  first_name: z
    .string()
    .min(2, "نام باید حداقل 2 کاراکتر باشد")
    .regex(/^[\u0600-\u06FF\s]+$/, "فقط حروف فارسی مجاز است"),

    last_name: z
    .string()
    .min(2, "نام خانوادگی باید حداقل 2 کاراکتر باشد")
    .regex(/^[\u0600-\u06FF\s]+$/, "فقط حروف فارسی مجاز است"),

  email: z
    .string()
    .email("ایمیل معتبر نیست"),

  status: z.string().optional(),

  phone: z
    .string()
    .regex(/^09\d{9}$/, "شماره موبایل باید با 09 شروع شود و 11 رقم باشد"),

  gender: z.string().nonempty("انتخاب جنسیت الزامی است"),

  province: z
    .string().optional(),

  city: z
    .string().optional(),

  postalCode: z
    .string().optional(),

  address1: z
    .string().optional(),

  address2: z
    .string()
    .optional(),
});
