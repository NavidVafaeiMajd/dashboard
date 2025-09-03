import { z } from "zod";

export const validation = z.object({
  username: z
    .string()
    .min(3, "نام کاربری باید حداقل ۳ کاراکتر باشد")
    .max(32, "نام کاربری نمی‌تواند بیشتر از ۳۲ کاراکتر باشد"),
  
  email: z
    .string()
    .email("ایمیل وارد شده معتبر نیست"),
  monthlySalary: z.string().min(1, "دستمزد ماهانه الزامی است"),
  dailySalary: z.string().min(1, "دستمزد روزانه الزامی است"),
  salaryType: z.string().min(1, "نوع فیش حقوقی الزامی است"),
});