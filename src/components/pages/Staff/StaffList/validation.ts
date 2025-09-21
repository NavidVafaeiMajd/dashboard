import z from "zod";
import { imageSchema } from "@/components/shared/validation";

export const validation = z.object({
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

   personeliCode: z
     .string()
     .regex(/^\d+$/, "فقط عدد مجاز است")
     .min(1, "کد پرسنلی الزامی است")
     .describe("مثلاً: 12345"),

   phoneNumber: z
     .string()
     .regex(/^09\d{9}$/, "شماره تماس معتبر نیست")
     .describe("مثلاً: 09121234567"),

   gender: z.string().refine((val) => val !== "", {
     message: "لطفاً یک گزینه انتخاب کنید",
   }),

   shift: z.string().refine((val) => val !== "", {
     message: "لطفاً یک گزینه انتخاب کنید",
   }),

   department_id: z.coerce.number().min(1, "واحد سازمانی الزامی است"),

   designation_id: z.coerce.number().min(1, "واحد سازمانی الزامی است"),

   position: z.string().refine((val) => val !== "", {
     message: "لطفاً یک گزینه انتخاب کنید",
   }),

   image: imageSchema,
 });
