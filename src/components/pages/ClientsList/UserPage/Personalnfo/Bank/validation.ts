import * as z from "zod";

export const validation = z.object({
  accountType: z.string().nonempty("نوع حساب الزامی است"),
  accountNumber: z.string().nonempty("شماره حساب الزامی است"),
  bankName: z.string().nonempty("نام بانک الزامی است"),
  cardNumber: z.string().nonempty("شماره کارت الزامی است"),
  shebaNumber: z.string().nonempty("شماره شبا الزامی است"),
  branchName: z.string().nonempty("شعبه بانک الزامی است"),
});