import { Form } from "@/components/shared/Form";
import { validation } from "./validation";
import { columns } from "./column";
import { DataTable } from "@/components/shared/data-table";
import SectionCol from "@/components/shared/section/SectionCol";
import type z from "zod";
import { useGetRowsToTable } from "@/hook/useGetRows";
import { usePostRows } from "@/hook/usePostRows";
import PostLoad from "@/components/ui/postLoad";

const defaultValues = {
  name: "",
};


const GoalType = () => {
  const { mutation, form } = usePostRows(
    "goal-types",
    ["goal-types"],
    defaultValues,
    validation,
    "پرسنل",
    true
  );

  const fetchGoalTypes = () => useGetRowsToTable("goal-types");

  const OnSubmit = (data: z.infer<typeof validation>) => {
    mutation.mutate(data)
  };


  return (
    <div>
      <SectionCol
        form={form}
        defaultValues={defaultValues}
        schema={validation}
        formFields={
          <div className="relative">
            {mutation.isPending && <PostLoad/>}
            <Form.Input
              name="name"
              label="انواع اهداف"
              placeholder="انواع اهداف"
              required
            />
          </div>
        }
           onSubmit={OnSubmit}
           FirstTitle="ثبت جدید انواع اهداف"
           SecoundTitle="لیست همه انواع اهداف"
           table={
            <DataTable
          columns={columns}
          queryKey={["goal-types"]}
          queryFn={fetchGoalTypes}
          searchableKeys={["purposeType"]}
        />
           }
      />
    </div>
  );
};
export default GoalType;
