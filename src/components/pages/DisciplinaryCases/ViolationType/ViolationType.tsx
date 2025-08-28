import { useEffect } from "react";
import { validation } from "./validation";
import type z from "zod";
import { DataTable } from "@/components/shared/data-table";
import { columns } from "./columns";
import { VIOLATION_TYPE_CONSTANTS } from "./const";
import SectionCol from "@/components/shared/section/SectionCol";
import { Form } from "@/components/shared/Form";

const ViolationType = () => {
  useEffect(() => {
    document.title = "نوع تخلف";
  }, []);
  const defaultValues = {
    name: "",
  };

  const onSubmit = (data: z.infer<typeof validation>) => {
    console.log(data);
  };

  return (
    <div>
      <SectionCol
        defaultValues={defaultValues}
        table={
          <DataTable
            columns={columns}
            data={VIOLATION_TYPE_CONSTANTS}
            searchableKeys={["name"]}
          />
        }
        onSubmit={onSubmit}
        FirstTitle="ثبت جدید نوع تخلف"
        SecoundTitle=" لیست همه انواع تخلف"
        schema={validation}
        formFields={
          <>
            <Form.Input
              label="نوع پرونده"
              name="name"
              required
              placeholder="نوع پرونده را انتخاب کنید"
            ></Form.Input>
          </>
        }
      />
    </div>
  );
};

export default ViolationType;
