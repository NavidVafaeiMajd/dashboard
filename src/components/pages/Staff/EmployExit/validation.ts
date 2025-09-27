import { z } from "zod";

export const validation = z.object({
  employee_id: z.string().min(1, "کارمند الزامی است"),

  separation_date: z.date({ error: "تاریخ انفصال الزامی است" }),

  separation_letter: z.string().optional(),

  separation_type_id: z.string().min(1, "نوع انفصال الزامی است"),

  contract_file: z
    .any()
    .refine((file) => !file || file instanceof File, {
      message: "فایل باید از نوع فایل باشد",
    })
    .refine((file) => !file || file.size <= 2048 * 1024, {
      message: "حجم فایل نباید بیشتر از 2 مگابایت باشد",
    })
    .optional(),
});
