import z from "zod";

export const validation = z.object({
   name: z.string().min(1, "نوع پرونده را وارد کنید"),
});
