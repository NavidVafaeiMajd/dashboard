import * as z from "zod";

export const validation = z.object({
  fullName: z.string().nonempty("نام کامل الزامی است"),
  phoneNumber: z.string().nonempty("شماره تماس الزامی است"),
  email: z.string().email("ایمیل معتبر وارد کنید"),
  address: z.string().nonempty("نشانی الزامی است"),
});