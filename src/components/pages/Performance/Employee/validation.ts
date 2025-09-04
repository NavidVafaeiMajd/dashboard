import z from "zod";

export const validation = z.object({
   name: z.string().min(1, "عنوان الزامی است"),
   employee: z.string().min(1, "کارمزدگذار الزامی است"),
   date: z.date(),
   tecnicalTest: z.number().int().min(1, "رتبه الزامی است").max(5, "رتبه الزامی است"),
   organizationalTest: z.number().int().min(1, "رتبه الزامی است").max(5, "رتبه الزامی است"),
});
