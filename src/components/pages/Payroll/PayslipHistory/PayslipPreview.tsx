import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

type Props = {
  employee: string;
  payDate: Date;
  monthlySalary: number;
  salary: number;
};

type Item = { title: string; amount: number };

const toIRR = (value: number) => `IRR ${value.toLocaleString("fa-IR")}`;

function PayslipPreview({ employee, payDate, monthlySalary, salary }: Props) {
  const navigate = useNavigate();
  const benefits: Item[] = [
    { title: "دستمزد ماهیانه", amount: monthlySalary },
  ];
  const benefitsTotal = benefits.reduce((s, i) => s + i.amount, 0);
  const deductionsTotal = Math.max(benefitsTotal - salary, 0);
  const deductions: Item[] = deductionsTotal
    ? [{ title: "جمع کسورات", amount: deductionsTotal }]
    : [];

  const netPay = benefitsTotal - deductionsTotal;

  return (
    <div className="max-w-[1100px] mx-auto py-4 px-2 bg-white">
      <div className="text-center mb-4">
        <div className="text-gray-700 mb-1">حقوق خالص کارکنان</div>
        <div className="text-indigo-600 font-semibold text-xl">{toIRR(netPay)}</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1 gap-4 w-full!">
          <div className="border rounded-md overflow-hidden">
            <div className="bg-gray-100 px-4 py-2 font-semibold">حقوق و مزایا</div>
            <div className="divide-y">
              {benefits.map((b, idx) => (
                <div key={idx} className="flex items-center justify-between px-4 py-2">
                  <span className="text-gray-700">{b.title}</span>
                  <span className="text-emerald-600">{toIRR(b.amount)}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between px-4 py-3 border-t">
              <span className="font-medium">جمع حقوق و مزایا</span>
              <span className="font-medium">{toIRR(benefitsTotal)}</span>
            </div>
          </div>
        </div>

        <div className="col-span-1 border rounded-md w-full!">
          <div className="bg-gray-100 px-4 py-2 font-semibold">فیش حقوق پرسنل</div>
          <div className="p-4 space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">کارمند :</span>
              <span className="text-gray-800">{employee}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">سمت سازمانی :</span>
              <span className="text-gray-800">--</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">تاریخ عضویت :</span>
              <span className="text-gray-800">--</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">دوره پرداخت :</span>
              <span className="text-gray-800">{payDate.toLocaleDateString("fa-IR-u-ca-persian", { month: "2-digit", year: "numeric" })}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">تاریخ پرداخت :</span>
              <span className="text-gray-800">{payDate.toLocaleDateString("fa-IR")}</span>
            </div>
            <div className="pt-2 border-t">
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-medium">خالص پرداختی</span>
                <span className="text-indigo-600 font-semibold">{toIRR(netPay)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="border rounded-md overflow-hidden">
          <div className="bg-gray-100 px-4 py-2 font-semibold">کسورات</div>
          <div className="divide-y">
            {deductions.length === 0 ? (
              <div className="px-4 py-2 text-gray-500">بدون کسورات</div>
            ) : (
              deductions.map((d, idx) => (
                <div key={idx} className="flex items-center justify-between px-4 py-2">
                  <span className="text-gray-700">{d.title}</span>
                  <span className="text-red-500">{toIRR(d.amount)}</span>
                </div>
              ))
            )}
          </div>
          <div className="flex items-center justify-between px-4 py-3 border-t">
            <span className="font-medium">جمع کسورات</span>
            <span className="font-medium">{toIRR(deductionsTotal)}</span>
          </div>
        </div>

        <div className="border rounded-md">
          <div className="px-4 py-2">توضیحات فیش حقوقی :</div>
          <div className="px-4 pb-4 text-gray-600">—</div>
        </div>
      </div>

      <div className="flex justify-center gap-2 py-4 print:hidden">
        <Button onClick={() => window.print()} className="w-auto! self-auto">چاپ</Button>
        <Button variant="outline" onClick={() => navigate(-1)} className="w-auto! self-auto">بازگشت</Button>
      </div>
    </div>
  );
}

export default PayslipPreview;


