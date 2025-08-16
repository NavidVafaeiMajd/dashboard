import z from "zod";

export const validation = z.object({
   name: z.string(),
   employee: z.string(),
   ratings: z.record(z.number().int().min(1).max(5)),
});
