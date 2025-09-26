import StatBox from "@/components/shared/StatBox";
import { stats } from "./consts";
import LeaveTable from "./LeaveTable";
import { Form } from "@/components/shared/Form";
import z from "zod";
import LeaveStatus from "../charts/LeaveStatus";
import LeaveTypeStatus from "../charts/LeaveTypeStatus";
import SectionAcc from "@/components/shared/section/SectionAcc";
import { usePostRows } from "@/hook/usePostRows";
import { useEmployees } from "@/hook/useEmployees";
import SkeletonLoading from "@/components/ui/skeleton";
import PostLoad from "@/components/ui/postLoad";

// ✅ تعریف اسکیمای ولیدیشن با zod
const validation = z.object({
  employee_id: z.string().min(1, "انتخاب کارمند الزامی است"),
  type: z.string().min(1, "انتخاب نوع مرخصی الزامی است"),
  start_date: z.date({ error: "تاریخ شروع الزامی است" }),
  end_date: z.date({ error: "تاریخ پایان الزامی است" }),
  considerations: z.string().optional(),
  reason: z.string().min(1, "دلیل مرخصی الزامی است"),
});

const LeaveList = () => {
  const defaultValues = {
    employee_id: "",
    type: "",
    start_date: new Date(),
    end_date: new Date(),
    considerations: "",
    reason: "",
  };

  const { mutation, form } = usePostRows(
    "leaves",
    ["leaves"],
    defaultValues,
    validation,
    "مرخصی",
    true
  );

  const { data: employee, isPending: employeesLoading } = useEmployees();

  const mapped = employee?.data?.map((item) => ({
    value: String(item.id),
    label: item.fullName,
  }));

  const onSubmit = (data: z.infer<typeof validation>) => {
    const formData = {
      ...data,
      start_date: data.start_date?.toISOString().slice(0, 19),
      end_date: data.end_date?.toISOString().slice(0, 19),
    }
    console.log("Form Data:", data);
    mutation.mutate(formData)
  };

  return (
    <div className="flex flex-col gap-y-10 relative">
      {(mutation.isPending || employeesLoading) && <SkeletonLoading />}

      <div>
        <StatBox data={stats} />
      </div>
      <div className="overflow-x-auto w-full!">
        <SectionAcc
          form={form}
          defaultValues={defaultValues}
          table={<LeaveTable />}
          onSubmit={onSubmit}
          FirstTitle="افزودن مرخصی"
          SecoundTitle="  لیست همه مرخصی ها "
          schema={validation}
          formFields={
            <div className="relative">
              {(mutation.isPending || employeesLoading) && <PostLoad />}

              <Form.Select
                label="کارمند"
                name="employee_id"
                placeholder="انتخاب کارمند"
                options={mapped || []}
                required
              />

              {/* نوع مرخصی */}
              <Form.Select
                label="نوع مرخصی"
                name="type"
                placeholder="انتخاب نوع مرخصی"
                required
                options={[{ label: "استحقاقی", value: "استحقاقی" }]}
              />

              {/* تاریخ‌ها */}
              <div className="flex gap-5">
                <Form.Date label="تاریخ شروع" name="start_date" />
                <Form.Date label="تاریخ پایان" name="end_date" />
              </div>

              {/* ملاحظات */}
              <Form.Textarea label="ملاحظات" name="considerations" placeholder="..." />

              {/* دلیل مرخصی */}
              <Form.Input
                label="دلیل مرخصی"
                name="reason"
                placeholder="دلیل مرخصی"
                required
              />
            </div>
          }
        />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <LeaveStatus />
        </div>
        <div>
          <LeaveTypeStatus />
        </div>
      </div>
    </div>
  );
};

export default LeaveList;
