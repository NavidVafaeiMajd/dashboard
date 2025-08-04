import z from "zod";

export const modalValidation = z.object({
   employee: z.string().min(1, "لطفا یک کارمند انتخاب کنید"),
   date: z
      .any()
      .refine((d: unknown) => d instanceof Date && !isNaN(d.getTime()), {
         message: "تاریخ الزامی است و یا معتبر نیست",
      }),
   entryDate: z.string().min(1, "لطفا زمان ورود را وارد کنید"),
   exitDate: z.string().min(1, "لطفا زمان خروج را وارد کنید"),
   description: z.string().min(1, "لطفا علت را وارد کنید"),
});
