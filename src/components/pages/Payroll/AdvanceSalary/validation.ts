import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 مگابایت
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const validation = z.object({
  title: z.string()
    .min(3, { message: "موضوع ابلاغیه باید حداقل ۳ کاراکتر باشد." })
    .max(200, { message: "موضوع ابلاغیه نباید بیش از ۲۰۰ کاراکتر باشد." }),

  bank: z.string()
    .min(2, { message: "نام واحد سازمانی باید حداقل ۲ کاراکتر باشد." })
    .max(100, { message: "نام واحد سازمانی نباید بیش از ۱۰۰ کاراکتر باشد." }),

  branch: z.string()
    .min(1, { message: "فیلد اختصاری شعبه نمی‌تواند خالی باشد." })
    .max(100, { message: "فیلد اختصاری شعبه نباید بیش از ۱۰۰ کاراکتر باشد." }),

  name: z.string()
    .min(1, { message: "نام نمی‌تواند خالی باشد." })
    .max(100, { message: "نام نباید بیش از ۱۰۰ کاراکتر باشد." }),

  personnelNumber: z.string()
    .min(1, { message: "شماره پرسنلی نمی‌تواند خالی باشد." })
    .max(100, { message: "شماره پرسنلی نباید بیش از ۱۰۰ کاراکتر باشد." }),

  birthCertificateNumber: z.string()
    .min(1, { message: "شماره شناسنامه نمی‌تواند خالی باشد." })
    .max(100, { message: "شماره شناسنامه نباید بیش از ۱۰۰ کاراکتر باشد." }),

  nationalCode: z.string()
    .min(1, { message: "کد ملی نمی‌تواند خالی باشد." })
    .max(100, { message: "کد ملی نباید بیش از ۱۰۰ کاراکتر باشد." }),

  employStatus: z.string()
    .min(1, { message: "وضعیت استخدام نمی‌تواند خالی باشد." })
    .max(100, { message: "وضعیت استخدام نباید بیش از ۱۰۰ کاراکتر باشد." }),

  from: z.string()
    .min(1, { message: "فیلد مبدا نمی‌تواند خالی باشد." })
    .max(100, { message: "فیلد مبدا نباید بیش از ۱۰۰ کاراکتر باشد." }),

  reqDate: z.any().refine((d: unknown) => d instanceof Date && !isNaN(d.getTime()), {
    message: "تاریخ درخواست باید معتبر باشد.",
  }),

  birthDate: z.any().refine((d: unknown) => d instanceof Date && !isNaN(d.getTime()), {
    message: "تاریخ تولد باید معتبر باشد.",
  }),

  image: z.any()
    .refine((file) => file instanceof File, { message: "لطفاً یک فایل تصویر انتخاب کنید." })
    .refine((file) => file?.size <= MAX_FILE_SIZE, { message: "حجم تصویر باید کمتر از ۵ مگابایت باشد." })
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      { message: "فرمت تصویر مجاز نیست (فقط jpeg, jpg, png, webp)." }
    ),

  newsText: z.string()
    .min(1, { message: "متن ابلاغیه نباید خالی باشد." })
    .refine((val) => val.replace(/<(.|\n)*?>/g, "").trim().length > 0, {
      message: "متن ابلاغیه نباید فقط شامل تگ‌های HTML باشد.",
    }),
});
