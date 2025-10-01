import z from "zod";

export const validation = z.object({
   employee_id: z.string().min(1, "لطفا یک پرسنل انتخاب کنید"),
   date: z
      .any()
      .refine((d: unknown) => d instanceof Date && !isNaN(d.getTime()), {
         message: "تاریخ الزامی است و یا معتبر نیست",
      }),
});
