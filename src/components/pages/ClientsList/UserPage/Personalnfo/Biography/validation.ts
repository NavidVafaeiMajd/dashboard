import * as z from "zod";

export const validation = z.object({
  biography: z.string().min(10, "بیوگرافی نمی‌تواند کمتر از 10 کاراکتر باشد"),
  workExperience: z.string().min(1, "سابقه کار الزامی است"),
});