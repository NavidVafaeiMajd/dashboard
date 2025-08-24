import DisciplinaryTable from "./DisciplinaryTable";
import { Form } from "@/components/shared/Form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Button } from "@/components/ui/button";

const validation = z.object({
  employee: z.string().min(1, "انتخاب کارمند الزامی است"),
  violationType: z.string().min(1, "انتخاب نوع تخلف الزامی است"),
  violationDate: z.date({ error: "تاریخ تخلف الزامی است" }),
  description: z.string().min(1, "توضیحات تخلف الزامی است"),
  severity: z.string().min(1, "انتخاب شدت تخلف الزامی است"),
  action: z.string().min(1, "انتخاب اقدام انضباطی الزامی است"),
});

const DisciplinaryList = () => {
  const form = useForm<z.infer<typeof validation>>({
    resolver: zodResolver(validation),
    defaultValues: {
      employee: "",
      violationType: "",
      violationDate: new Date(),
      description: "",
      severity: "",
      action: "",
    },
  });

  const onSubmit = (data: z.infer<typeof validation>) => {
    console.log("Form Data:", data);
  };

  return (
    <div>
      <div className="bg-white my-5 rounded-sm">
        <div>
          <Form
            formProp={form}
            accordion
            accordionTitle="ثبت پرونده انضباطی جدید"
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

            {/* نوع تخلف */}
            <Form.Select
              label="نوع تخلف"
              name="violationType"
              placeholder="انتخاب نوع تخلف"
              required
            >
              <Form.SelectItem value="1">تاخیر در ورود</Form.SelectItem>
              <Form.SelectItem value="2">غیبت غیرمجاز</Form.SelectItem>
              <Form.SelectItem value="3">عدم رعایت قوانین</Form.SelectItem>
              <Form.SelectItem value="4">سایر</Form.SelectItem>
            </Form.Select>

            {/* تاریخ تخلف */}
            <Form.Date label="تاریخ تخلف" name="violationDate" required />

            {/* شدت تخلف */}
            <Form.Select
              label="شدت تخلف"
              name="severity"
              placeholder="انتخاب شدت تخلف"
              required
            >
              <Form.SelectItem value="1">خفیف</Form.SelectItem>
              <Form.SelectItem value="2">متوسط</Form.SelectItem>
              <Form.SelectItem value="3">شدید</Form.SelectItem>
            </Form.Select>

            {/* اقدام انضباطی */}
            <Form.Select
              label="اقدام انضباطی"
              name="action"
              placeholder="انتخاب اقدام انضباطی"
              required
            >
              <Form.SelectItem value="1">تذکر شفاهی</Form.SelectItem>
              <Form.SelectItem value="2">تذکر کتبی</Form.SelectItem>
              <Form.SelectItem value="3">کسر حقوق</Form.SelectItem>
              <Form.SelectItem value="4">تعلیق</Form.SelectItem>
            </Form.Select>

            {/* توضیحات */}
            <Form.Textarea 
              label="توضیحات تخلف" 
              name="description" 
              placeholder="توضیحات کامل تخلف را وارد کنید" 
              required 
            />

            <div className="flex gap-x-2 mt-5">
              <Button type="submit">ثبت پرونده</Button>
            </div>
          </Form>
        </div>

        {/* جدول لیست پرونده ها */}
        <DisciplinaryTable />
      </div>
    </div>
  );
};

export default DisciplinaryList;
