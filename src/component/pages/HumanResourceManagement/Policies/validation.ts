import z from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = [
   "image/jpeg",
   "image/jpg",
   "image/png",
   "image/webp",
];

export const validation = z.object({
   name: z.string().min(1, "عنوان واحد سازمانی الزامی است"),
   description: z.string(),
   image: z
      .any()
      .refine((file) => file instanceof File, {
         message: "یک فایل انتخاب کنید",
      })
      .refine((file) => file?.size <= MAX_FILE_SIZE, {
         message: "حجم تصویر باید کمتر از ۵ مگابایت باشد",
      })
      .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type), {
         message: "فرمت تصویر مجاز نیست (فقط jpeg, jpg, png, webp)",
      }),
});
