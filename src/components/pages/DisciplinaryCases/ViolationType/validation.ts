import z from "zod";

export const validation = z.object({
   name: z.string().min(1, "نام نوع تخلف را وارد کنید"),
   severity: z.string().min(1, "شدت تخلف را انتخاب کنید"),
   defaultAction: z.string().min(1, "اقدام پیش‌فرض را انتخاب کنید"),
   description: z.string().optional(),
});
