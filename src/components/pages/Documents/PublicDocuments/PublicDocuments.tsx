import { Form } from "@/components/shared/Form";
import SectionAcc from "@/components/shared/section/SectionAcc";
import PostLoad from "@/components/ui/postLoad";
import { usePostRows } from "@/hook/usePostRows";
import z from "zod";
import DocumentsTable from "./DocumentsTable";
import { useDepartments } from "@/hook/useDepartments";
import { imageSchema } from "@/components/shared/validation";

export const validation = z.object({
  department_id: z.string().min(1, "انتخاب دپارتمان الزامی است"),
  document_type: z.string().min(1, "نوع سند الزامی است"),
  document_name: z.string().min(1, "نام سند الزامی است"),
  file: imageSchema,
});

const PublicDocuments = () => {
  const defaultValues = {
    department_id: "",
    document_type: "",
    document_name: "",
    file: "",
  };

  const { mutation, form } = usePostRows(
    "upload-files",
    ["upload-files"],
    defaultValues,
    validation,
    "سند",
    true
  );

  const onSubmit = (data: z.infer<typeof validation>) => {
    const formData = new FormData();
    formData.append("department_id", data.department_id);
    formData.append("document_type", data.document_type);
    formData.append("document_name", data.document_name);
    
    // فایل را به FormData اضافه می‌کنیم
    if (data.file instanceof File) {
      formData.append("file", data.file);
    }
  
    mutation.mutate(formData);
  };
  
  const { data: departments } = useDepartments();
  const departmentsMapped = departments?.data?.map((item) => ({
    value: String(item.id),
    label: item.name,
  }));

  return (
    <div>
      <SectionAcc
        form={form}
        FirstTitle="پیوست پرونده"
        onSubmit={onSubmit}
        table={<DocumentsTable />}
        SecoundTitle="ثبت جدید مورد"
        defaultValues={defaultValues}
        schema={validation}
        formFields={
          <div className="relative">
            {mutation.isPending && <PostLoad />}
            <div className="flex gap-5">
              <Form.Select
                label="واحد سازمانی"
                name="department_id"
                placeholder="واحد سازمانی"
                options={departmentsMapped || []}
                required
              />

              <Form.Input
                label="نام سند "
                name="document_name"
                placeholder="نام سند  "
                required
              />
            </div>
            <div className="flex gap-5">
              <Form.Input
                label="نوع سند"
                name="document_type"
                placeholder="نوع سند"
                required
              />
              <Form.Image label="تاریخ پرونده" name="file" />
            </div>
          </div>
        }
      />
    </div>
  );
};

export default PublicDocuments;
