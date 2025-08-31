import { z } from "zod";
import { selectSchema } from "@/components/shared/validation";
export const validation = z.object({
    infoTecher: selectSchema, 
    skillslearn: selectSchema, 
    priceLearn: z
      .string()
      .min(1, "هزینه الزامی است")
      .regex(/^\d+$/, "هزینه باید عدد باشد"), 
    status: selectSchema,
    "entry-time": z.string().min(1, "تاریخ شروع الزامی است"), 
    "exit-time": z.string().min(1, "تاریخ پایان الزامی است"), 
    text: z.string().min(1, "شرح الزامی است"), 
});


