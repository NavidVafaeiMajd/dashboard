import DisciplinaryTable from "./DisciplinaryTable";
import { Form } from "@/components/shared/Form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Button } from "@/components/ui/button";

import {
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ImageUploadInput } from "@/components/shared/ImageUploadInput";

const validation = z.object({
  employee: z.string().min(1, "انتخاب کارمند الزامی است"),
  caseType: z.string().min(1, "انتخاب نوع پرونده الزامی است"),
  subject: z.string().min(1, "موضوع الزامی است"),
  caseDate: z.date({ error: "تاریخ پرونده الزامی است" }),
  description: z.string().min(1, "شرح الزامی است"),
  files: z.array(z.any()).optional(),
});

const DisciplinaryList = () => {
  const form = useForm<z.infer<typeof validation>>({
    resolver: zodResolver(validation),
    defaultValues: {
      employee: "",
      caseType: "",
      subject: "",
      caseDate: new Date(),
      description: "",
      files: [],
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
            className="flex flex gap-5"
          >
            <div className="w-[70%]">
              <div className="flex gap-5">
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

                {/* نوع پرونده */}
                <Form.Select
                  label="نوع پرونده"
                  name="caseType"
                  placeholder="انتخاب نوع پرونده"
                  required
                >
                  <Form.SelectItem value="1">تخلف انضباطی</Form.SelectItem>
                  <Form.SelectItem value="2">تخلف اخلاقی</Form.SelectItem>
                  <Form.SelectItem value="3">تخلف کاری</Form.SelectItem>
                  <Form.SelectItem value="4">تخلف امنیتی</Form.SelectItem>
                  <Form.SelectItem value="5">سایر</Form.SelectItem>
                </Form.Select>
              </div>
              <div className="flex gap-5">
                {/* موضوع */}
                <Form.Input
                  label="موضوع"
                  name="subject"
                  placeholder="موضوع پرونده را وارد کنید"
                  required
                />

                {/* تاریخ پرونده */}
                <Form.Date label="تاریخ پرونده" name="caseDate" />
              </div>

              {/* شرح */}
              <Form.Textarea
                label="شرح"
                name="description"
                placeholder="شرح کامل پرونده را وارد کنید"
                required
              />
              <Button type="submit" className="my-5">
                ثبت پرونده
              </Button>
            </div>
            <div className="w-[30%]">
              <Form.Image name="file" label="پیوست" required />
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
