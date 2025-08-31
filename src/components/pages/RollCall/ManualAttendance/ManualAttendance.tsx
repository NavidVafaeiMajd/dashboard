// itsEhsanMM
import type z from "zod";
import { Form } from "@/components/shared/Form";
import { DataTable } from "@/components/shared/data-table";
import { useEffect } from "react";
import { validation } from "./validation";
import { columns } from "./column";
import { MANUAL_ATTENDANCE } from "./const";
import SectionCol from "@/components/shared/section/SectionCol";

const ManualAttendance = () => {
  useEffect(() => {
    document.title = "ثبت تردد دستی پرسنل";
  }, []);


  const defaultValues = {
    date: new Date(),
    employee: "",
  };
  const formFields = (
    <>
      <Form.Date name="date" label="تاریخ" />
      <Form.Select name="employee" label="کارمند" required placeholder="انتخاب کارمند">
        <Form.SelectItem value="1">کارمند 1</Form.SelectItem>
        <Form.SelectItem value="2">کارمند 2</Form.SelectItem>
      </Form.Select>
    </>
  );

  const onSubmit = (data: z.infer<typeof validation>) => {
    console.log(data);
  };

  return (
    <div>
      <SectionCol
      defaultValues={defaultValues}
      schema={validation}
      formFields={formFields}
      onSubmit={onSubmit}
      table={<DataTable columns={columns} data={MANUAL_ATTENDANCE} searchableKeys={["name", "unitBoss"]} />}
      FirstTitle="فیلتر کردن حضور و غیاب"
      SecoundTitle="نمایش حضور و غیاب"
      />

    </div>
  );
};

export default ManualAttendance;
