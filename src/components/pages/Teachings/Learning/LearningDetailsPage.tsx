import { useMemo } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/shared/Form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

const toIRR = (n: number) => `IRR ${n.toLocaleString("fa-IR")}`;

const LearningDetailsPage = () => {
  const { id } = useParams();
  const [params] = useSearchParams();

 const validation = z.object({
  performance: z.string().min(1, "عملکرد الزامی است"),
  status: z.string().min(1, "وضعیت الزامی است"),
  comments: z.string().min(1, "ملاحظات الزامی است"),
 });

  const form = useForm<z.infer<typeof validation>>({
    resolver: zodResolver(validation),
    defaultValues: {
      performance: "",
      status: "",
      comments: "",
    },
  });

  const data = useMemo(() => {
    const infoTecher = params.get("infoTecher") || "—";
    const skillslearn = params.get("skillslearn") || "—";
    const priceLearn = Number((params.get("priceLearn") || "0").replace(/[,\s]/g, ""));
    const status = params.get("status") || "شروع نشده";
    const entry = params.get("entry") || "—";
    const exit = params.get("exit") || "—";
    const text = params.get("text") || "—";
    const created = params.get("created") || "—";
    return { infoTecher, skillslearn, priceLearn, status, entry, exit, text, created };
  }, [id, params]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto bg-white p-4">
      <div className="space-y-6">
        <div className="border rounded-md overflow-hidden">
          <div className="bg-gray-100 px-4 py-2 font-semibold flex items-center justify-between">
            <span>مرور کلی</span>
          </div>
          <div className="divide-y">
            <div className="px-4 py-3 flex items-center justify-between">
              <span className="text-gray-600">مهارت آموزشی :</span>
              <span className="text-gray-800">{data.skillslearn}</span>
            </div>
            <div className="px-4 py-3 flex items-center justify-between">
              <span className="text-gray-600">مشخصات مدرس :</span>
              <span className="text-gray-800">{data.infoTecher}</span>
            </div>
            <div className="px-4 py-3 flex items-center justify-between">
              <span className="text-gray-600">هزینه آموزش :</span>
              <span className="text-gray-800">{toIRR(data.priceLearn)}</span>
            </div>
            <div className="px-4 py-3 flex items-center justify-between">
              <span className="text-gray-600">تاریخ شروع :</span>
              <span className="text-gray-800">{data.entry}</span>
            </div>
            <div className="px-4 py-3 flex items-center justify-between">
              <span className="text-gray-600">تاریخ پایان :</span>
              <span className="text-gray-800">{data.exit}</span>
            </div>
            <div className="px-4 py-3 flex items-center justify-between">
              <span className="text-gray-600">وضعیت :</span>
              <span className="text-gray-800">{data.status}</span>
            </div>
            <div className="px-4 py-3 flex items-center justify-between">
              <span className="text-gray-600">تاریخ ایجاد :</span>
              <span className="text-gray-800">{data.created}</span>
            </div>
          </div>
        </div>

        <div className="border rounded-md overflow-hidden">
          <div className="bg-gray-100 px-4 py-2 font-semibold">جزئیات آموزش</div>
          <div className="p-4 text-gray-700">{data.text}</div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="border rounded-md overflow-hidden">
          <div className="bg-gray-100 px-4 py-2 font-semibold">به روز رسانی وضعیت</div>
                  <div className="p-4 space-y-3 text-sm">
                      <Form formProp={form} onSubmit={() => {}}>
                        <Form.Select name="performance" label="عملکرد" required>
                          <Form.SelectItem value="1">در حال بررسی</Form.SelectItem>
                          <Form.SelectItem value="2">تکمیل شده</Form.SelectItem>
                          <Form.SelectItem value="3">در حال انجام</Form.SelectItem>
              </Form.Select>
              
              <Form.Select name="status" label="وضعیت" required>
                          <Form.SelectItem value="1">در حال بررسی</Form.SelectItem>
                          <Form.SelectItem value="2">تکمیل شده</Form.SelectItem>
                          <Form.SelectItem value="3">در حال انجام</Form.SelectItem>
              </Form.Select>
              <Form.Textarea name="comments" label="ملاحظات" />
                      </Form>
            <div className="pt-2">
              <Button className="w-full">به روز رسانی وضعیت</Button>
            </div>
          </div>
        </div>

        <div className="border rounded-md overflow-hidden">
          <div className="bg-rose-50 px-4 py-2 font-semibold">کاربران اختصاص داده شده</div>
          <div className="p-4 text-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-800">اکبر محمدی</span>
              <span className="text-gray-500">رییس واحد</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-800">حسین علی زاده</span>
              <span className="text-gray-500">سرپرست واحد</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-2 print:hidden">
          <Button onClick={() => window.print()} className="w-auto! self-auto">چاپ</Button>
        </div>
      </div>
    </div>
  );
};

export default LearningDetailsPage;



