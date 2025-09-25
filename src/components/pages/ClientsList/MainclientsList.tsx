import { Form } from "@/components/shared/Form";
import { DataTable } from "@/components/shared/data-table";
import { z } from "zod";
import { columns } from "./columns";
import Breadcrumb from "@/components/shared/breadcrumb";
import { useEffect } from "react";
import { imageSchema } from "@/components/shared/validation";
import { nameSchema } from "@/components/shared/validation";
import { selectSchema } from "@/components/shared/validation";
import { phoneSchema } from "@/components/shared/validation";
import { emailSchema } from "@/components/shared/validation";
import { usernameSchema } from "@/components/shared/validation";
import { usePostRows } from "@/hook/usePostRows";
import SectionAcc from "@/components/shared/section/SectionAcc";
import { useGetRowsToTable } from "@/hook/useGetRows";
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
  const title = "لیست همه ارباب رجوع";
  useEffect(() => {
    document.title = title;
  });

  const fetchClient = () => useGetRowsToTable("employees");

  const { mutation, form } = usePostRows(
    "clients",
    ["clients"],
    defaultValues,
    validation,
    "مشتریان",
    true
  );

  const onSubmit = (formData: z.infer<typeof validation>) => {
    console.log(formData);
    mutation.mutate(formData)
  };

  return (
    <>
      <Breadcrumb>{title}</Breadcrumb>
      <SectionAcc
        form={form}
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
                options={[
                  { label: "مرد", value: "مرد" },
                  { label: "مرد", value: "مرد" },
                ]}
                required
              />
              <Form.Input
                name="phone"
                label="شماره تماس "
                required
                placeholder="شماره تماس"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <Form.Input
                name="email"
                label="ایمیل"
                placeholder="ایمیل"
                required
              />

              <Form.Input
                name="username"
                label="حساب کاربری"
                placeholder="حساب کاربری"
                required
              />
            </div>
          </>
        }
        FirstTitle="ثبت اطلاعات ارباب رجوع"
        SecoundTitle="لیست همه ارباب رجوع"
        onSubmit={onSubmit}
        table={
          <DataTable
            columns={columns}
            queryKey={["clients"]}
            queryFn={fetchClient}
            searchableKeys={["firstName", "lastName", "phone", "email"]}
          />
        }
      />
    </>
  );
};

export default PersonForm;
