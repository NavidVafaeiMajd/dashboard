import z from "zod";

export const validation = z.object({
   emplyee: z.string().min(1, "لطفا یک پرسنل انتخاب کنید"),
   date: z.date({
      error: "لطفا تاریخ را انتخاب کنید",
   }),
});
