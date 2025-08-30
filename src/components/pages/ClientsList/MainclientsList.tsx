import { Form } from "@/components/shared/Form";
import { DataTable } from "@/components/shared/data-table";
import { z } from "zod";
import SectionAccImg from "@/components/shared/section/SectionAccImg";
import { CLIENTS_LIST } from "./const";
import { columns } from "./columns";

const validation = z.object({
  firstName: z.string().min(1, "نام الزامی است"),
  lastName: z.string().min(1, "نام خانوادگی الزامی است"),
  gender: z.enum(["male", "female"]).optional(),
  phone: z.string().min(1, "شماره تماس الزامی است"),
  email: z.string().email("ایمیل معتبر وارد کنید").optional(),
});

const defaultValues = {
  firstName: "",
  lastName: "",
  gender: undefined,
  phone: "",
  email: "",
  image: null,
};


const PersonForm = () => {

  const onSubmit = (formData: z.infer<typeof validation>) => {
    console.log(formData);
  };

  return (
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
          <Form.Input
            name="firstName"
            label="نام *"
            required
            placeholder="نام"
          />
          <Form.Input
            name="lastName"
            label="نام خانوادگی *"
            required
            placeholder="نام خانوادگی"
          />
          <Form.Select name="gender" label="جنسیت" placeholder="انتخاب جنسیت">
            <Form.SelectItem value="male">آقا</Form.SelectItem>
            <Form.SelectItem value="female">خانم</Form.SelectItem>
          </Form.Select>
          <Form.Input
            name="phone"
            label="شماره تماس *"
            required
            placeholder="شماره تماس"
          />
          <Form.Input name="email" label="ایمیل" placeholder="ایمیل" />
        </>
      }
      FirstTitle="ثبت اطلاعات شخص"
      SecoundTitle="لیست افراد"
      onSubmit={onSubmit}
      table={
        <DataTable
          columns={columns}
          data={CLIENTS_LIST}
          searchableKeys={["firstName", "lastName", "phone", "email"]}
        />
      }
    />
  );
};

export default PersonForm;
