import { LearningRecordColumns } from "./column";
import { DataTable } from "@/components/shared/data-table";
import { Form } from "@/components/shared/Form";
import z from "zod";
import { validation } from "./validation";
import SectionAcc from "@/components/shared/section/SectionAcc";
import { useEmployees } from "@/hook/useEmployees";
import { usePostRows } from "@/hook/usePostRows";
import { useGetRowsToTable } from "@/hook/useGetRows";
import SkeletonLoading from "@/components/ui/skeleton";
import PostLoad from "@/components/ui/postLoad";

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

  const { data: employee, isPending: employeesLoading } = useEmployees();

  const mapped = employee?.data?.map((item) => ({
    value: String(item.id),
    label: item.fullName,
  }));

  const { mutation, form } = usePostRows(
    "trainings",
    ["trainings"],
    defaultValues,
    validation,
    "پرسنل",
    true
  );

  const formFields = (
    <div className="required:">
      {mutation.isPending && <PostLoad/>}
      <div className="flex flex-col md:flex-row gap-5">
        <Form.Select
          label="مشخصات مدرس "
          name="infoTecher"
          placeholder=" مشخصات مدرس "
          required
          options={[{ label: "test", value: "test" }]}
        />

        <Form.Select
          label="مهارت آموزشی "
          name="skillslearn"
          placeholder="مهارت آموزشی "
          required
          options={[{ label: "test", value: "test" }]}
        />

        <Form.Input
          label=" هزینه آموزش"
          name="priceLearn"
          placeholder=" هزینه آموزش"
          required
        />
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <Form.Select
          label="کارمند"
          name="employee_id"
          placeholder="انتخاب کارمند"
          options={mapped || []}
          required
        />
        <Form.Date label="تاریخ شروع" name="entry-time" />
        <Form.Date label="تاریخ پایان" name="exit-time" />
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <Form.RichText label="شرح" name="text" required />
      </div>
    </div>
  );


  const fetchUsers = () => useGetRowsToTable("trainings");

  const onSubmit = (data: z.infer<typeof validation>) => {
    console.log(data);
  };

  if(employeesLoading ) return (<SkeletonLoading/>)

  return (
    <div className="flex flex-col  px-4">
      <SectionAcc
        form={form}
        schema={validation}
        defaultValues={defaultValues}
        formFields={formFields}
        onSubmit={onSubmit}
        FirstTitle="ثبت جدید آموزش"
        SecoundTitle="لیست همه آموزش"
        table={
          <DataTable
            columns={LearningRecordColumns}
            queryKey={["trainings"]}
            queryFn={fetchUsers}
            searchableKeys={["infoTecher", "skillslearn"]}
          />
        }
      />
    </div>
  );
}
