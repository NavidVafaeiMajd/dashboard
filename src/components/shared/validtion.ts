import { z } from "zod";

const MAX_FILE_SIZE = 2 * 1024 * 1024;

const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];


export const exitType = z.object({
    exitType: z
        .string()
        .min(1, "نوع انفصال الزامی است")
        .regex(/^[\u0600-\u06FF\s]+$/, "فقط حروف فارسی مجاز است"),


});


export const employExite = z.object({
  employee: z
    .string()
    .min(1, "کارمند الزامی است")
    .regex(/^[\u0600-\u06FF\s]+$/, "فقط حروف فارسی مجاز است"),

  date: z.string().min(1, "تاریخ الزامی است"),

  textLetter: z
    .string()
    .min(1, "متن الزامی است")
    .regex(/^[\u0600-\u06FF\s]+$/, "فقط حروف فارسی مجاز است"),

  exitType: z.string().refine((val) => val !== "", {
    message: "لطفاً یک گزینه انتخاب کنید",
  }),

  meeting: z.string().refine((val) => val !== "", {
    message: "لطفاً یک گزینه انتخاب کنید",
  }),
  accountDis: z.string().refine((val) => val !== "", {
    message: "لطفاً یک گزینه انتخاب کنید",
  }),

  profileImage: z
    .any()
    .refine((files) => files instanceof FileList && files.length > 0, {
      message: "فایل انتخاب نشده",
    })
    .refine(
      (files) => {
        const file = files[0];
        return file && file.size <= MAX_FILE_SIZE;
      },
      {
        message: "حجم فایل باید کمتر از ۲ مگابایت باشد",
      }
    )
    .refine(
      (files) => {
        const file = files[0];
        return file && ACCEPTED_IMAGE_TYPES.includes(file.type);
      },
      {
        message: "فرمت فایل باید jpeg، jpg، png یا webp باشد",
      }
    ),
});

export const officeShift = z.object({
  firstName: z
    .string()
    .min(1, "نام الزامی است")
    .regex(/^[\u0600-\u06FF\s]+$/, "فقط حروف فارسی مجاز است"),
});

export const setRoles = z.object({
  permissionName: z
    .string()
    .min(1, "نام الزامی است")
    .regex(/^[\u0600-\u06FF\s]+$/, "فقط حروف فارسی مجاز است"),
  
     choosePremition: z.string().refine((val) => val !== "", {
      message: "لطفاً یک گزینه انتخاب کنید",
   }),
});

export const staffList = z.object({
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

   username: z.string().min(3, "نام کاربری حداقل باید ۳ حرف باشد"),

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

   profileImage: z
      .any()
      .refine((files) => files instanceof FileList && files.length > 0, {
         message: "فایل انتخاب نشده",
      })
      .refine(
         (files) => {
            const file = files[0];
            return file && file.size <= MAX_FILE_SIZE;
         },
         {
            message: "حجم فایل باید کمتر از ۲ مگابایت باشد",
         }
      )
      .refine(
         (files) => {
            const file = files[0];
            return file && ACCEPTED_IMAGE_TYPES.includes(file.type);
         },
         {
            message: "فرمت فایل باید jpeg، jpg، png یا webp باشد",
         }
      ),
});
