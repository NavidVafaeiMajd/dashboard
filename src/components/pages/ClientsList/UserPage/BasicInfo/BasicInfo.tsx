import { Form } from "@/components/shared/Form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";
import { validation } from "./validation";
import { useForm } from "react-hook-form";
import { IoDocumentTextOutline } from "react-icons/io5";
interface Props {
  queryData?: any;
}
const BasicInfo = ({ queryData }: Props) => {
  const form = useForm<z.infer<typeof validation>>({
    resolver: zodResolver(validation),
    defaultValues: {
      first_name: queryData?.first_name == null ? "" : queryData?.first_name,
      last_name: queryData?.last_name == null ? "" : queryData?.last_name,
      email: queryData?.email == null ? "" : queryData?.email,
      phone: queryData?.phone == null ? "" : queryData?.phone,
      gender: queryData?.gender == null ? "" : queryData?.gender,
      status: queryData?.status == null ? "" : queryData?.status,
      province: queryData?.province == null ? "" : queryData?.province,
      city: queryData?.city == null ? "" : queryData?.city,
      postalCode: queryData?.postalCode == null ? "" : queryData?.postalCode,
      address1: queryData?.address1 == null ? "" : queryData?.address1,
      address2: queryData?.address2 == null ? "" : queryData?.address2,
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
              <Form.Input
                label="ایمیل"
                name="firstName"
                placeholder="ایمیل"
                required
              />
            </div>
            <div className="flex gap-5">
              <Form.Select
                label="وضعیت"
                name="gender"
                placeholder=" وضعیت"
                options={[
                  { label: "ممنوع", value: "ممنوع" },
                  { label: "فعال", value: "فعال" },
                ]}
              />

              <Form.Input
                label="شماره تماس"
                name="phone"
                placeholder="شماره تماس"
                required
              />
            </div>
            <div className="flex gap-5">
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
              <Form.Input
                placeholder="استان"
                label="استان"
                name="province"
                
              />
              <Form.Input placeholder="شهر" label="شهر" name="city"  />
              <Form.Input
                placeholder="کدپستی"
                label="کدپستی"
                name="postalCode"
                
              />
            </div>
            <div className="flex gap-5">
              <Form.Input
                label="نشانی 1"
                name="address1"
                placeholder="نشانی 1"
                
              />
              <Form.Input
                label="نشانی 2"
                name="address2"
                placeholder="نشانی 2"
                
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
