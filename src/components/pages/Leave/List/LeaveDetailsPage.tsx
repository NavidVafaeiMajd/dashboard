import ProgressBar from "@/components/shared/ProgressBar";
import { useMemo } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useGetData } from "@/hook/useGetData";

const LeaveDetailsPage = () => {
  const { id } = useParams();
  const [params] = useSearchParams();

  // Fetch leave details from API
  const { data: leaveData, isLoading } = useGetData(`leaves/${id}`);

  const data = useMemo(() => {
    if (leaveData && typeof leaveData === 'object') {
      return {
        employee: (leaveData as any).employee_full_name || `کارمند ${id}`,
        leaveType: (leaveData as any).leaveType || "استحقاقی",
        startDate: (leaveData as any).start_date ? new Date((leaveData as any).start_date) : null,
        endDate: (leaveData as any).end_date ? new Date((leaveData as any).end_date) : null,
        days: (leaveData as any).days || 0,
        requestDate: new Date((leaveData as any).requestDate || (leaveData as any).created_at || Date.now()),
        status: (leaveData as any).status || "درحال بررسی",
        reason: (leaveData as any).reason || "",
        considerations: (leaveData as any).considerations || "",
        attachments: (leaveData as any).attachments || []
      };
    }
    
    // Fallback to URL params if API data not available
    const employee = params.get("employee") || `کارمند ${id}`;
    const leaveType = params.get("leaveType") || "استحقاقی";
    const duration = params.get("duration") || "-";
    const days = Number(params.get("days") || 0);
    const requestDate = new Date();
    const status = params.get("status") || "درحال بررسی";
    return { employee, leaveType, duration, days, requestDate, status, startDate: null, endDate: null, reason: "", considerations: "", attachments: [] };
  }, [id, params, leaveData]);

  const percent = Math.min(100, Math.round((data.days / 55) * 100));

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 container mx-auto bg-white p-4">
      <div className="space-y-6">
        <div className="border rounded-md overflow-hidden">
          <div className="bg-gray-100 px-4 py-2 font-semibold flex items-center justify-between">
            <span>دلیل مرخصی</span>
            <span className="text-gray-400">🔒</span>
          </div>
          <div className="p-4 text-gray-700">
            {data.reason || "دلیل مشخص نشده"}
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
              <span className="text-gray-800">
                {data.requestDate && !isNaN(data.requestDate.getTime()) 
                  ? data.requestDate.toLocaleDateString("fa-IR") 
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">شروع :</span>
              <span className="text-gray-800">
                {data.startDate ? data.startDate.toLocaleDateString("fa-IR") : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">پایان :</span>
              <span className="text-gray-800">
                {data.endDate ? data.endDate.toLocaleDateString("fa-IR") : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">پیوست :</span>
              <span className="text-gray-800">
                {data.attachments?.length > 0 ? `${data.attachments.length} فایل` : "—"}
              </span>
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
                <span className={`text-xs ${
                  data.status === "تایید شده" ? "text-green-600" : 
                  data.status === "رد شده" ? "text-red-600" : 
                  "text-yellow-600"
                }`}>
                  {data.status}
                </span>
              </div>
            </div>
            <div>
              <div className="text-gray-700 mb-1">ملاحظات</div>
              <div className="min-h-24 rounded border p-3 text-gray-700">
                {data.considerations || "ملاحظات ثبت نشده"}
              </div>
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


