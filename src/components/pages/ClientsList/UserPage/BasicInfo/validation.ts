import { z } from "zod";

export const validation = z.object({
  firstName: z
    .string()
    .min(2, "نام باید حداقل 2 کاراکتر باشد")
    .regex(/^[\u0600-\u06FF\s]+$/, "فقط حروف فارسی مجاز است"),

  lastName: z
    .string()
    .min(2, "نام خانوادگی باید حداقل 2 کاراکتر باشد")
    .regex(/^[\u0600-\u06FF\s]+$/, "فقط حروف فارسی مجاز است"),

  email: z
    .string()
    .email("ایمیل معتبر نیست"),

  username: z
    .string()
    .min(3, "نام کاربری باید حداقل 3 کاراکتر باشد"),

  status: z.string().nonempty("انتخاب وضعیت الزامی است"),

  phoneNumber: z
    .string()
    .regex(/^09\d{9}$/, "شماره موبایل باید با 09 شروع شود و 11 رقم باشد"),

  gender: z.string().nonempty("انتخاب جنسیت الزامی است"),

  country: z.string().nonempty("انتخاب کشور الزامی است"),

  province: z
    .string()
    .min(2, "استان باید حداقل 2 کاراکتر باشد"),

  city: z
    .string()
    .min(2, "شهر باید حداقل 2 کاراکتر باشد"),

  postalCode: z
    .string()
    .regex(/^\d{10}$/, "کدپستی باید دقیقاً 10 رقم باشد"),

  address1: z
    .string()
    .min(5, "نشانی 1 باید حداقل 5 کاراکتر باشد"),

  address2: z
    .string()
    .min(5, "نشانی 2 باید حداقل 5 کاراکتر باشد")
    .optional(),
});
