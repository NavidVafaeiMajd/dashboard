import { Form } from "@/components/shared/Form";
import type z from "zod";
import { validation } from "./validation";
import { DataTable } from "@/components/shared/data-table";
import { columns } from "./column";
import SectionAcc from "@/components/shared/section/SectionAcc";
import { usePostRows } from "@/hook/usePostRows";
import { useGetRowsToTable } from "@/hook/useGetRows";
import { useEmployees } from "@/hook/useEmployees";

const EmployeeRating = () => {
  const defaultValues = {
    date: new Date(),
    employee: "",
    name: "",
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

  const fetchEmployeeRatings = () => useGetRowsToTable("employee-ratings");


  const { data: employee, isPending: employeesLoading } = useEmployees();

  const mapped = employee?.data?.map((item) => ({
    value: String(item.id),
    label: item.fullName,
  }));


  const onSubmit = (data: z.infer<typeof validation>) => {
    console.log(data);
  };
  return (
    <div className="space-y-5">
      <SectionAcc
        form={form}
        defaultValues={defaultValues}
        schema={validation}
        formFields={
          <>
            <div className="flex items-center justify-between gap-x-5">
              <Form.Input
                label="عنوان"
                name="name"
                className="w-100"
                required
              />
              <Form.Select
                label="کارمند"
                name="employee"
                required
                options={mapped||[]}
                className="w-100"
              />
              <Form.Date label="انتخاب ماه" name="date" className="w-100" />
            </div>

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
                  <Form.StarRate name="tecnicalTest"  />
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
                  <Form.StarRate name="organizationalTest"  />
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
            queryFn={fetchEmployeeRatings}
            searchableKeys={[
              "title",
              "position",
              "totalRating",
              "addedBy",
              "createdAt",
            ]}
          />
        }
        FirstTitle="ارزیابی عملکرد را ارائه دهید"
        SecoundTitle="لیست همه ارزیابی عملکرد"
      />
    </div>
  );
};
export default EmployeeRating;
