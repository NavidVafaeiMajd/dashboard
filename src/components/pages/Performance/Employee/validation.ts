import z from "zod";

export const validation = z.object({
   name: z.string().min(1, "عنوان الزامی است"),
   employee: z.string().min(1, "کارمزدگذار الزامی است"),
   date: z.date(),
   technicalRatings: z.record(z.string(), z.number().int().min(1).max(5)).default({}),
   behavioralRatings: z.record(z.string(), z.number().int().min(1).max(5)).default({}),
});
