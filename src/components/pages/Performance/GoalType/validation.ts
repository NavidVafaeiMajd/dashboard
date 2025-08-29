import z from "zod";


export const validation = z.object({
    purposeType: z.string().min(1, "انواع اهداف الزامی است"),
})