import { z } from "zod";

export const validation = z.object({
   name: z.string().min(1,"نام واحد سازمانی الزامی است"),
   unitBoss: z.string().min(1,"انتخاب رئیس واحد الزامی است"),
});
