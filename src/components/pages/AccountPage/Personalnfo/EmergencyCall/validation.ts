import * as z from "zod";

export const validation = z.object({
  emergencyName: z.string().nonempty("نام کامل الزامی است"),
  emergencyPhone: z.string().nonempty("شماره تماس الزامی است"),

});