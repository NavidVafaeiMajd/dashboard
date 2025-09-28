import z from "zod";

export const validation = z.object({
   type_name: z.string().min(1, "نوع مرخصی را وارد کنید"),
   days_per_year: z.string().min(1, "روزها در سال را وارد کنید"),
   requires_approval: z.boolean(),
});
