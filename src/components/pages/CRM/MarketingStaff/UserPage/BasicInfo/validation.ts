import { z } from "zod";

export const validation = z.object({
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  email: z.string().email("ایمیل معتبر نیست").optional(),
  phone: z.string().optional(),
  address: z.string().optional(),
});
