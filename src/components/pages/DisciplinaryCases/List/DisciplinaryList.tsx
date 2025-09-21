import { Form } from "@/components/shared/Form";

import z from "zod";

import DisciplinaryTable from "./DisciplinaryTable";
import { usePostRows } from "@/hook/usePostRows";
import SectionAcc from "@/components/shared/section/SectionAcc";
import { useEmployees } from "@/hook/useEmployees";

const validation = z.object({
  employee_id: z.string(),
  type: z.string().min(1, "انتخاب نوع پرونده الزامی است"),
  title: z.string().min(1, "موضوع الزامی است"),
  case_date: z.date({ error: "تاریخ پرونده الزامی است" }),
  description: z.string().min(1, "شرح الزامی است"),
});

const DisciplinaryList = () => {
  const defaultValues = {
    employee_id: "",
    type: "",
    title: "",
    case_date: new Date(),
    description: "",
  };

  const { data: employee, isPending: employeesLoading } = useEmployees();

  const { mutation, form } = usePostRows(
    "disciplinary-cases",
    ["disciplinary"],
    defaultValues,
    validation,
    "پرسنل",
    true
  );

  const onSubmit = (data: z.infer<typeof validation>) => {
    const formData = {
      ...data,
      case_date: data.case_date?.toISOString().slice(0, 19),
      employee_id: data.employee_id || parseInt(data.employee_id),
    };

    console.log(formData);
    mutation.mutate(formData);
  };

  return (
    <div>
      <SectionAcc
        form={form}
        FirstTitle="پیوست پرونده"
        onSubmit={onSubmit}
        table={<DisciplinaryTable />}
        SecoundTitle="ثبت جدید مورد"
        defaultValues={defaultValues}
        schema={validation}
        formFields={
           <div className="relative">
             {(mutation.isPending || employeesLoading) && (
               <div className="flex justify-center items-center absolute p-4 top-0 left-0 right-0 bottom-0 bg-bgBack/90 z-50">
                 <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                 <span className="mr-2">در حال بارگذاری...</span>
               </div>
             )}
            <div className="flex gap-5">
              <Form.Select
                label="کارمند"
                name="employee_id"
                placeholder="انتخاب کارمند"
                required
              >
                {employee?.data?.map((item, index) => (
                  <Form.SelectItem key={index} value={String(item.id)}>
                    {item.fullName ||
                      item.name ||
                      `${item.firstName} ${item.lastName}`}
                  </Form.SelectItem>
                ))}
              </Form.Select>

              {/* نوع پرونده */}
              <Form.Select
                label="نوع پرونده"
                name="type"
                placeholder="انتخاب نوع پرونده"
                required
              >
                <Form.SelectItem value="تخلف انظباطی">
                  تخلف انضباطی
                </Form.SelectItem>
                <Form.SelectItem value="2">تخلف اخلاقی</Form.SelectItem>
                <Form.SelectItem value="3">تخلف کاری</Form.SelectItem>
                <Form.SelectItem value="4">تخلف امنیتی</Form.SelectItem>
                <Form.SelectItem value="5">سایر</Form.SelectItem>
              </Form.Select>
            </div>
            <div className="flex gap-5">
              <Form.Input
                label="موضوع"
                name="title"
                placeholder="موضوع پرونده را وارد کنید"
                required
              />
              <Form.Date label="تاریخ پرونده" name="case_date" />
            </div>
            <Form.Textarea
              label="شرح"
              name="description"
              placeholder="شرح کامل پرونده را وارد کنید"
              required
            />
          </div>
        }
      />
    </div>
  );
};

export default DisciplinaryList;
