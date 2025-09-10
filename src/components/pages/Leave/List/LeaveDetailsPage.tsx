import ProgressBar from "@/components/shared/ProgressBar";
import { useMemo } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

const LeaveDetailsPage = () => {
  const { id } = useParams();
  const [params] = useSearchParams();

  const data = useMemo(() => {
    const employee = params.get("employee") || `کارمند ${id}`;
    const leaveType = params.get("leaveType") || "استحقاقی";
    const duration = params.get("duration") || "-";
    const days = Number(params.get("days") || 0);
    const requestDate = new Date(Number(params.get("requestDate") || Date.now()));
    const status = params.get("status") || "pending";
    return { employee, leaveType, duration, days, requestDate, status };
  }, [id, params]);

  const percent = Math.min(100, Math.round((data.days / 55) * 100));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto bg-white p-4">
      <div className="space-y-6">
        <div className="border rounded-md overflow-hidden">
          <div className="bg-gray-100 px-4 py-2 font-semibold flex items-center justify-between">
            <span>دلیل مرخصی</span>
            <span className="text-gray-400">🔒</span>
          </div>
          <div className="p-4 text-gray-700">—</div>
        </div>

        <div className="border rounded-md overflow-hidden">
          <div className="bg-rose-50 px-4 py-2 font-semibold text-green-700">آمار مرخصی</div>
          <div className="divide-y">
            {[
              { title: "زایمان", total: 10 },
              { title: "استعلاجی", total: 7 },
              { title: "ماموریت", total: 10 },
              { title: "استحقاقی", total: 5 },
              { title: "ابل", total: 55 },
            ].map((item, idx) => (
              <div key={idx} className="px-4 py-3">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-700">{item.title}</span>
                  <span className="text-gray-500">(0/{item.total})</span>
                </div>
                <div className="bg-gray-100 rounded">
                  <div className="h-2 w-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="border rounded-md overflow-hidden">
          <div className="bg-gray-100 px-4 py-2 font-semibold">جزئیات مرخصی</div>
          <div className="p-4 text-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">کارمند :</span>
              <span className="text-gray-800">{data.employee}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">نوع مرخصی :</span>
              <span className="text-gray-800">{data.leaveType}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">تاریخ درخواست :</span>
              <span className="text-gray-800">{data.requestDate.toLocaleDateString("fa-IR")}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">شروع :</span>
              <span className="text-gray-800">—</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">پایان :</span>
              <span className="text-gray-800">—</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">پیوست :</span>
              <span className="text-gray-800">—</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">کل روزها :</span>
              <span className="text-gray-800">{data.days}</span>
            </div>
            <div className="pt-2">
              <div className="text-gray-700 mb-2">وضعیت</div>
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <ProgressBar value={percent} />
                </div>
                <span className="text-xs text-green-600">
                  {data.status === "approved" ? "تایید شده" : data.status === "rejected" ? "رد شده" : "درحال بررسی"}
                </span>
              </div>
            </div>
            <div>
              <div className="text-gray-700 mb-1">ملاحظات</div>
              <div className="min-h-24 rounded border p-3 text-gray-700">—</div>
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

export default LeaveDetailsPage;


