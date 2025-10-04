import { Form } from "@/components/shared/Form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";
import { validation } from "./validation";
import { useForm } from "react-hook-form";
import { IoDocumentTextOutline } from "react-icons/io5";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import PostLoad from "@/components/ui/postLoad";

const BasicInfo = ({ queryData }: { queryData: any }) => {



  const form = useForm<z.infer<typeof validation>>({
    resolver: zodResolver(validation),
    defaultValues: {
      first_name: queryData?.first_name || "",
      last_name: queryData?.last_name || "",
      email: queryData?.email || "",
      phone: queryData?.phone || "",
      address: queryData?.address || "",
    },
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: z.infer<typeof validation>) => {
      const res = await fetch(
        `http://localhost:8000/api/marketing-staff/${queryData?.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      console.log("Response status:", res.status);

      if (!res.ok) {
        const errorText = await res.text();
        toast.error(`خطا ${res.status}: ${errorText}`);
        throw new Error(`HTTP ${res.status}: ${errorText}`);
      }
      return res.json();
    },
    onSuccess: () => {
      toast.success("اطلاعات با موفقیت به‌روزرسانی شد");
      queryClient.invalidateQueries({
        queryKey: ["marketing-staff-details", queryData?.id],
      });
    },
    onError: () => {
      toast.error("به‌روزرسانی ناموفق بود");
    },
  });

  const onSubmit = (data: z.infer<typeof validation>) => {
    console.log(data);
    mutation.mutate(data);
  };

  return (
    <div className="relative">
      {mutation.isPending && (<PostLoad />)}
      
      <div>
        <div className="flex gap-2 border-b-red-500 border-b-2 p-3">
          <span>
            <IoDocumentTextOutline className="w-7 h-7" />
          </span>
          <span> اطلاعات اولیه</span>
        </div>
        <div className="p-3">
          <Form
            formProp={form}
            onSubmit={onSubmit}
            className="flex flex-col gap-5"
          >
            <div className="flex gap-5">
              <Form.Input
                label="نام"
                name="first_name"
                placeholder="نام"
              />
              <Form.Input
                label="نام خانوادگی"
                name="last_name"
                placeholder="نام خانوادگی"
              />
            </div>
            <div className="flex gap-5">
              <Form.Input
                label="ایمیل"
                name="email"
                placeholder="ایمیل"
              />
              <Form.Input
                label="شماره تلفن"
                name="phone"
                placeholder="شماره تلفن"
              />
            </div>
            <div className="flex gap-5">
              <Form.Input
                label="آدرس"
                name="address"
                placeholder="آدرس"
              />
            </div>

            <div className="flex gap-x-2 mt-5">
              <Button type="submit" disabled={mutation.isPending}>
                {mutation.isPending
                  ? "در حال به‌روزرسانی..."
                  : "به‌روزرسانی پروفایل"}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
