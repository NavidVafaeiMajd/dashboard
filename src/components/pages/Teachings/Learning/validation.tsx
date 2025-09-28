import { z } from "zod";
import { selectSchema } from "@/components/shared/validation";

export const validation = z.object({
  teacher_id: selectSchema,
  skill_id: selectSchema,
  cost: z
    .string()
    .min(1, "هزینه الزامی است")
    .refine((val) => Number(val) > 0, {
      message: "هزینه باید بزرگتر از 0 باشد",
    }),
  personnel: z
    .string()
    .min(1, "تعداد الزامی است")
    .refine((val) => Number(val) > 0, {
      message: "تعداد باید بزرگتر از 0 باشد",
    }),
  start_date: z.date(),
  end_date: z.date(),
  description: z.string().min(1, "شرح الزامی است"),
});
