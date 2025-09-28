import { DataTable } from "@/components/shared/data-table";
import { Form } from "@/components/shared/Form";
import { z } from "zod";
import { validation } from "./validation";
import { columns } from "./column";
import SectionCol from "@/components/shared/section/SectionCol";
import { usePostRows } from "@/hook/usePostRows";
import { useGetRowsToTable } from "@/hook/useGetRows";
import PostLoad from "@/components/ui/postLoad";

export default function TraningSkills() {
  const defaultValues = {
    name: "",
  };

  const { mutation, form } = usePostRows(
    "skills",
    ["skills"],
    defaultValues,
    validation,
    "مهارت ها",
    true
  );

  const formFields = (
    <>
      {mutation.isPending && <PostLoad/>}
      <Form.Input
        label=" مهارت آموزشی "
        name="name"
        placeholder="  مهارت آموزشی "
        required
      />
    </>
  );

  const fetchSkills = () => useGetRowsToTable("skills");

  const onSubmit = (data: z.infer<typeof validation>) => {
    mutation.mutate(data)
  };
  return (
    <div>
      <SectionCol
        form={form}
        schema={validation}
        defaultValues={defaultValues}
        formFields={formFields}
        onSubmit={onSubmit}
        FirstTitle="ثبت جدید مهارت آموزشی"
        SecoundTitle="لیست همه مهارت آموزشی"
        table={
          <DataTable
            columns={columns}
            queryKey={["skills"]}
            queryFn={fetchSkills}
            searchableKeys={["skillsteching"]}
          />
        }

      />
    </div>
  );
}
