import z from "zod";

export const validation = z.object({
   newsTitle: z.string().min(1, "عنوان موضوع ابلاغیه الزامی است"),
   organizationalUnit: z.string().min(1, "عنوان واحد سازمانی الزامی است"),
   summary: z.string().min(1, " اختصاری الزامی است"),
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
