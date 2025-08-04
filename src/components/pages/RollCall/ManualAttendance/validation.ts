import z from "zod";

export const validation = z.object({
    date: z
        .any()
        .refine((d: unknown) => d instanceof Date && !isNaN(d.getTime()), {
            message: "تاریخ الزامی است و یا معتبر نیست",
        }),
    emplyee: z.string().min(1, "کارمند الزامی است"),
})