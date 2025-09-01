import z from "zod";
import { imageSchema } from "@/components/shared/validation";
import { usernameSchema } from "@/components/shared/validation";

export const staffListValidtion = z.object({
    firstName: z
       .string()
       .min(1, "نام الزامی است")
       .regex(/^[\u0600-\u06FF\s]+$/, "فقط حروف فارسی مجاز است")
       .describe("مثلاً: نوید"),
 
    lastName: z
       .string()
       .min(1, "نام خانوادگی الزامی است")
       .regex(/^[\u0600-\u06FF\s]+$/, "فقط حروف فارسی مجاز است")
       .describe("مثلاً: محمدی"),
 
    personnelCode: z
       .string()
       .regex(/^\d+$/, "فقط عدد مجاز است")
       .min(1, "کد پرسنلی الزامی است")
       .describe("مثلاً: 12345"),
 
    phone: z
       .string()
       .regex(/^09\d{9}$/, "شماره تماس معتبر نیست")
       .describe("مثلاً: 09121234567"),
 
    gender: z.string().refine((val) => val !== "", {
       message: "لطفاً یک گزینه انتخاب کنید",
    }),
 
    email: z.email("ایمیل معتبر وارد کنید").describe("مثلاً: example@gmail.com"),
 
    username: usernameSchema,
 
    password: z.string().min(6, "رمز عبور حداقل ۶ کاراکتر"),
 
    shift: z.string().refine((val) => val !== "", {
       message: "لطفاً یک گزینه انتخاب کنید",
    }),
 
    role: z.string().refine((val) => val !== "", {
       message: "لطفاً یک گزینه انتخاب کنید",
    }),
 
    department: z.string().min(1, "واحد سازمانی الزامی است"),
 
    position: z.string().min(1, "سمت سازمانی الزامی است"),
 
    monthlySalary: z
       .string()
       .regex(/^\d+$/, "فقط عدد مجاز است")
       .describe("مثلاً: 5000000"),
 
    dailySalary: z
       .string()
       .regex(/^\d+$/, "فقط عدد مجاز است")
       .describe("مثلاً: 200000"),
 
    salaryType: z.string().refine((val) => val !== "", {
       message: "لطفاً یک گزینه انتخاب کنید",
    }),
 
    image: imageSchema,

 });