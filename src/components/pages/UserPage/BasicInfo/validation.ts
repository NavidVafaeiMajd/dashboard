import { z } from "zod";

export const validation = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "نام باید حداقل 2 کاراکتر باشد")
    .max(50, "نام نباید بیشتر از 50 کاراکتر باشد")
    .regex(/^[\u0600-\u06FF]+$/, "فقط حروف فارسی مجاز است"),

  lastName: z
    .string()
    .trim()
    .min(2, "نام خانوادگی باید حداقل 2 کاراکتر باشد")
    .max(50, "نام خانوادگی نباید بیشتر از 50 کاراکتر باشد")
    .regex(/^[\u0600-\u06FF]+$/, "فقط حروف فارسی مجاز است"),

  phoneNumber: z
    .string()
    .regex(/^09\d{9}$/, "شماره تماس باید 11 رقم و با 09 شروع شود"),

  personeliCode: z
    .string()
    .regex(/^\d{5,10}$/, "کد پرسنلی باید بین 5 تا 10 رقم باشد"),

  birthDate: z
    .date()
    .max(new Date(), "تاریخ تولد نمی‌تواند در آینده باشد")
    .optional(),

  gender: z.string().min(1, "جنسیت الزامی است"),
  maritalStatus: z.string().min(1, "وضعیت تاهل الزامی است"),
  accessLevel: z.string().min(1, "سطح دسترسی الزامی است"),

  religion: z.string().optional(),
  bloodGroup: z.string().optional(),
  nationality: z.string().optional(),
  citizenship: z.string().optional(),

  province: z
    .string()
    .max(50, "استان نباید بیشتر از 50 کاراکتر باشد").optional(),
  city: z
    .string()
    .max(50, "شهر نباید بیشتر از 50 کاراکتر باشد").optional(),

  postalCode: z
    .string().optional(),

  address1: z
    .string()
    .max(200, "نشانی 1 نباید بیشتر از 200 کاراکتر باشد")
    .optional(),
  address2: z
    .string()
    .max(200, "نشانی 2 نباید بیشتر از 200 کاراکتر باشد")
    .optional(),

  department: z.string().min(1, "واحد سازمانی الزامی است"),
  position: z.string().min(1, "سمت سازمانی الزامی است"),
  status: z.string().min(1, "وضعیت الزامی است"),
});
