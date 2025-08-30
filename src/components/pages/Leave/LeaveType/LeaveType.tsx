import { useEffect } from "react";
import { validation } from "./validation";
import type z from "zod";
import { Form } from "@/components/shared/Form";
import { DataTable } from "@/components/shared/data-table";
import { columns } from "./columns";
import { LEAVE_TYPE_CONSTANTS } from "./const";
import SectionCol from "@/components/shared/section/SectionCol";

const LeaveType = () => {
   useEffect(() => {
      document.title = "نوع مرخصی";
   }, []);
   
   const defaultValues= {
      name: "",
      daysPerYear: "",
      requiresApproval: "",
   }

  const onSubmit = (data: z.infer<typeof validation>) => {
    console.log("Form Data:", data);
  };
   return (
      <div>
         <SectionCol
          defaultValues={defaultValues}
          table={            <DataTable
            columns={columns}
            data={LEAVE_TYPE_CONSTANTS}
            searchableKeys={["name"]}
         />}
          onSubmit={(onSubmit)}
          FirstTitle=" ثبت جدید نوع مرخصی "
          SecoundTitle="  لیست همه انواع مرخصی ها "
          schema={validation}
          formFields={
             <>
              <Form.Input
                label="نوع مرخصی"
                name="name"
                placeholder="نوع مرخصی"
                required
                />
              <Form.Input
                label="روزها در سال"
                name="daysPerYear"
                placeholder="روزها در سال"
                required
              />
              <Form.Select
                label="نیاز به تایید دارد"
                name="requiresApproval"
                placeholder="انتخاب نیاز به تایید دارد"
                required
              >
                <Form.SelectItem value="1">بله</Form.SelectItem>
                <Form.SelectItem value="2">خیر</Form.SelectItem>
              </Form.Select>

            </>
          }
         />
      </div>
   );
};

export default LeaveType;
