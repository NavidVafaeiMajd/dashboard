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
import Cookies from "js-cookie";

const BasicInfo = ({ queryData }: { queryData: any }) => {

  const form = useForm<z.infer<typeof validation>>({
    resolver: zodResolver(validation),
    defaultValues: {
      first_name: queryData?.first_name == null ? "" : queryData?.first_name,
      last_name: queryData?.last_name == null ? "" : queryData?.last_name,
      phone: queryData?.phone == null ? "" : queryData?.phone,
      gender: queryData?.gender == null ? "" : queryData?.gender,
      province: queryData?.province == null ? "" : queryData?.province,
      country: queryData?.country == null ? "" : queryData?.country,
      city: queryData?.city == null ? "" : queryData?.city,
      postal_code: queryData?.postal_code == null ? "" : queryData?.postal_code,
      address: queryData?.address == null ? "" : queryData?.address,
      username: queryData?.username == null ? "" : queryData?.username,
      company_type: queryData?.company_type ?? "",
      company_name: queryData?.company_name ?? "",
      national_id: queryData?.national_id ?? "",
      economic_code: queryData?.economic_code ?? "",
      registration_number: queryData?.registration_number ?? "",
      email: queryData?.email ?? "",
    },
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: z.infer<typeof validation>) => {
      const token = Cookies.get("token");
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }

      const res = await fetch(
        `http://localhost:8000/api/profile`,
        {
          method: "PUT",
          headers,
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
        queryKey: ["profile"],
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
      {mutation.isPending && <PostLoad />}
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
                required
              />
              <Form.Input
                label="نام خانوادگی"
                name="last_name"
                placeholder="نام خانوادگی"
                required
              />
            </div>
            <div className="flex gap-5">
              <Form.Input
                label="شماره تماس"
                name="phone"
                placeholder="شماره تماس"
                required
              />
              <Form.Select
                label="جنسیت"
                name="gender"
                placeholder="انتخاب جنسیت"
                options={[
                  { label: "مرد", value: "مرد" },
                  { label: "زن", value: "زن" },
                ]}
                required
              />
            </div>
            <div className="flex gap-5">
              <Form.Input label="نام کاربری" name="username" />
              <Form.Input label="ایمیل " name="email" />
            </div>
            <div className="flex gap-5">
              <Form.Input label="نوع شرکت" name="company_type" />
              <Form.Input label="اسم شرکت" name="company_name" />
              
            </div>
            <div className="flex gap-5">
              <Form.Input label="شناسه ملی " name="national_id" />
              <Form.Input label="کد اقتصادی " name="economic_code" />
              <Form.Input label="شماره ثبت شرکت  " name="registration_number" />
              
            </div>
            <div className="flex gap-5">
            <Form.Input placeholder="کشور" label="کشور" name="country" />
              <Form.Input placeholder="استان" label="استان" name="province" />
              <Form.Input placeholder="شهر" label="شهر" name="city" />
              <Form.Input
                placeholder="کدپستی"
                label="کدپستی"
                name="postal_code"
              />
            </div>

            <div className="flex gap-5">
              <Form.Input
                label="نشانی"
                name="address"
                placeholder="نشانی"
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
