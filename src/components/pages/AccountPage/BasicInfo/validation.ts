import { z } from "zod";

export const validation = z.object({
  first_name: z
    .string()
    .trim()
    .min(2, "نام باید حداقل 2 کاراکتر باشد")
    .max(50, "نام نباید بیشتر از 50 کاراکتر باشد")
    .regex(/^[\u0600-\u06FF]+$/, "فقط حروف فارسی مجاز است"),

  last_name: z
    .string()
    .trim()
    .min(2, "نام خانوادگی باید حداقل 2 کاراکتر باشد")
    .max(50, "نام خانوادگی نباید بیشتر از 50 کاراکتر باشد")
    .regex(/^[\u0600-\u06FF]+$/, "فقط حروف فارسی مجاز است"),

  phone: z
    .string()
    .regex(/^09\d{9}$/, "شماره تماس باید 11 رقم و با 09 شروع شود"),

  gender: z.string().min(1, "جنسیت الزامی است"),

  province: z
    .string()
    .max(50, "استان نباید بیشتر از 50 کاراکتر باشد")
    .optional(),
  city: z.string().max(50, "شهر نباید بیشتر از 50 کاراکتر باشد").optional(),
  country: z.string().max(50, "شهر نباید بیشتر از 50 کاراکتر باشد").optional(),

  postal_code: z.string().optional(),

  address: z
    .string()
    .max(200, "نشانی 1 نباید بیشتر از 200 کاراکتر باشد")
    .optional(),

    username: z
    .string()
    .min(3, "نام کاربری باید حداقل ۳ کاراکتر باشد")
    .max(20, "نام کاربری نباید بیشتر از ۲۰ کاراکتر باشد")
    .regex(
      /^[a-zA-Z_][a-zA-Z0-9_]*$/,
      "نام کاربری فقط می‌تواند شامل حروف انگلیسی، اعداد و _ باشد و نباید با عدد شروع شود"
    )
    .optional(),
    email: z
  .string()
  .email("ایمیل معتبر وارد کنید")
  .optional(),

  company_type: z.string().optional(),
  company_name: z.string().optional(),
  national_id: z.string().optional(),
  economic_code: z.string().optional(),
  registration_number: z.string().optional(),
});
