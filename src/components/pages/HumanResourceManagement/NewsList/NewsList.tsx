import { useEffect } from "react";
import Table from "./Table";
import SectionAcc from "@/components/shared/section/SectionAcc";
import { validation } from "./validation";
import { Form } from "@/components/shared/Form";
import type z from "zod";

const NewsList: React.FC = () => {
  const title = " ابلاغیه ";
  useEffect(() => {
    document.title = title;
  }, []);

  const defaultValues = {
    newsTitle: "",
    startDate: null,
    finishDate: null,
    organizationalUnit: "",
    summary: "",
    newsText: "",
  };
  const formFields = (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Form.Input
          name="newsTitle"
          label="عنوان ابلاغیه"
          required
          placeholder="عنوان ابلاغیه"
        />
        <div className="flex flex-col md:flex-row gap-5">
          <Form.Date name="startDate" label="تاریخ شروع" />
          <Form.Date name="finishDate" label="تاریخ پایان" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5">

      </div>

      <div className="flex flex-col md:flex-row gap-5">
      <Form.Select
        name="organizationalUnit"
        label="واحد سازمانی"
        required
        placeholder="انتخاب واحد سازمانی"
      >
        <Form.SelectItem value="1">واحد سازمانی 1</Form.SelectItem>
        <Form.SelectItem value="2">واحد سازمانی 2</Form.SelectItem>
      </Form.Select>
      <Form.Input name="summary" label="اختصاری" required placeholder="اختصاری" />
      </div>
      <Form.RichText name="newsText" label="متن ابلاغیه" required />
    </>
  );

  const onSubmit = (data: z.infer<typeof validation>) => {
    console.log(data);
  };

  return (
    <>
      <SectionAcc
        defaultValues={defaultValues}
        schema={validation}
        formFields={formFields}
        onSubmit={onSubmit}
        table={<Table />}
        FirstTitle="ثبت جدید ابلاغیه"
        SecoundTitle="لیست همه ابلاغیه ها"
      />
    </>
  );
};

export default NewsList;
