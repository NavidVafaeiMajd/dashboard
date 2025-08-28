import StatBox from "@/components/shared/StatBox";
import { stats } from "./consts";
import LeaveTable from "./LeaveTable";
import { Form } from "@/components/shared/Form";
import z from "zod";
import LeaveStatus from "../charts/LeaveStatus";
import LeaveTypeStatus from "../charts/LeaveTypeStatus";
import SectionAcc from "@/components/shared/section/SectionAcc";

// ✅ تعریف اسکیمای ولیدیشن با zod
const validation = z.object({
  employee: z.string().min(1, "انتخاب کارمند الزامی است"),
  leaveType: z.string().min(1, "انتخاب نوع مرخصی الزامی است"),
  startDate: z.date({ error: "تاریخ شروع الزامی است" }),
  endDate: z.date({ error: "تاریخ پایان الزامی است" }),
  halfDay: z.boolean().optional(),
  notes: z.string().optional(),
  reason: z.string().min(1, "دلیل مرخصی الزامی است"),
});

const LeaveList = () => {
  const defaultValues = {
    employee: "",
    leaveType: "",
    startDate: new Date(),
    endDate: new Date(),
    halfDay: false,
    notes: "",
    reason: "",
  };

  const onSubmit = (data: z.infer<typeof validation>) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="flex flex-col gap-y-10">
      <div>
      <StatBox data={stats} />
      </div>
      <div>
        <SectionAcc
          defaultValues={defaultValues}
          table={<LeaveTable />}
          onSubmit={onSubmit}
          FirstTitle="افزودن مرخصی"
          SecoundTitle="  لیست همه مرخصی ها "
          schema={validation}
          formFields={
            <>
              {/* کارمند */}
              <Form.Select
                label="کارمند"
                name="employee"
                placeholder="انتخاب کارمند"
                required
              >
                <Form.SelectItem value="1">کارمند ۱</Form.SelectItem>
                <Form.SelectItem value="2">کارمند ۲</Form.SelectItem>
              </Form.Select>

              {/* نوع مرخصی */}
              <Form.Select
                label="نوع مرخصی"
                name="leaveType"
                placeholder="انتخاب نوع مرخصی"
                required
              >
                <Form.SelectItem value="1">استحقاقی</Form.SelectItem>
                <Form.SelectItem value="2">استعلاجی</Form.SelectItem>
                <Form.SelectItem value="3">بدون حقوق</Form.SelectItem>
                <Form.SelectItem value="4">سایر</Form.SelectItem>
              </Form.Select>

              {/* تاریخ‌ها */}
              <div className="flex gap-5">
                <Form.Date label="تاریخ شروع" name="startDate" />
                <Form.Date label="تاریخ پایان" name="endDate" />
              </div>

              {/* نصف روز */}
              {/* <Form.Checkbox label="نصف روز" name="halfDay" /> */}

              {/* ملاحظات */}
              <Form.Textarea label="ملاحظات" name="notes" placeholder="..." />

              {/* دلیل مرخصی */}
              <Form.Input
                label="دلیل مرخصی"
                name="reason"
                placeholder="دلیل مرخصی"
                required
              />
            </>
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
