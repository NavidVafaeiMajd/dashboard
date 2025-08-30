import { z } from "zod";

export const validation = z.object({
  accountType: z.string().nonempty("نوع حساب بانکی الزامی است"),
  amount: z.string().nonempty("مقدار الزامی است"),
  date: z.date({ error: "تاریخ الزامی است" }),
  category: z.string().nonempty("دسته بندی الزامی است"),
  receiver: z.string().nonempty("دریافت کننده وجه الزامی است"),
  paymentMethod: z.string().nonempty("روش پرداخت الزامی است"),
  reference: z.string().optional(),
  description: z.string().optional(),
  organizationUnit: z.string().nonempty("واحد سازمانی الزامی است"),
  name: z.string().nonempty("نام الزامی است"),
});
