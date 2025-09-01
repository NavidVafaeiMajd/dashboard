import { useEffect } from "react";
import Table from "./Table";
import SectionAccImg from "@/components/shared/section/SectionAccImg";
import { staffListValidtion } from "./validation";
import { Form } from "@/components/shared/Form";
import type z from "zod";

const StaffList: React.FC = () => {
  const title = "پرسنل";
  useEffect(() => {
    document.title = title;
  }, []);

  const defaultValues = {
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    image: null,
    personnelCode: "",
    gender: "",
    email: "",
    username: "",
    password: "",
    shift: "",
    role: "",
    department: "",
    position: "",
    monthlySalary: "",
    dailySalary: "",
    salaryType: "",
  };
  const formFields = (
    <>
      <div className="flex flex-col md:flex-row gap-5">
        <Form.Input name="firstName" label="نام" required placeholder="نام"  />
        <Form.Input name="lastName" label="نام خانوادگی" required placeholder="نام خانوادگی"   />
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <Form.Input name="personnelCode" label="کد پرسنلی" placeholder="کد پرسنلی"  required />
        <Form.Input name="phone" label="شماره تماس" placeholder="شماره تماس" />
        <Form.Select name="gender" label="جنسیت" placeholder="جنسیت" required>
          <Form.SelectItem value="male">آقا</Form.SelectItem>
          <Form.SelectItem value="female">خانم</Form.SelectItem>
        </Form.Select>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <Form.Input name="email" label="ایمیل" placeholder="ایمیل" required />
        <Form.Input name="username" label="نام کاربری" placeholder="نام کاربری" required />
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <Form.Select name="shift" label="شیفت اداره ای" placeholder="شیفت اداره ای" required>
          <Form.SelectItem value="male">آقا</Form.SelectItem>
          <Form.SelectItem value="female">خانم</Form.SelectItem>
        </Form.Select>
      </div>

      <div className="flex flex-col md:flex-row gap-5">
        <Form.Select name="department" label="واحد سازمانی" placeholder="واحد سازمانی" required>
          <Form.SelectItem value="male">آقا</Form.SelectItem>
          <Form.SelectItem value="female">خانم</Form.SelectItem>
        </Form.Select>
        <Form.Select name="position" label="سمت سازمانی" placeholder="سمت سازمانی" required>
          <Form.SelectItem value="male">آقا</Form.SelectItem>
          <Form.SelectItem value="female">خانم</Form.SelectItem>
        </Form.Select>
      </div>

      <div className="flex flex-col md:flex-row gap-5">
        <Form.Input name="monthlySalary" label="دستمزد ماهانه" placeholder="دستمزد ماهانه" required/>
        <Form.Input name="dailySalary" label="دستمزد روزانه" placeholder="دستمزد روزانه" required/>
        <Form.Select name="salaryType" label="نوع  فیش حقوقی" placeholder="نوع  فیش حقوقی" required>
          <Form.SelectItem value="male">آقا</Form.SelectItem>
          <Form.SelectItem value="female">خانم</Form.SelectItem>
        </Form.Select>
      </div>
    </>
  );
  const onSubmit = (data: z.infer<typeof staffListValidtion>) => {
    console.log("📦 Submitted Data:", data);
  };

  return (
    <>
      <SectionAccImg
        schema={staffListValidtion}
        defaultValues={defaultValues}
        formFields={formFields}
        file={
          <>
            {" "}
            <Form.Image name="image" label="تصویر پروفایل" />{" "}
          </>
        }
        onSubmit={onSubmit}
        table={<Table />}
        FirstTitle="ثبت جدید کارمند  "
        SecoundTitle="لیست همه پرسنل"
        FileTitle="تصویر پروفایل"
      />
    </>
  );
};

export default StaffList;
