import { DataTable } from "@/components/shared/data-table";
import { columns } from "./column";
import { Form } from "@/components/shared/Form";
import { validation } from "./validation";
import SectionAcc from "@/components/shared/section/SectionAcc";
import { useGetRowsToTable } from "@/hook/useGetRows";
import { usePostRows } from "@/hook/usePostRows";

const TrackGoals = () => {
  const defaultValues = {
    description: "",
    endDate: new Date(),
    startDate: new Date(),
    purpose: "",
    purposeType: "",
    subject: "",
  };

  const { mutation, form } = usePostRows(
    "okr-goals",
    ["okr-goals"],
    defaultValues,
    validation,
    "پرسنل",
    true
  );

  const fetchOkrGoals = () => useGetRowsToTable("okr-goals");

  const onSubmit = () => {};

  return (
    <div className="flex flex-col gap-y-5">
      <SectionAcc
        form={form}
        defaultValues={defaultValues}
        schema={validation}
        formFields={
          <>
            <div className="flex justify-between items-center gap-x-5">
              <Form.Input
                label="انواع هدف"
                name="purposeType"
                placeholder="انواع هدف"
                required
              />

              <Form.Input
                label="موضوع"
                name="subject"
                required
                placeholder="موضوع"
              />

              <Form.Input
                label="دستیابی به هدف"
                name="purpose"
                placeholder="دستیابی به هدف"
                required
              />
            </div>
            <div className="flex items-center gap-x-5">
              <Form.Date
                label="تاریخ شروع"
                name="startDate"
                className="w-100"
              />
              <Form.Date label="تاریخ پایان" name="endDate" className="w-100" />
            </div>

            <Form.RichText label="شرح" name="description" />
          </>
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
