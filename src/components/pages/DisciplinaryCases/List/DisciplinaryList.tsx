import { Form } from "@/components/shared/Form";

import z from "zod";

import SectionAccImg from "@/components/shared/section/SectionAccImg";
import DisciplinaryTable from "./DisciplinaryTable";
import { usePostRows } from "@/hook/usePostRows";


const validation = z.object({
  employee: z.string().min(1, "انتخاب کارمند الزامی است"),
  caseType: z.string().min(1, "انتخاب نوع پرونده الزامی است"),
  subject: z.string().min(1, "موضوع الزامی است"),
  caseDate: z.date({ error: "تاریخ پرونده الزامی است" }),
  description: z.string().min(1, "شرح الزامی است"),
  files: z.array(z.any()).optional(),
});

const DisciplinaryList = () => {
  const defaultValues = {
    employee: "",
    caseType: "",
    subject: "",
    caseDate: new Date(),
    description: "",
    files: [],
  };

  const { mutation, form } = usePostRows("disciplinary-cases", ["disciplinary"], defaultValues, validation, "پرسنل", true);


  const onSubmit = (data: z.infer<typeof validation>) => {
    const formData = new FormData();
    Object.entries(data as Record<string, any>).forEach(([key, value]) => {
      if (key === "image") {
        if (value instanceof File) {
          formData.append("image", value);
        }
        // skip if null/undefined or already a URL string (server expects file on create)
        return;
      }
      if (value !== undefined && value !== null) {
        formData.append(key, String(value));
      }
    });
    mutation.mutate(formData);
  };

  return (
    <div>
      <SectionAccImg
        form={form}
        file={<><Form.Image name="files" label="پیوست" required /></>}
        FileTitle="پیوست پرونده"
        onSubmit={onSubmit}
        table={<DisciplinaryTable />}
        FirstTitle="ثبت جدید مورد"
        SecoundTitle="لیست همه موارد"
        formFields={
          <>
            <div className="flex gap-5">
              <Form.Select
                label="کارمند"
                name="employee"
                placeholder="انتخاب کارمند"
                required
              >
                <Form.SelectItem value="1">کارمند ۱</Form.SelectItem>
                <Form.SelectItem value="2">کارمند ۲</Form.SelectItem>
              </Form.Select>

              {/* نوع پرونده */}
              <Form.Select
                label="نوع پرونده"
                name="caseType"
                placeholder="انتخاب نوع پرونده"
                required
              >
                <Form.SelectItem value="1">تخلف انضباطی</Form.SelectItem>
                <Form.SelectItem value="2">تخلف اخلاقی</Form.SelectItem>
                <Form.SelectItem value="3">تخلف کاری</Form.SelectItem>
                <Form.SelectItem value="4">تخلف امنیتی</Form.SelectItem>
                <Form.SelectItem value="5">سایر</Form.SelectItem>
              </Form.Select>
            </div>
            <div className="flex gap-5">
              <Form.Input
                label="موضوع"
                name="subject"
                placeholder="موضوع پرونده را وارد کنید"
                required
              />
              <Form.Date label="تاریخ پرونده" name="caseDate" />
            </div>
            <Form.Textarea
              label="شرح"
              name="description"
              placeholder="شرح کامل پرونده را وارد کنید"
              required
            />
          </>
        }

      />
    </div>
  );
};

export default DisciplinaryList;
