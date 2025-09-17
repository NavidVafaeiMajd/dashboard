import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { validation } from "@/components/pages/Staff/StaffList/validation";
import { useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";

export const usePostRows = (url: string, queryKey: string[], defaultValues: any) => {
  const form = useForm<z.infer<typeof validation>>({
    resolver: zodResolver(validation as any),
    defaultValues,
  });
  
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: z.infer<typeof validation>) => {
      const res = await fetch(`http://localhost:8000/api/${url}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        toast.error("ثبت پرسنل ناموفق بود");
      }
      return res.json();
    },
    onSuccess: () => {
      toast.success("ثبت پرسنل با موفقیت انجام شد");
      queryClient.invalidateQueries({ queryKey });
      form.reset(defaultValues);
    },
    onError: () => {
      toast.error("ثبت پرسنل ناموفق بود");
    },
  });
  return { mutation, form };
};