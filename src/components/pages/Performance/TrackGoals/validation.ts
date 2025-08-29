import z from "zod";

export const validation = z.object({
   purposeType: z.string().min(1, "انواع هدف الزامی است"),  
   subject: z.string().min(1, "موضوع الزامی است"),
   purpose: z.string().min(1, "دستیابی به هدف الزامی است"),
   startDate: z.date(),
   endDate: z.date(),
   description: z.string().optional(),
});
