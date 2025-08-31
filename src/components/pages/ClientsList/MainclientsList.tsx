import { Form } from "@/components/shared/Form";
import { DataTable } from "@/components/shared/data-table";
import { z } from "zod";
import SectionAccImg from "@/components/shared/section/SectionAccImg";
import { CLIENTS_LIST } from "./const";
import { columns } from "./columns";
import Breadcrumb from "@/components/shared/breadcrumb";
import { useEffect } from "react";
import { imageSchema } from "@/components/shared/validation";
import { nameSchema } from "@/components/shared/validation";
import { selectSchema } from "@/components/shared/validation";
import { phoneSchema } from "@/components/shared/validation";
import { emailSchema } from "@/components/shared/validation";
import { usernameSchema } from "@/components/shared/validation";
const validation = z.object({
  firstName: nameSchema,
  lastName: nameSchema,
  gender: selectSchema,
  phone: phoneSchema,
  email: emailSchema,
  username: usernameSchema,
  image: imageSchema,
});

const defaultValues = {
  firstName: "",
  lastName: "",
  gender: "" as unknown as "male" | "female", 
  phone: "",
  email: "",
  username: "",
  image: null as unknown as File,
};

const PersonForm = () => {
  const onSubmit = (formData: z.infer<typeof validation>) => {
    console.log(formData);
  };
  const title = "لیست همه ارباب رجوع";
  useEffect(() => {
    document.title = title;
  });

  return (
    <>
      <Breadcrumb>{title}</Breadcrumb>
      <SectionAccImg
        FileTitle="تصویر پروفایل"
        file={
          <>
            <Form.Image name="image" label="تصویر پروفایل" />
          </>
        }
        defaultValues={defaultValues}
        schema={validation}
        formFields={
          <>
            <div className="flex flex-col md:flex-row gap-5">
              <Form.Input
                name="firstName"
                label="نام "
                required
                placeholder="نام"
              />
              <Form.Input
                name="lastName"
                label="نام خانوادگی "
                required
                placeholder="نام خانوادگی"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <Form.Select
                name="gender"
                label="جنسیت"
                placeholder="انتخاب جنسیت"
                required
              >
                <Form.SelectItem value="male">آقا</Form.SelectItem>
                <Form.SelectItem value="female">خانم</Form.SelectItem>
              </Form.Select>
              <Form.Input
                name="phone"
                label="شماره تماس "
                required
                placeholder="شماره تماس"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-5">
            <Form.Input name="email" label="ایمیل" placeholder="ایمیل" required />

              <Form.Input name="username" label="حساب کاربری" placeholder="حساب کاربری" required />
            </div>
          </>
        }
        FirstTitle="ثبت اطلاعات ارباب رجوع"
        SecoundTitle="لیست همه ارباب رجوع"
        onSubmit={onSubmit}
        table={
          <DataTable
            columns={columns}
            data={CLIENTS_LIST}
            searchableKeys={["firstName", "lastName", "phone", "email"]}
          />
        }
      />
    </>
  );
};

export default PersonForm;
