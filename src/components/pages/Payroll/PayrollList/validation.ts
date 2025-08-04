import z from "zod";

export const validation = z.object({
    employee: z.string(),
    date: z
        .any()
        .refine((d: unknown) => d instanceof Date && !isNaN(d.getTime()), {
            message: "تاریخ الزامی است و یا معتبر نیست",
        }),

})