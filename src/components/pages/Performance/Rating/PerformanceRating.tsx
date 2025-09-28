import { Form } from "@/components/shared/Form";
import type z from "zod";
import { validation } from "./validation";
import { DataTable } from "@/components/shared/data-table";
import { columns } from "./column";
import { performanceData } from "./const";
import SectionAcc from "@/components/shared/section/SectionAcc";
import { usePostRows } from "@/hook/usePostRows";
import { useGetRowsToTable } from "@/hook/useGetRows";
import { useDesignationsts } from "@/hook/useDesignationsts";

const PerformanceRating = () => {
  const defaultValues = {
    name: "",
    designation_id: "",
    tecnicalTest: 1,
    organizationalTest: 1,
  };

  const { mutation, form } = usePostRows(
    "employee-ratings",
    ["employee-ratings"],
    defaultValues,
    validation,
    "پرسنل",
    true
  );

  const fetchUsers = () => useGetRowsToTable("employee-ratings");

  const { data: designationsts, isPending: designationstsLoading } =
    useDesignationsts();

  const designationstsMapped = designationsts?.data?.map((item) => ({
    value: String(item.id),
    label: item.title,
  }));

  const onSubmit = (data: z.infer<typeof validation>) => {
    console.log(data);
  };
  return (
    <div>
      <SectionAcc
        form={form}
        FirstTitle="تنظیم جدید شاخص عملکرد"
        SecoundTitle="لیست همه شاخص های عملکرد"
        defaultValues={defaultValues}
        schema={validation}
        formFields={
          <>
            <Form.Input label="عنوان" name="name" required />
            <Form.Select
              name="designation_id"
              label="سمت سازمانی"
              placeholder="سمت سازمانی"
              options={designationstsMapped || []}
              required
            />

            <div className="flex gap-x-5 flex-col md:flex-row md:justify-between">
              <div className="w-full">
                <div className="bg-gray-300 font-medium w-full px-2 py-4">
                  <span className="text-lg">شایستگی های فنی</span>
                </div>
                <div className="bg-green-200 px-2 py-4 w-full flex justify-between">
                  <span className="w-full text-lg">نشانگر</span>
                  <span className="w-full text-lg">تنظیم اندیکاتور</span>
                </div>

                <div className="flex justify-between items-center border-b">
                  <span className="text-lg w-full">تست فنی 1</span>
                  <Form.StarRate name="tecnicalTest" />
                </div>
              </div>
              <div className="w-full">
                <div className="bg-gray-300 font-medium w-full px-2 py-4">
                  <span className="text-lg">شایستگی های سازمانی</span>
                </div>
                <div className="bg-green-200 px-2 py-4 w-full flex justify-between">
                  <span className="w-full text-lg">نشانگر</span>
                  <span className="w-full text-lg">تنظیم اندیکاتور</span>
                </div>

                <div className="flex justify-between items-center border-b">
                  <span className="text-lg w-full">تست سازمانی 1</span>
                  <Form.StarRate name="organizationalTest" />
                </div>
              </div>
            </div>
          </>
        }
        onSubmit={onSubmit}
        table={
          <DataTable
            columns={columns}
            queryKey={["employee-ratings"]}
            queryFn={fetchUsers}
            searchableKeys={[
              "title",
              "position",
              "totalRating",
              "addedBy",
              "createdAt",
            ]}
          />
        }
      />
    </div>
  );
};
export default PerformanceRating;
