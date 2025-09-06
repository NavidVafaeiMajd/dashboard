import * as z from "zod";

export const validation = z.object({
  instagram: z.string().url("لینک معتبر اینستاگرام وارد کنید"),
  twitter: z.string().url("لینک معتبر توییتر وارد کنید"),
  linkedin: z.string().url("لینک معتبر لینکدین وارد کنید"),
  facebook: z.string().url("لینک معتبر فیسبوک وارد کنید"),
  email: z.string().email("ایمیل وارد شده معتبر نیست"),
});