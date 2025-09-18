import { z } from "zod";

export const validation = z.object({
    amount: z.string().min(1, "دستمزد ماهانه الزامی است"),

});