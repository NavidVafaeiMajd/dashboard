// itsEhsanMM
import type z from "zod";
import { Form } from "@/components/shared/Form";
import { DataTable } from "@/components/shared/data-table";
import { useEffect } from "react";
import { validation } from "./validation";
import { columns } from "./column";
import SectionCol from "@/components/shared/section/SectionCol";
import { usePostRows } from "@/hook/usePostRows";
import { useGetRowsToTable } from "@/hook/useGetRows";
import { useEmployees } from "@/hook/useEmployees";

const ManualAttendance = () => {
  useEffect(() => {
    document.title = "ثبت تردد دستی پرسنل";
  }, []);

  const defaultValues = {
    date: new Date(),
    employee_id: "",
    check_in: "08:00",
    check_out: "17:00",
    notes : ""
  };


  const { mutation, form } = usePostRows(
    "attendances",
    ["attendances"],
    defaultValues,
    validation,
    "تردد دستی",
    true
  );
  
  const { data: employee } = useEmployees();

  const mapped = employee?.data?.map((item) => ({
    value: String(item.id),
    label: item.fullName,
  }));

  const formFields = (
    <>
      <Form.Date name="date" label="تاریخ" />

      <Form.Select
        name="employee_id"
        label="کارمند"
        options={mapped || []}
        required
      />
      <Form.TimePicker label="زمان ورود" name="check_in" />
      <Form.TimePicker label="زمان خروج" name="check_out" />
      <Form.Textarea label="یاداشت" name="notes" />
    </>
  );

  const fetchAttendances = () => useGetRowsToTable("attendances");

  const onSubmit = (data: z.infer<typeof validation>) => {
    const formData = {
      ...data,
      date : data.date.toISOString().slice(0, 19)
    }
    console.log(formData);
    mutation.mutate(formData)
  };

  return (
    <div>
      <SectionCol
        form={form}
        defaultValues={defaultValues}
        schema={validation}
        formFields={formFields}
        onSubmit={onSubmit}
        table={
          <DataTable
            columns={columns}
            queryKey={["attendances"]}
            queryFn={fetchAttendances}
            searchableKeys={["name", "unitBoss"]}
          />
        }
        FirstTitle="فیلتر کردن حضور و غیاب"
        SecoundTitle="نمایش حضور و غیاب"
      />
    </div>
  );
};

export default ManualAttendance;
