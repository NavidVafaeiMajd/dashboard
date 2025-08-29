import { Form } from "@/components/shared/Form";
import { validation } from "./validation";
import { columns } from "./column";
import { DataTable } from "@/components/shared/data-table";
import { goalType } from "./const";
import SectionCol from "@/components/shared/section/SectionCol";
import type z from "zod";

const GoalType = () => {
  const OnSubmit = (data: z.infer<typeof validation>) => {
    console.log(data);
  };

  const defaultValues = {
    purposeType: "",
  };

  return (
    <div>
      <SectionCol
        defaultValues={defaultValues}
        schema={validation}
        formFields={
          <>
            <Form.Input
              name="purposeType"
              label="انواع اهداف"
              placeholder="انواع اهداف"
              required
            />
          </>
        }
           onSubmit={OnSubmit}
           FirstTitle="ثبت جدید انواع اهداف"
           SecoundTitle="لیست همه انواع اهداف"
           table={
            <DataTable
          columns={columns}
          data={goalType}
          searchableKeys={["purposeType"]}
        />
           }
      />
    </div>
  );
};
export default GoalType;
