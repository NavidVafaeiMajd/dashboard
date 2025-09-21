// itsEhsanMM
import type z from "zod";
import { validation } from "./validation";
import { Form } from "@/components/shared/Form";
import { DataTable } from "@/components/shared/data-table";
import { columns } from "./columns";
import { useEffect } from "react";
import SectionCol from "@/components/shared/section/SectionCol";
import { useGetRowsToTable } from "@/hook/useGetRows";
import { usePostRows } from "@/hook/usePostRows";

const OrganizationalUnit = () => {
  useEffect(() => {
    document.title = "واحد سازمانی";
  }, []);

  const defaultValues = {
    name: "",
  };

  const { mutation, form } = usePostRows(
    "departments",
    ["departments"],
    defaultValues,
    validation,
    "واحد سازمانی",
    true
  );

  const fetchDepartments = () => useGetRowsToTable("departments");


  const onSubmit = (data: z.infer<typeof validation>) => {
    mutation.mutate(data)
     console.log(data);
  };

  return (
    <div>
      <SectionCol
        form={form}
        defaultValues={defaultValues}
        schema={validation}
           formFields={<>
           <Form.Input name="name" label="نام" required placeholder="نام واحد سازمانی"/>
           </>}
        FirstTitle="ثبت جدید واحد سازمانی"
        SecoundTitle="لیست همه واحدها"
        onSubmit={onSubmit}
        table={
          <DataTable
          columns={columns}
          queryKey={["departments"]}
          queryFn={fetchDepartments}
            searchableKeys={["name", "unitBoss"]}
          />
        }
      />
    </div>
  );
};

export default OrganizationalUnit;
