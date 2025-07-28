import z from "zod";

export const validation = z.object({
    date: z.date(),
    emplyee: z.string().min(1, "کارمند الزامی است"),
})