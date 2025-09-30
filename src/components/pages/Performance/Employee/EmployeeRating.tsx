import { Form } from "@/components/shared/Form";
import type z from "zod";
import { validation } from "./validation";
import { DataTable } from "@/components/shared/data-table";
import { columns } from "./column";
import SectionAcc from "@/components/shared/section/SectionAcc";
import { usePostRows } from "@/hook/usePostRows";
import { useGetRowsToTable } from "@/hook/useGetRows";
import { useEmployees } from "@/hook/useEmployees";
import { useGetData } from "@/hook/useGetData";
type Technical = {
  id: string;
  name: string;
};
const EmployeeRating = () => {
  const defaultValues = {
    date: new Date(),
    employee: "",
    name: "",

    technicalRatings: {} as Record<string, number>,
    behavioralRatings: {} as Record<string, number>,
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

  const { data: technical } = useGetData<Technical[]>("indicators/technical");
  const { data: behavioral } = useGetData<Technical[]>("indicators/behavioral");



  const { data: employee, isPending: employeesLoading } = useEmployees();

  const mapped = employee?.data?.map((item) => ({
    value: String(item.id),
    label: item.fullName,
  }));

  const onSubmit = (data: z.infer<typeof validation>) => {
    const toYMD = (d: Date) => {
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const day = String(d.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    };

    const payload = {
      title: data.name,
      employee_id: Number(data.employee),
      month: toYMD(new Date(data.date)),
      details: {
        ...(data as any).technicalRatings,
        ...(data as any).behavioralRatings,
      } as Record<string, number>,
    };

    console.log(payload as any)

    mutation.mutate(payload as any);
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
                options={mapped || []}
                className="w-100"
              />
              <Form.Date label="انتخاب ماه" name="date" className="w-100" />
            </div>

            <div className="flex gap-x-5 flex-col md:flex-row md:justify-between">
              <div className="w-full">
                <div className="bg-gray-300 font-medium w-full px-2 py-4">
                  <span className="text-lg">شایستگی های فنی</span>
                </div>

                <table className="w-full ">
                  <thead>
                    <tr className="bg-green-200">
                      <th className="border">نشانگر</th>
                      <th className="border">
                        تنظیم اندیکاتور
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {technical?.map((item) => (
                      <tr key={item.id} className="border-b ">
                        <td className=" text-center m-0! p-0!">{item.name}</td>
                        <td className=" text-center m-0! p-0! ">
                          <Form.StarRate className="flex justify-center! items-center!"  name={`technicalRatings.${item.id}` as any} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="w-full">
                <div className="bg-gray-300 font-medium w-full px-2 py-4">
                  <span className="text-lg">شایستگی های سازمانی</span>
                </div>

                <table className="w-full ">
                  <thead>
                    <tr className="bg-green-200">
                      <th className="border">نشانگر</th>
                      <th className="border">
                        تنظیم اندیکاتور
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {behavioral?.map((item) => (
                      <tr key={item.id} className="border-b ">
                        <td className=" text-center m-0! p-0!">{item.name}</td>
                        <td className=" text-center m-0! p-0! ">
                          <Form.StarRate className="flex justify-center! items-center!"  name={`behavioralRatings.${item.id}` as any} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
