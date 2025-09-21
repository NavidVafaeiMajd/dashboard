import { useEffect } from "react";
import Table from "./Table";
import SectionAcc from "@/components/shared/section/SectionAcc";
import { validation } from "./validation";
import { Form } from "@/components/shared/Form";
import type z from "zod";
import { usePostRows } from "@/hook/usePostRows";
import { useDepartments } from "@/hook/useDepartments";

const NewsList: React.FC = () => {
  const title = " ابلاغیه ";
  useEffect(() => {
    document.title = title;
  }, []);

  const { data: departments, isPending: departmentsLoading } = useDepartments();

  const defaultValues = {
    title: "",
    publish_date: null,
    end_date: null,
    department_id: "",
    summary: "",
    content: "",
  };
  const { mutation, form } = usePostRows(
    "hr-news",
    ["hr-news"],
    defaultValues,
    validation,
    "ابلاغیه",
    true
  );
  const formFields = (
    <div className="relative">
      {(mutation.isPending || departmentsLoading) && (
        <div className="flex justify-center items-center absolute p-4 top-0 left-0 right-0 bottom-0 bg-bgBack/90 z-50">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          <span className="mr-2">در حال بارگذاری...</span>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Form.Input
          name="title"
          label="عنوان ابلاغیه"
          required
          placeholder="عنوان ابلاغیه"
        />
        <div className="flex flex-col md:flex-row gap-5">
          <Form.Date name="publish_date" label="تاریخ شروع" />
          <Form.Date name="end_date" label="تاریخ پایان" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5"></div>

      <div className="flex flex-col md:flex-row gap-5">
        <Form.Select
          name="department_id"
          label="واحد سازمانی"
          required
          placeholder="انتخاب واحد سازمانی"
        >
          {departments?.data?.map((dept, index) => (
            <Form.SelectItem key={index} value={String(dept.id)}>
              {dept.name || dept.title || dept.department_name}
            </Form.SelectItem>
          ))}
        </Form.Select>
        <Form.Input
          name="summary"
          label="اختصاری"
          required
          placeholder="اختصاری"
        />
      </div>
      <Form.RichText name="content" label="متن ابلاغیه" required />
    </div>
  );

  const onSubmit = (data: z.infer<typeof validation>) => {
    const formData = {
      ...data,
      publish_date: data.publish_date
        ? data.publish_date.toISOString().slice(0, 19)
        : null,
      end_date: data.end_date
        ? data.end_date.toISOString().slice(0, 19)
        : null,
    };
    
    console.log(formData)
    mutation.mutate(formData);
  };

  return (
    <>
      <SectionAcc
        form={form}
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
