import { useEffect } from "react";
import { validation } from "./validation";
import type z from "zod";
import { Form } from "@/components/shared/Form";
import { DataTable } from "@/components/shared/data-table";
import { columns } from "./columns";
import SectionCol from "@/components/shared/section/SectionCol";
import { useGetRowsToTable } from "@/hook/useGetRows";
import { usePostRows } from "@/hook/usePostRows";
import { boolean } from "zod";

const LeaveType = () => {
   useEffect(() => {
      document.title = "نوع مرخصی";
   }, []);
   
   const defaultValues= {
    type_name: "",
    days_per_year: "",
    requires_approval:"",
  }
  const { mutation, form } = usePostRows(
    "leave-types",
    ["leave-types"],
    defaultValues,
    validation,
    "مرخصی",
    true
  );

   const fetchLeavesType = () => useGetRowsToTable("leave-types");
  const onSubmit = (data: z.infer<typeof validation>) => {
    const formData = {
      ...data, 
      days_per_year: Number(data.days_per_year),
    }
    console.log("Form Data:", formData);

    mutation.mutate(formData)
  };
   return (
      <div>
       <SectionCol
         form={form}
          defaultValues={defaultValues}
          table={            <DataTable
            columns={columns}
            queryKey={["leave-types"]}
            queryFn={fetchLeavesType}
            searchableKeys={["type_name"]}
         />}
          onSubmit={(onSubmit)}
          FirstTitle=" ثبت جدید نوع مرخصی "
          SecoundTitle="  لیست همه انواع مرخصی ها "
          schema={validation}
          formFields={
             <>
              <Form.Input
                label="نوع مرخصی"
                name="type_name"
                placeholder="نوع مرخصی"
                required
                />
              <Form.Input
                label="روزها در سال"
                name="days_per_year"
                placeholder="روزها در سال"
                required
              />
              <Form.Select
                label="وضعیت"
                name="requires_approval"
                placeholder="انتخاب وضعیت"
                options={[{label : "اضافه بر سازمان" , value : "اضافه بر سازمان"} , {label : "مرخصی سازمانی" , value : "سازمانی"}]}
                required
              />

            </>
          }
         />
      </div>
   );
};

export default LeaveType;
