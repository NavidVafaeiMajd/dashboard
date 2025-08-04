import z from "zod";

export const validation = z.object({
   newsTitle: z
      .string()
      .min(3, "موضوع ابلاغیه باید حداقل ۳ حرف باشد")
      .max(200, "موضوع خیلی بلند است"),
   organizationalUnit: z
      .string()
      .min(2, "واحد سازمانی حداقل باید ۲ کاراکتر باشد")
      .max(100),
   summary: z
      .string()
      .min(1, "فیلد اختصاری نمی‌تواند خالی باشد")
      .max(100),
   newsText: z
      .string()
      .min(1, "متن ابلاغیه نباید خالی باشد")
      .refine((val) => val.replace(/<(.|\n)*?>/g, "").trim().length > 0, {
         message: "متن ابلاغیه نباید فقط شامل تگ HTML باشد",
      }),
   finishDate: z
      .any()
      .refine((d: unknown) => d instanceof Date && !isNaN(d.getTime()), {
         message: "تاریخ الزامی و معتبر نیست",
      }),
   startDate: z
      .any()
      .refine((d: unknown) => d instanceof Date && !isNaN(d.getTime()), {
         message: "تاریخ الزامی و معتبر نیست",
      }),
});
