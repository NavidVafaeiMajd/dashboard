import { useEffect } from "react";
import { validation } from "./validation";
import { Form } from "@/components/shared/Form";
import type z from "zod";
import { DataTable } from "@/components/shared/data-table";
import { columns } from "./columns";
import SectionCol from "@/components/shared/section/SectionCol";
import { usePostRows } from "@/hook/usePostRows";
import { useGetRowsToTable } from "@/hook/useGetRows";
import { useDepartments } from "@/hook/useDepartments";

const defaultValues = {
  title: "",
  description: "",
  department_id: "",
};

const OrganizationalPosition = () => {
  useEffect(() => {
    document.title = "سمت سازمانی";
  }, []);

  const { data: departments, isPending: departmentsLoading } = useDepartments();

  const departmentsMapped = departments?.data?.map((item) => ({
    value: String(item.id),
    label: item.name,
  }));

  const { mutation, form } = usePostRows(
    "designations",
    ["designations"],
    defaultValues,
    validation,
    "سمت سازمانی",
    true
  );

  const fetchDisciplinary = () => useGetRowsToTable("designations");

  const onSubmit = (data: z.infer<typeof validation>) => {
    mutation.mutate(data);
  };

  return (
    <>
      <div>
        <SectionCol
          defaultValues={defaultValues}
          schema={validation}
          form={form}
          table={
            <DataTable
              columns={columns}
              queryKey={["designations"]}
              queryFn={fetchDisciplinary}
              searchableKeys={["designation", "unit"]}
            />
          }
          onSubmit={onSubmit}
          FirstTitle="ثبت جدید سمت سازمانی"
          SecoundTitle="لیست همه سمت ها"
          formFields={
            <div className="relative">
              {(mutation.isPending || departmentsLoading) && (
                <div className="flex justify-center items-center absolute p-4 top-0 left-0 right-0 bottom-0 bg-bgBack/90 z-50">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                  <span className="mr-2">در حال بارگذاری...</span>
                </div>
              )}
              <Form.Select
                label="واحد سازمانی  "
                name="department_id"
                placeholder="انتخاب واحد سازمانی "
                options={departmentsMapped || []}
                required
              />
              <Form.Input
                label="نام سمت سازمانی "
                name="title"
                placeholder="انتخاب نام سمت سازمانی "
                required
              />
              <Form.Textarea
                label="شرح"
                name="description"
                placeholder="شرح "
              />
            </div>
          }
        />
      </div>
    </>
  );
};

export default OrganizationalPosition;
