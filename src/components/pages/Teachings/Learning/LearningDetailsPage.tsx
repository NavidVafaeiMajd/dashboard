import { useMemo } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

const toIRR = (n: number) => `IRR ${n.toLocaleString("fa-IR")}`;

const LearningDetailsPage = () => {
  const { id } = useParams();
  const [params] = useSearchParams();

  const data = useMemo(() => {
    const teacher = params.get("teacher") || "—";
    const skill = params.get("skill") || "—";
    const cost = Number(params.get("cost") || "0");
    const personnel = Number(params.get("personnel") || "0");
    const start_date = params.get("start_date") ? new Date(params.get("start_date")!).toLocaleDateString("fa-IR") : "—";
    const end_date = params.get("end_date") ? new Date(params.get("end_date")!).toLocaleDateString("fa-IR") : "—";
    const description = params.get("description") || "—";
    const created = params.get("created") ? new Date(params.get("created")!).toLocaleDateString("fa-IR") : "—";
    return { teacher, skill, cost, personnel, start_date, end_date, description, created };
  }, [id, params]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-6 container mx-auto bg-white p-4">
      <div className="space-y-6">
        <div className="border rounded-md overflow-hidden">
          <div className="bg-gray-100 px-4 py-2 font-semibold flex items-center justify-between">
            <span>مرور کلی</span>
          </div>
          <div className="divide-y">
            <div className="px-4 py-3 flex items-center justify-between">
              <span className="text-gray-600">مهارت آموزشی :</span>
              <span className="text-gray-800">{data.skill}</span>
            </div>
            <div className="px-4 py-3 flex items-center justify-between">
              <span className="text-gray-600">مشخصات مدرس :</span>
              <span className="text-gray-800">{data.teacher}</span>
            </div>
            <div className="px-4 py-3 flex items-center justify-between">
              <span className="text-gray-600">هزینه آموزش :</span>
              <span className="text-gray-800">{toIRR(data.cost)}</span>
            </div>
            <div className="px-4 py-3 flex items-center justify-between">
              <span className="text-gray-600">تعداد دانشجو :</span>
              <span className="text-gray-800">{data.personnel}</span>
            </div>
            <div className="px-4 py-3 flex items-center justify-between">
              <span className="text-gray-600">تاریخ شروع :</span>
              <span className="text-gray-800">{data.start_date}</span>
            </div>
            <div className="px-4 py-3 flex items-center justify-between">
              <span className="text-gray-600">تاریخ پایان :</span>
              <span className="text-gray-800">{data.end_date}</span>
            </div>
            <div className="px-4 py-3 flex items-center justify-between">
              <span className="text-gray-600">تاریخ ایجاد :</span>
              <span className="text-gray-800">{data.created}</span>
            </div>
          </div>
        </div>

        <div className="border rounded-md overflow-hidden">
          <div className="bg-gray-100 px-4 py-2 font-semibold">جزئیات آموزش</div>
          <div className="p-4 text-gray-700" dangerouslySetInnerHTML={{ __html: data.description }} />
        </div>
      </div>

 


        <div className="flex justify-center py-2 print:hidden">
          <Button onClick={() => window.print()} className="w-auto! self-auto">چاپ</Button>
        </div>
    </div>
  );
};

export default LearningDetailsPage;



