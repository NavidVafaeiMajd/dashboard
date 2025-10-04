import z from "zod";

export const validation = z.object({
  first_name: z
    .string()
    .min(1, "نام الزامی است")
    .describe("مثلاً: نوید"),

  last_name: z
    .string()
    .min(1, "نام خانوادگی الزامی است")
    .describe("مثلاً: محمدی"),

  email: z
    .string()
    .email("ایمیل معتبر نیست")
    .min(1, "ایمیل الزامی است")
    .describe("مثلاً: carolyne.luettgen@example.org"),

  phone: z
    .string()
    .min(1, "شماره تلفن الزامی است")
    .describe("مثلاً: 09121234567"),

  address: z
    .string()
    .optional()
    .describe("آدرس (اختیاری)"),
});
