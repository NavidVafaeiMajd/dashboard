import { DataTable } from "@/components/shared/data-table";
import { columns } from "./column";
import { Form } from "@/components/shared/Form";
import { validation } from "./validation";
import SectionAcc from "@/components/shared/section/SectionAcc";
import { useGetRowsToTable } from "@/hook/useGetRows";
import { usePostRows } from "@/hook/usePostRows";
import { useGetData } from "@/hook/useGetData";
import type z from "zod";
import PostLoad from "@/components/ui/postLoad";

const defaultValues = {
  description: "",
  start_date: new Date(),
  end_date: new Date(),
  goal_types_id: "",
  title: "",
  goal_rating:0,   // string
  goal_progress:0, // string
};

type TrackGoals = {
  id: number;
  name: string;
};
const TrackGoals = () => {
  const { mutation, form } = usePostRows(
    "okr-goals",
    ["okr-goals"],
    defaultValues,
    validation,
    "پرسنل",
    true
  );

  const fetchOkrGoals = () => useGetRowsToTable("okr-goals");

  const { data: trackGoals } = useGetData<TrackGoals[]>("goal-types");

  const trackGoalsMapped = trackGoals?.map((item) => ({
    value: String(item.id),
    label: item.name, //
  }));

  const onSubmit = (data: z.infer<typeof validation>) => {
    const payload = {
      ...data,
      start_date: new Date(data.start_date).toISOString().slice(0, 19), 
      end_date: new Date(data.end_date).toISOString().slice(0, 19),
    };
  
    console.log(payload)
    mutation.mutate(payload);
  };

  return (
    <div className="flex flex-col gap-y-5">
      <SectionAcc
        form={form}
        defaultValues={defaultValues}
        schema={validation}
        formFields={
          <div className="relative">
            {mutation.isPending && <PostLoad />}
            <div className="flex justify-between items-center gap-x-5">
              <Form.Select
                label="انواع هدف"
                name="goal_types_id"
                placeholder="انواع هدف"
                options={trackGoalsMapped || []}
                required
              />

              <Form.Input
                label="موضوع"
                name="title"
                required
                placeholder="موضوع"
              />

              <Form.Input
                label="امتیاز کلی"
                name="goal_rating"
                placeholder="امتیاز کلی"
                required
              />
            </div>
            <div className="flex items-center gap-x-5">
              <Form.Date
                label="تاریخ شروع"
                name="start_date"
                className="w-100"
              />
              <Form.Date
                label="تاریخ پایان"
                name="end_date"
                className="w-100"
              />
              <Form.Input
                label="درصد پیشرفت  "
                name="goal_progress"
                placeholder=" درصد پیشرفت  "
                required
              />
            </div>

            <Form.RichText label="شرح" name="description" />
          </div>
        }
        onSubmit={onSubmit}
        FirstTitle="ثبت جدید"
        SecoundTitle="لیست همه هدف ها"
        table={
          <DataTable
            columns={columns}
            queryKey={["okr-goals"]}
            queryFn={fetchOkrGoals}
            searchableKeys={[
              "typeOfGoal",
              "title",
              "startDate",
              "endDate",
              "totalRating",
              "progress",
            ]}
          />
        }
      />
    </div>
  );
};
export default TrackGoals;
