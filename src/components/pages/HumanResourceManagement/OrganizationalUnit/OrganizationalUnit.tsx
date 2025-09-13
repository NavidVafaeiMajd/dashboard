// itsEhsanMM
import type z from "zod";
import { validation } from "./validation";
import { Form } from "@/components/shared/Form";
import { DataTable } from "@/components/shared/data-table";
import { columns } from "./columns";
import { ORGANIZATIONAL_UNIT_DATA } from "./const";
import { useEffect } from "react";
import SectionCol from "@/components/shared/section/SectionCol";

const OrganizationalUnit = () => {
  useEffect(() => {
    document.title = "واحد سازمانی";
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
            data={ORGANIZATIONAL_UNIT_DATA}
            searchableKeys={["name", "unitBoss"]}
          />
        }
      />
    </div>
  );
};

export default OrganizationalUnit;
