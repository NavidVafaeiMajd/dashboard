import { LearningRecordColumns } from "./column";
import { DataTable } from "@/components/shared/data-table";
import { Form } from "@/components/shared/Form";
import z from "zod";
import { validation } from "./validation";
import SectionAcc from "@/components/shared/section/SectionAcc";
import { usePostRows } from "@/hook/usePostRows";
import { useGetRowsToTable } from "@/hook/useGetRows";
import PostLoad from "@/components/ui/postLoad";
import { useGetData } from "@/hook/useGetData";

export type Skill = {
  id: number;
  name: string;
};
export type Teacher = {
  id: number;
  first_name: string;
  last_name: string;
};


export default function LearningPage() {
  const defaultValues = {
    teacher_id: "",
    skill_id: "",
    cost: "",
    personnel: "",
    start_date: new Date(),
    end_date: new Date(),
    description: "",
  };

  const { mutation, form } = usePostRows(
    "trainings",
    ["trainings"],
    defaultValues,
    validation,
    "اموزش",
    true
  );

  const { data : skills } = useGetData<Skill[]>("skills")
  
  const skillsMapped = skills?.map((item) => ({
    value: String(item.id),
    label: item.name ,
  }));

  const { data : teachers } = useGetData<Teacher[]>("teachers")
  
  const teachersMapped = teachers?.map((item) => ({
    value: String(item.id),
    label: item.first_name + " " + item.last_name,
  }));


  const formFields = (
    <div className="required:">
      {mutation.isPending && <PostLoad/>}
      <div className="flex flex-col md:flex-row gap-5">
        <Form.Select
          label="مشخصات مدرس "
          name="teacher_id"
          placeholder=" مشخصات مدرس "
          required
          options={teachersMapped || []}
        />

        <Form.Select
          label="مهارت آموزشی "
          name="skill_id"
          placeholder="مهارت آموزشی "
          required
          options={skillsMapped || []}
        />

        <Form.Input
          label=" هزینه آموزش"
          name="cost"
          placeholder=" هزینه آموزش"
          required
        />
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <Form.Input
          label="تعداد دانشجو"
          name="personnel"
          placeholder="تعداد دانشجو"
          required
        />
        <Form.Date label="تاریخ شروع" name="start_date" />
        <Form.Date label="تاریخ پایان" name="end_date" />
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <Form.RichText label="شرح" name="description" required />
      </div>
    </div>
  );


  const fetchUsers = () => useGetRowsToTable("trainings");

  const onSubmit = (data: z.infer<typeof validation>) => {
    const payload = {
      ...data,
      cost: Number(data.cost),
      personnel: Number(data.personnel),
      start_date: new Date(data.start_date).toISOString().slice(0,19),
      end_date: new Date(data.end_date).toISOString().slice(0,19),
    };
  
    console.log(payload);
    mutation.mutate(payload);
  };
  
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
