import { LearningRecordColumns } from "./column";
import { DataTable } from "@/components/shared/data-table";
import { LEARNING_RECORDS } from "./const";
import { Form } from "@/components/shared/Form";
import z from "zod";
import { validation } from "./validation";
import SectionAcc from "@/components/shared/section/SectionAcc";

export default function LearningPage() {
  const defaultValues = {
    infoTecher: "",
    skillslearn: "",
    priceLearn: "",
    status: "",
    "entry-time": "",
    "exit-time": "",
    text: "",
  };
  const formFields = (
    <>
      <div className="flex flex-col md:flex-row gap-5">
        <Form.Select
          label="مشخصات مدرس "
          name="infoTecher"
          placeholder=" مشخصات مدرس "
          required
        >
          <Form.SelectItem value="1">تست 1</Form.SelectItem>
          <Form.SelectItem value="2">تست 2</Form.SelectItem>
        </Form.Select>

        <Form.Select
          label="مهارت آموزشی "
          name="skillslearn"
          placeholder="مهارت آموزشی "
          required
        >
          <Form.SelectItem value="1">fronten 1</Form.SelectItem>
          <Form.SelectItem value="2">backend 2</Form.SelectItem>
        </Form.Select>

        <Form.Input
          label=" هزینه آموزش"
          name="priceLearn"
          placeholder=" هزینه آموزش"
          required
        />
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <Form.Select label="پرسنل" name="status" placeholder=" پرسنل" required>
          <Form.SelectItem value="1">اکبر</Form.SelectItem>
          <Form.SelectItem value="2">رضا</Form.SelectItem>
        </Form.Select>
        <Form.Date label="تاریخ شروع" name="entry-time" />
        <Form.Date label="تاریخ پایان" name="exit-time" />
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <Form.RichText label="شرح" name="text" required />
      </div>
    </>
  );
  const onSubmit = (data: z.infer<typeof validation>) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col  px-4">
      <SectionAcc
        schema={validation}
        defaultValues={defaultValues}
        formFields={formFields}
        onSubmit={onSubmit}
        FirstTitle="ثبت جدید آموزش"
        SecoundTitle="لیست همه آموزش"
        table={
          <DataTable
            columns={LearningRecordColumns}
            data={LEARNING_RECORDS}
            searchableKeys={["infoTecher", "skillslearn"]}
          />
        }
      />
    </div>
  );
}
