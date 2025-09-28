import z from "zod";

export const validation = z.object({
   name: z.string().min(1, "عنوان الزامی است" ),
   designation_id: z.string().min(1, "سمت سازمانی الزامی است"),
   tecnicalTest: z.number().int().min(1, "رتبه الزامی است").max(5, "رتبه الزامی است"),
   organizationalTest: z.number().int().min(1, "رتبه الزامی است").max(5, "رتبه الزامی است"),
});
