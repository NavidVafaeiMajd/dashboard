import z from "zod";

export const validation = z.object({
   organizationUnit: z.string(),
   name: z.string(),
   description: z.string().optional(),
});
