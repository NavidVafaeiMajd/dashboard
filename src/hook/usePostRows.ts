import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";

export const usePostRows = (url: string, queryKey: string[], defaultValues: any , validation: any, message: string, reset?: boolean) => {
  const form = useForm<z.infer<typeof validation>>({
    resolver: zodResolver(validation as any),
    defaultValues,
  });
  
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: z.infer<typeof validation> | FormData) => {
      const isFormData = data instanceof FormData;
      const token = Cookies.get("token");
      const res = await fetch(`http://localhost:8000/api/${url}`, {
        method: "POST",
        headers: {
          ...(isFormData ? {} : { "Content-Type": "application/json" }),
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: isFormData ? data : JSON.stringify(data),
      });
      if (!res.ok) {
        toast.error(`ثبت ${message} ناموفق بود`);
      }
      return res.json();
    },
    onSuccess: () => {
      toast.success(`${message} با موفقیت ثبت شد`);
      queryClient.invalidateQueries({ queryKey });
      if (reset) {
        form.reset(defaultValues);
      }
    },
    onError: () => {
      toast.error("ثبت پرسنل ناموفق بود");
    },
  });
  return { mutation, form };
};