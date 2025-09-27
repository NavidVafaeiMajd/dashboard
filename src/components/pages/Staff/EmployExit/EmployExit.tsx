import { useEffect } from "react";
import Table from "./Table";
import SectionAccImg from "@/components/shared/section/SectionAccImg";
import { Form } from "@/components/shared/Form";
import z from "zod";
import { validation } from "./validation";
import { usePostRows } from "@/hook/usePostRows";
import { useEmployees } from "@/hook/useEmployees";
import { useSeparationTypes } from "@/hook/useSeparationTypes";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GoPlus } from "react-icons/go";

const EmployExit: React.FC = () => {
  const title = "انفصال از خدمت";
  useEffect(() => {
    document.title = title;
  }, []);

  const defaultValues = {
    employee_id: "",
    separation_date: new Date(),
    separation_letter: "",
    separation_type_id: "",
    contract_file: null,
  };

  const { data: employees, isPending: employeesLoading } = useEmployees();
  const { data: separationTypes, isPending: separationTypesLoading } = useSeparationTypes();

  const employeesMapped = employees?.data?.map((item) => ({
    value: String(item.id),
    label: item.fullName,
  }));


  const separationTypesMapped = separationTypes?.data?.map((item) => ({
    value: String(item.id),
    label: item.name || item.title,
  }));

  const { mutation, form } = usePostRows(
    "employee-separations",
    ["employee-separations"],
    defaultValues,
    validation,
    "انفصال از خدمت",
    true
  );

  const formFields = (
    <div className="relative">
      {mutation.isPending && (employeesLoading || separationTypesLoading) && (
        <div className="flex justify-center items-center absolute p-4 top-0 left-0 right-0 bottom-0 bg-bgBack/90 z-50">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          <span className="mr-2">در حال ارسال اطلاعات...</span>
        </div>
      )}
      
      <div className="flex flex-col gap-5">
        <Form.Select
          name="employee_id"
          label="کارمند برای انفصال"
          placeholder="انتخاب کارمند"
          options={employeesMapped || []}
          required
        />
        
        <Form.Date
          name="separation_date"
          label="تاریخ انفصال کارمند"
        />
        
        <Form.Select
          name="separation_type_id"
          label="نوع انفصال"
          placeholder="انتخاب نوع انفصال"
          options={separationTypesMapped || []}
          required
        />
        
        <Form.Textarea
          name="separation_letter"
          label="متن نامه (اختیاری)"
          placeholder="متن نامه انفصال را اینجا وارد کنید..."
        />
      </div>
    </div>
  );

  const onSubmit = (data: z.infer<typeof validation>) => {
    const formData = new FormData();
    
    formData.append("employee_id", data.employee_id);
    formData.append("separation_date", data.separation_date.toISOString().slice(0, 19));
    formData.append("separation_type_id", data.separation_type_id);
    formData.append("separation_letter", data.separation_letter || "");
    
    if (data.contract_file) {
      formData.append("contract_file", data.contract_file);
    }
    
    mutation.mutate(formData);
  };

  return (
    <>
      <SectionAccImg
        form={form}
        formFields={formFields}
        file={
          <>
            <Form.Image name="contract_file" label="قرارداد انفصال" />
          </>
        }
        extraActions={
          <Button asChild className="bg-greenDark text-white">
            <Link to="/exit-type" className="flex items-center gap-2">
              <GoPlus className="w-4 h-4" />
              نوع انفصال
            </Link>
          </Button>
        }
        onSubmit={onSubmit}
        table={<Table />}
        FirstTitle="ثبت جدید انفصال از خدمت"
        SecoundTitle="لیست همه انفصال از خدمت"
        FileTitle="قرارداد انفصال"
 
      />
    </>
  );
};

export default EmployExit;