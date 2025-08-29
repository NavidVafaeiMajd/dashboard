import z from "zod";


export const validation = z.object({
    sorting: z.string().min(1, "دسته بندی الزامی است"),
})