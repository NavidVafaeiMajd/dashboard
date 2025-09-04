import { Form } from "@/components/shared/Form";
import type z from "zod";
import { validation } from "./validation";
import { DataTable } from "@/components/shared/data-table";
import { columns } from "./column";
import { employeeData } from "./const";
import SectionAcc from "@/components/shared/section/SectionAcc";

const EmployeeRating = () => {
  const defaultValues = {
    date: new Date(),
    employee: "",
    name: "",
    tecnicalTest: 1,
    organizationalTest: 1,
  };

  const onSubmit = (data: z.infer<typeof validation>) => {
    console.log(data);
  };
  return (
    <div className="space-y-5">
      <SectionAcc
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
                className="w-100"
              >
                <Form.SelectItem value="1">item 1</Form.SelectItem>
                <Form.SelectItem value="2">item 2</Form.SelectItem>
              </Form.Select>

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
            data={employeeData}
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
