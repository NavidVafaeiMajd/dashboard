import { useEffect } from "react";
import { validation } from "./validation";
import { Form } from "@/components/shared/Form";
import type z from "zod";
import { DataTable } from "@/components/shared/data-table";
import { columns } from "./columns";
import { DESIGNATION_CONSTANTS } from "./const";
import SectionCol from "@/components/shared/section/SectionCol";

const OrganizationalPosition = () => {
  useEffect(() => {
    document.title = "سمت سازمانی";
  }, []);

  const defaultValues = {
    name: "",
    description: "",
    organizationUnit: "",
  };

  const onSubmit = (data: z.infer<typeof validation>) => {
    console.log(data);
  };

  return (
    <>
      <div>
        <SectionCol
          defaultValues={defaultValues}
          schema={validation}
          table={
            <DataTable
              columns={columns}
              data={DESIGNATION_CONSTANTS}
              searchableKeys={["designation", "unit"]}
            />
          }
          onSubmit={onSubmit}
          FirstTitle="ثبت جدید سمت سازمانی"
          SecoundTitle="لیست همه سمت ها"
          formFields={
            <>
              <Form.Select
                label="واحد سازمانی  "
                name="organizationUnit"
                placeholder="انتخاب واحد سازمانی "
                required
              >
                <Form.SelectItem value="1">استحقاقی</Form.SelectItem>
                <Form.SelectItem value="2">استعلاجی</Form.SelectItem>
                <Form.SelectItem value="3">بدون حقوق</Form.SelectItem>
                <Form.SelectItem value="4">سایر</Form.SelectItem>
              </Form.Select>
              <Form.Input
                label="نام سمت سازمانی "
                name="name"
                placeholder="انتخاب نام سمت سازمانی "
                required
              />
              <Form.Textarea
                label="شرح"
                name="description"
                placeholder="شرح "
              />
            </>
          }
        />
      </div>
    </>
  );
};

export default OrganizationalPosition;
