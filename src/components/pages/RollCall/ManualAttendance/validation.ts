import z from "zod";

export const validation = z.object({
  date: z
    .any()
    .refine((d: unknown) => d instanceof Date && !isNaN(d.getTime()), {
      message: "تاریخ الزامی است و یا معتبر نیست",
    }),
  employee_id: z.string().min(1, "کارمند الزامی است"),
  check_in: z.string(),
  check_out: z.string(),
  notes : z.string().optional()
});
