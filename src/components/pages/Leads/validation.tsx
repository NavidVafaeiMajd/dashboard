import z from "zod";

export const validation = z.object({
   lastName: z.string().min(1, "نام خانوادگی الزامی است"),
   firstName: z.string().min(1, "نام الزامی است"),
   gender: z.string().min(1, "جنسیت الزامی است"),
   accountNumber: z.string().min(1, "شماره تماس الزامی است"),
   email: z.string().email("فرمت ایمیل صحیح نیست"),
   image: z.instanceof(File).nullable().optional(),
});