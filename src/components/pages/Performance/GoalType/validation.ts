import z from "zod";


export const validation = z.object({
    purposeType: z.string()
})