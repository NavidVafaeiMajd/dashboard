import { Form } from "@/components/shared/Form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { validation } from "./validation";
import { TbLockPassword } from "react-icons/tb";

const AccountInfo = () => {
  const form = useForm<z.infer<typeof validation>>({
    resolver: zodResolver(validation),
    defaultValues: {
      username: "",
      email: "",
      monthlySalary: "",
      dailySalary: "",
      salaryType: "",
    },
  });
  const onSubmit = (data: z.infer<typeof validation>) => {
    console.log(data);
  };

  return (
    <div>
      <div className="flex gap-2 border-b-red-500 border-b-2 p-3">
        <TbLockPassword className="w-7 h-7" />
        <span> اطلاعات حساب کاربری </span>
      </div>
      <div className="p-3">
        <Form
          formProp={form}
          onSubmit={onSubmit}
          className="flex flex-col gap-5"
        >
          <div className="flex flex-col md:flex-row gap-5">
            <Form.Input
              name="monthlySalary"
              label="دستمزد ماهانه"
              placeholder="دستمزد ماهانه"
              required
            />
            <Form.Input
              name="dailySalary"
              label="دستمزد روزانه"
              placeholder="دستمزد روزانه"
              required
            />
            <Form.Select
              name="salaryType"
              label="نوع  فیش حقوقی"
              placeholder="نوع  فیش حقوقی"
              required
            >
              <Form.SelectItem value="male">آقا</Form.SelectItem>
              <Form.SelectItem value="female">خانم</Form.SelectItem>
            </Form.Select>
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

export default AccountInfo;
