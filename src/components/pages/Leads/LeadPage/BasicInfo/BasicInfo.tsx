import { Form } from "@/components/shared/Form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";
import { validation } from "./validation";
import { useForm } from "react-hook-form";
import { IoDocumentTextOutline } from "react-icons/io5";

const BasicInfo = () => {
  const form = useForm<z.infer<typeof validation>>({
    resolver: zodResolver(validation),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      phoneNumber: "",
      gender: "1",     // دیفالت: مرد
      status: "2",     // دیفالت: فعال
      country: "IR",   // دیفالت: ایران
      province: "",
      city: "",
      postalCode: "",
      address1: "",
      address2: "",
    },
  });

  const onSubmit = (data: z.infer<typeof validation>) => {
    console.log(data);
  };
  return (
    <>
      <div>
        <div className="flex gap-2 border-b-red-500 border-b-2 p-3">
          <span>
            <IoDocumentTextOutline className="w-7 h-7" />
          </span>
          <span> اطلاعات شخصی</span>
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
                name="firstName"
                placeholder="نام"
                required
              />
              <Form.Input
                label="نام خانوادگی"
                name="lastName"
                placeholder="نام خانوادگی"
                required
              />
              <Form.Input
                label="ایمیل"
                name="firstName"
                placeholder="ایمیل"
                required
              />
            </div>
            <div className="flex gap-5">
              <Form.Input
                label="نام کاربری"
                name="firstName"
                placeholder="نام کاربری"
                required
              />
              <Form.Select
                label="وضعیت"
                name="gender"
                placeholder=" وضعیت"
                required
              >
                <Form.SelectItem value="1">ممنوع</Form.SelectItem>
                <Form.SelectItem value="2">فعال</Form.SelectItem>
              </Form.Select>
              <Form.Input
                label="شماره تماس"
                name="phoneNumber"
                placeholder="شماره تماس"
                required
              />
            </div>
            <div className="flex gap-5">
              <Form.Select
                label="جنسیت"
                name="gender"
                placeholder="انتخاب جنسیت"
                required
              >
                <Form.SelectItem value="1">مرد</Form.SelectItem>
                <Form.SelectItem value="2">زن</Form.SelectItem>
              </Form.Select>

            </div>
            <div className="flex gap-5">
              <Form.Input
                placeholder="استان"
                label="استان"
                name="province"
                required
              />
              <Form.Input placeholder="شهر" label="شهر" name="city" required />
              <Form.Input
                placeholder="کدپستی"
                label="کدپستی"
                name="postalCode"
                required
              />
            </div>
            <div className="flex gap-5">
              <Form.Input
                label="نشانی 1"
                name="address1"
                placeholder="نشانی 1"
                required
              />
              <Form.Input
                label="نشانی 2"
                name="address2"
                placeholder="نشانی 2"
                required
              />
            </div>

            <div className="flex gap-x-2 mt-5">
              <Button>به روزرسانی پروفایل</Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default BasicInfo;
