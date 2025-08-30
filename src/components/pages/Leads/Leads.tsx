import Breadcrumb from "@/components/shared/breadcrumb";
import { LEADS } from "./const";
import { DataTable } from "@/components/shared/data-table";
import { Form } from "@/components/shared/Form";
import { z } from "zod";
import SectionAccImg from "@/components/shared/section/SectionAccImg";
import { validation } from "./validation";
import { columns } from "./columns";

const Leads = () => {
  const defaultValues = {
    accountNumber: "",
    lastName: "",
    firstName: "",
    email: "",
    gender: "",
    image: null,
  };

  const onSubmit = (data: z.infer<typeof validation>) => {
    console.log("Form data:", data);
  };

  return (
    <div>
      <Breadcrumb>رهبران</Breadcrumb>

      <SectionAccImg
        FileTitle="تصویر پروفایل"
        defaultValues={defaultValues}
        schema={validation}
        formFields={
          <>
            <div className="flex flex-col md:flex-row gap-5">
              <Form.Input
                name="firstName"
                label="نام"
                placeholder="نام"
                required
              />
              <Form.Input
                name="lastName"
                label="نام خانوادگی"
                placeholder="نام خانوادگی"
                required
              />
              <Form.Select
                name="gender"
                label="جنسیت"
                placeholder="جنسیت"
                required
              >
                <Form.SelectItem value="male">آقا</Form.SelectItem>
                <Form.SelectItem value="female">خانم</Form.SelectItem>
              </Form.Select>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <Form.Input
                name="accountNumber"
                label="شماره تماس"
                placeholder="شماره تماس"
                required
              />
              <Form.Input
                name="email"
                label="ایمیل"
                placeholder="ایمیل"
                required
              />
            </div>
          </>
        }
        onSubmit={onSubmit}
        file={
          <>
            <Form.Image name="image" label="تصویر" required />
          </>
        }
        FirstTitle="ثبت جدید رهبری"
        SecoundTitle="لیست همه رهبران"
        table={
          <DataTable
            columns={columns}
            data={LEADS}
            searchableKeys={["name", "phone", "status"]}
          />
        }
      />
    </div>
  );
};

export default Leads;
