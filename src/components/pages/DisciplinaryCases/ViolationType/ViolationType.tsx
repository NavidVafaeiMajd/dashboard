import { useEffect } from "react";
import { validation } from "./validation";
import type z from "zod";
import { DataTable } from "@/components/shared/data-table";
import { columns } from "./columns";
import SectionCol from "@/components/shared/section/SectionCol";
import { Form } from "@/components/shared/Form";
import { usePostRows } from "@/hook/usePostRows";
import { useGetRowsToTable } from "@/hook/useGetRows";
import PostLoad from "@/components/ui/postLoad";

const ViolationType = () => {
  useEffect(() => {
    document.title = "نوع تخلف";
  }, []);
  const defaultValues = {
    name: "",
  };

  const { mutation, form } = usePostRows(
    "disciplinary-types",
    ["disciplinary-types"],
    defaultValues,
    validation,
    "نوع تخلف",
    true
  );

  const onSubmit = (data: z.infer<typeof validation>) => {
    console.log(data);
    mutation.mutate(data)
  };

  const fetchDisciplinary = () => useGetRowsToTable("disciplinary-types");


  return (
    <div>
      <SectionCol
        form={form}
        defaultValues={defaultValues}
        table={
          <DataTable
            columns={columns}
            queryKey={["disciplinary-types"]}
            queryFn={fetchDisciplinary}
            searchableKeys={["name"]}
          />
        }
        onSubmit={onSubmit}
        FirstTitle="ثبت جدید نوع تخلف"
        SecoundTitle=" لیست همه انواع تخلف"
        schema={validation}
        formFields={
          <div className="relative">
            {mutation.isPending && <PostLoad />}
            <Form.Input
              label="نوع پرونده"
              name="name"
              required
              placeholder="نوع پرونده را انتخاب کنید"
            ></Form.Input>
          </div>
        }
      />
    </div>
  );
};

export default ViolationType;
