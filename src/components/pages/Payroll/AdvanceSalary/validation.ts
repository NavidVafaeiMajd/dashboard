import { z } from "zod";

export const validation = z.object({
  employName: z
    .string()
    .min(1, { message: "انتخاب نام کارمند الزامی است." }),

  date: z
    .any()
    .refine((d: unknown) => d instanceof Date && !isNaN(d.getTime()), {
      message: "ماه شروع تقسیط باید معتبر باشد.",
    }),

  amount: z
    .string()
    .min(1, { message: "مقدار نمی‌تواند خالی باشد." })
    .refine((val) => !isNaN(Number(val)), {
      message: "مقدار باید عددی باشد.",
    }),

  less: z
    .string()
    .min(1, { message: "انتخاب وضعیت کسر الزامی است." }),

  price: z
    .string()
    .min(1, { message: "مبلغ اقساط ماهیانه نمی‌تواند خالی باشد." })
    .refine((val) => !isNaN(Number(val)), {
      message: "مبلغ اقساط باید عددی باشد.",
    }),

  newsText: z
    .string()
    .min(1, { message: "علت درخواست نباید خالی باشد." })
    .refine((val) => val.replace(/<(.|\n)*?>/g, "").trim().length > 0, {
      message: "علت درخواست نباید فقط شامل تگ HTML باشد.",
    }),
});
