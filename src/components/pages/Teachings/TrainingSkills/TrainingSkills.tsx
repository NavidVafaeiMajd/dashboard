import { DataTable } from "@/components/shared/data-table";
import { Form } from "@/components/shared/Form";
import { z } from "zod";
import { validation } from "./validation";
import { columns } from "./column";
import { SKILLS_CREAT } from "./const";
import SectionCol from "@/components/shared/section/SectionCol";

export default function TraningSkills() {
  const defaultValues = {
    skillsteching: "",
  };
  const formFields = (
    <>
      <Form.Input
        label=" مهارت آموزشی "
        name="skillsteching"
        placeholder="  مهارت آموزشی "
        required
      />
    </>
  );

  const onSubmit = (data: z.infer<typeof validation>) => {
    console.log(data);
  };
  return (
    <div>
      <SectionCol
        schema={validation}
        defaultValues={defaultValues}
        formFields={formFields}
        onSubmit={onSubmit}
        FirstTitle="ثبت جدید مهارت آموزشی"
        SecoundTitle="لیست همه مهارت آموزشی"
        table={
          <DataTable
            columns={columns}
            data={SKILLS_CREAT}
            searchableKeys={["skillsteching"]}
          />
        }

      />
    </div>
  );
}
