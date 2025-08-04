import z from "zod";

export const validation = z.object({
   emplyee: z.string().min(1, "لطفا یک پرسنل انتخاب کنید"),
   date: z
      .date()
      .refine((date) => date instanceof Date && !isNaN(date.getTime()), {
         message: "لطفا یک تاریخ معتبر انتخاب کنید",
      }),
});
