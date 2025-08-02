import z from "zod";

export const validation = z.object({
   bankName: z.string().min(1, "این فیلد الزامی است"),
});
