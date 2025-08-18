import { Form } from "@/components/shared/Form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IoDocumentTextOutline } from "react-icons/io5";
import { z } from "zod";
import { validation } from "./validation";

const ChangePass = () => {
  const form = useForm<z.infer<typeof validation>>({
    resolver: zodResolver(validation),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: z.infer<typeof validation>) => {
    console.log(data);
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
