import { Form } from "@/components/shared/Form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IoDocumentTextOutline } from "react-icons/io5";
import { z } from "zod";
import { validation } from "./validation";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";

const ChangePass = () => {
  const form = useForm<z.infer<typeof validation>>({
    resolver: zodResolver(validation),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: z.infer<typeof validation>) => {
      const token = Cookies.get("token");
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }

      const res = await fetch("http://localhost:8000/api/profile/change-password", {
        method: "POST",
        headers,
        body: JSON.stringify({
          current_password: data.currentPassword,
          new_password: data.newPassword,
        }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText);
      }

      return res.json();
    },
    onSuccess: () => {
      toast.success("رمز عبور با موفقیت تغییر کرد");
      form.reset();
    },
    onError: (error: any) => {
      toast.error(`خطا: ${error.message}`);
    },
  });

  const onSubmit = (data: z.infer<typeof validation>) => {
    const formData = {
      old_password: data.currentPassword,
      password : data.confirmPassword
    }
    console.log(formData )
    mutation.mutate(formData );
  };

  return (
    <div>
      <div className="flex gap-2 border-b-red-500 border-b-2 p-3">
        <IoDocumentTextOutline className="w-7 h-7" />
        <span>تغییر رمز عبور</span>
      </div>
      <div className="p-3">
        <Form
          formProp={form}
          onSubmit={onSubmit}
          className="flex flex-col gap-5"
        >
          <Form.Input
            label="رمز فعلی"
            name="currentPassword"
            placeholder="رمز فعلی خود را وارد کنید"
            required
          />
          <div className="flex gap-5">
            <Form.Input
              label="رمز جدید"
              name="newPassword"
              placeholder="رمز جدید را وارد کنید"
              required
            />
            <Form.Input
              label="تکرار رمز جدید"
              name="confirmPassword"
              placeholder="رمز جدید را دوباره وارد کنید"
              required
            />
          </div>

          <div>
            <Button type="submit" className="mt-4">
              تغییر رمز عبور
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ChangePass;
