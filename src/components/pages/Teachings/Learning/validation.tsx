import { z } from "zod";

export const validation = z.object({
  techerLearning: z
    .string()
    .min(2, "نام باید حداقل 2 کاراکتر باشد")
    .regex(/^[\u0600-\u06FF\s]+$/, "فقط حروف فارسی مجاز است"),

  skillsLearn: z
    .string()
    .min(2, "نام خانوادگی باید حداقل 2 کاراکتر باشد")
    .regex(/^[\u0600-\u06FF\s]+$/, "فقط حروف فارسی مجاز است"),

  priceLearning: z
    .string()
    .email("ایمیل معتبر نیست"),

  personel: z
    .string()
    .min(3, "نام کاربری باید حداقل 3 کاراکتر باشد"),

  exitEntry: z.string().nonempty("انتخاب وضعیت الزامی است"),

  statrtEntry: z
    .string()
    .regex(/^09\d{9}$/, "شماره موبایل باید با 09 شروع شود و 11 رقم باشد"),

    text : z 
    .string("لطفا این شرح را کامل کنید")
});
