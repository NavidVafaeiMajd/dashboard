import { Form } from "@/components/shared/Form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { validation } from "./validation";
import { TbLockPassword } from "react-icons/tb";

const ProjectsList = () => {
  const form = useForm<z.infer<typeof validation>>({
    resolver: zodResolver(validation),
    defaultValues: {
      username: "",
      email: "",
    },
  });
  const onSubmit = (data: z.infer<typeof validation>) => {
    console.log(data);
  };

  return (
    <div>
      <div className="flex gap-2 border-b-red-500 border-b-2 p-3">
        <TbLockPassword className="w-7 h-7" />
        <span>تغییر رمز عبور</span>
      </div>
      <div className="p-3">
        <Form
          formProp={form}
          onSubmit={onSubmit}
          className="flex flex-col gap-5"
        >
          <div className="flex gap-5">
            <Form.Input
              label="نام کاربری "
              name="username"
              placeholder="نام کاربری"
              required
            />
            <Form.Input
              label="حساب ایمیل "
              name="email"
              placeholder="حساب ایمیل "
              required
            />
          </div>

          <div>
            <Button type="submit" className="mt-4">
              ذخیره
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ProjectsList;
