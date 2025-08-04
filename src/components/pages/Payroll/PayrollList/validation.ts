import z from "zod";

export const validation = z.object({
    employee: z.string(),
    month: z.string(),
})