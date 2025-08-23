import StatBox from "@/components/shared/StatBox";
import { stats } from "./consts";
import LeaveTable from "./LeaveTable";
import { Form } from "@/components/shared/Form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import  z from "zod";
import { Button } from "@/components/ui/button";

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
  const form = useForm<z.infer<typeof validation>>({
    resolver: zodResolver(validation),
    defaultValues: {
      employee: "",
      leaveType: "",
      startDate: new Date(),
      endDate: new Date(),
      halfDay: false,
      notes: "",
      reason: "",
    },
  });

  const onSubmit = (data: z.infer<typeof validation>) => {
    console.log("Form Data:", data);
  };

  return (
    <div>
      <StatBox data={stats} />
      <div className="bg-white my-5 rounded-sm">
        <div>
          <Form
            formProp={form}
            accordion
            accordionTitle="ثبت مرخصی جدید"
            onSubmit={onSubmit}
            className="flex flex-col gap-5"
          >
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
              <Form.Date label="تاریخ شروع" name="startDate"  />
              <Form.Date label="تاریخ پایان" name="endDate"  />
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

            <div className="flex gap-x-2 mt-5">
              <Button type="submit">ثبت مرخصی</Button>
            </div>
          </Form>
        </div>

        {/* جدول لیست مرخصی‌ها */}
        <LeaveTable />
      </div>
    </div>
  );
};

export default LeaveList;
