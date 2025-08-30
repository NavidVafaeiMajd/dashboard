import z from "zod";

export const validation = z.object({
   name: z.string().min(1, "نوع مرخصی را وارد کنید"),
   daysPerYear: z.string().min(1, "روزها در سال را وارد کنید"),
   requiresApproval: z.string().min(1, "انتخاب کنید که آیا نیاز به تایید دارد یا خیر"),
});
