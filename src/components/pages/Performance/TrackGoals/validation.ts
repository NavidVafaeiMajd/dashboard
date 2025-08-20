import z from "zod";

export const validation = z.object({
   purposeType: z.string({
      error: "الزامی می باشد!",
   }),

   subject: z.string({
      error: "الزامی می باشد!",
   }),
   purpose: z.string({
      error: "الزامی می باشد!",
   }),

   startDate: z.date(),
   endDate: z.date(),
   description: z.string().optional(),
});
