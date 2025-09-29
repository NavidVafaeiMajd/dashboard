import { z } from "zod";

export const validation = z.object({
  description: z.string().optional(),
  start_date: z.date(),
  end_date: z.date(),
  goal_types_id: z.string().min(1, "نوع هدف الزامی است"),
  title: z.string().min(1, "موضوع الزامی است"),
  goal_rating: z
    .coerce.number()
    .min(1, "امتیاز کلی الزامی است")
    .max(5, "امتیاز باید بین 1 تا 5 باشد"),

  goal_progress: z
    .coerce.number()
    .min(0, "درصد پیشرفت باید بین 0 تا 100 باشد")
    .max(100, "درصد پیشرفت باید بین 0 تا 100 باشد"),
});
