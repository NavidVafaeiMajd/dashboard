import { z } from "zod";

export const validation = z.object({
  infoTecher: z.string().min(1, "انتخاب مدرس الزامی است"), // مشخصات مدرس
    skillslearn: z.string().min(1, "انتخاب مهارت الزامی است"), // مهارت آموزشی
    priceLearn: z
      .string()
      .min(1, "هزینه الزامی است")
      .regex(/^\d+$/, "هزینه باید عدد باشد"), // هزینه آموزش
    status: z.string().min(1, "انتخاب پرسنل الزامی است"), // پرسنل
    "entry-time": z.string().min(1, "تاریخ شروع الزامی است"), // تاریخ شروع
    "exit-time": z.string().min(1, "تاریخ پایان الزامی است"), // تاریخ پایان
    text: z.string().min(1, "شرح الزامی است"), // متن توضیح
});


