import { z } from "zod";
import { selectSchema } from "@/components/shared/validation";
export const validation = z.object({
    infoTecher: selectSchema, // مشخصات مدرس
    skillslearn: selectSchema, // مهارت آموزشی
    priceLearn: z
      .string()
      .min(1, "هزینه الزامی است")
      .regex(/^\d+$/, "هزینه باید عدد باشد"), // هزینه آموزش
    status: selectSchema, // پرسنل
    "entry-time": z.string().min(1, "تاریخ شروع الزامی است"), // تاریخ شروع
    "exit-time": z.string().min(1, "تاریخ پایان الزامی است"), // تاریخ پایان
    text: z.string().min(1, "شرح الزامی است"), // متن توضیح
});


