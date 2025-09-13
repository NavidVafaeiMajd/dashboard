import * as z from "zod";

export const validation = z.object({
  fullName: z.string().nonempty("نام کامل الزامی است"),
  phoneNumber: z.string().nonempty("شماره تماس الزامی است"),

});