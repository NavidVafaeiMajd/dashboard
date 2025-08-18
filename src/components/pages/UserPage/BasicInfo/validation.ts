import { z } from "zod";

export const validation = z.object({
  firstName: z
    .string()
    .min(2, "نام باید حداقل 2 کاراکتر باشد")
    .regex(/^[\u0600-\u06FF\s]+$/, "فقط حروف فارسی مجاز است"),
    
  lastName: z
    .string()
    .min(2, "نام خانوادگی باید حداقل 2 کاراکتر باشد")
    .regex(/^[\u0600-\u06FF\s]+$/, "فقط حروف فارسی مجاز است"),

  phoneNumber: z
    .string()
    .regex(/^\d{10,11}$/, "شماره تماس باید 10 یا 11 رقم باشد"),

  personeliCode: z
    .string()
    .regex(/^\d+$/, "کد پرسنلی باید فقط عدد باشد"),

  birthDate: z
    .date()
      .optional(),
  
  gender: z.string().nonempty("جنسیت الزامی است"),
  position: z.string().nonempty("وضعیت الزامی است"),
  maritalStatus: z.string().nonempty("وضعیت تاهل الزامی است"),
  accessLevel: z.string().nonempty("سطح دسترسی الزامی است"),
  religion: z.string().nonempty("مذهب الزامی است"),
  bloodGroup: z.string().nonempty("گروه خونی الزامی است"),
  nationality: z.string().nonempty("ملیت الزامی است"),
  citizenship: z.string().nonempty("تابعیت الزامی است"),

  province: z
    .string()
    .min(2, "استان باید حداقل 2 کاراکتر باشد"),
  city: z
    .string()
    .min(2, "شهر باید حداقل 2 کاراکتر باشد"),
  postalCode: z
    .string()
    .regex(/^\d{10}$/, "کدپستی باید 10 رقم باشد"),

  address1: z
    .string()
    .min(5, "نشانی 1 باید حداقل 5 کاراکتر باشد"),
  address2: z
    .string()
    .min(5, "نشانی 2 باید حداقل 5 کاراکتر باشد"),
});
