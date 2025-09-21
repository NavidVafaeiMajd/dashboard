import z from "zod";

export const validation = z.object({
  title: z
    .string()
    .min(3, "موضوع ابلاغیه باید حداقل ۳ حرف باشد")
    .max(200, "موضوع خیلی بلند است"),
  department_id: z.string(),
  summary: z.string().min(1, "فیلد اختصاری نمی‌تواند خالی باشد").max(100),
  content: z
    .string(),
  end_date: z
    .any()
    .refine((d: unknown) => d instanceof Date && !isNaN(d.getTime()), {
      message: "تاریخ الزامی و معتبر نیست",
    }),
  publish_date: z
    .any()
    .refine((d: unknown) => d instanceof Date && !isNaN(d.getTime()), {
      message: "تاریخ الزامی و معتبر نیست",
    }),
});
