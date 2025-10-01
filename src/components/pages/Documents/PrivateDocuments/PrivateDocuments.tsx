import { Form } from "@/components/shared/Form";
import SectionAcc from "@/components/shared/section/SectionAcc";
import PostLoad from "@/components/ui/postLoad";
import { usePostRows } from "@/hook/usePostRows";
import z from "zod";
import DocumentsTable from "./DocumentsTable";
import { imageSchema } from "@/components/shared/validation";


export const validation = z.object({
  license_name: z
    .string()
    .min(1, "نام مجوز الزامی است")
    .max(255, "نام مجوز نباید بیشتر از 255 کاراکتر باشد"),

  document_type: z
    .string()
    .min(1, "نوع سند الزامی است")
    .max(255, "نوع سند نباید بیشتر از 255 کاراکتر باشد"),

  license_number: z
    .string()
    .min(1, "شماره مجوز الزامی است")
    .max(255, "شماره مجوز نباید بیشتر از 255 کاراکتر باشد"),

  expiry_date: z
    .date(),

  file: imageSchema, // شامل حجم و فرمت
});


const PrivateDocuments = () => {
  const defaultValues = {
    license_name: "",
    document_type: "",
    license_number: "",
    expiry_date:new Date(),
    file: "",
  };
  
  const { mutation, form } = usePostRows(
    "official-documents",
    ["official-documents"],
    defaultValues,
    validation,
    "سند",
    true
  );

  const onSubmit = (data: z.infer<typeof validation>) => {
    const formData = new FormData();
    formData.append("license_name", data.license_name);
    formData.append("document_type", data.document_type);
    formData.append("license_number", data.license_number);
    const expiry = data.expiry_date instanceof Date
      ? data.expiry_date.toISOString().slice(0, 10) // YYYY-MM-DD
      : String(data.expiry_date);
    formData.append("expiry_date", expiry);
  
    if (data.file instanceof File) {
      formData.append("file", data.file);
    }
  
    mutation.mutate(formData);
  };
  

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
                <Form.Input
                  label="نام مجوز"
                  name="license_name"
                  placeholder="نام مجوز"
                  required
                />

                <Form.Input
                  label="شماره مجوز"
                  name="license_number"
                  placeholder="شماره مجوز"
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

                <Form.Date
                  label="تاریخ انقضا"
                  name="expiry_date"
                />
              </div>

              <Form.Image label="آپلود فایل" name="file" />
          </div>
        }
      />
    </div>
  );
};

export default PrivateDocuments;
