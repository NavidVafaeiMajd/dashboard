import { Button } from "@/components/ui/button";

type Item = { title: string; amount: number };

const benefits: Item[] = [
  { title: "دستمزد ماهیانه", amount: 6000000 },
];

const deductions: Item[] = [
  { title: "سهم امام خمینی ( ثابت )", amount: 0 },
];

const toIRR = (value: number) => `IRR ${value.toLocaleString("fa-IR")}`;

const PayrollListDetails = () => {
  const benefitsTotal = benefits.reduce((sum, i) => sum + i.amount, 0);
  const deductionsTotal = deductions.reduce((sum, i) => sum + i.amount, 0);
  const netPay = benefitsTotal - deductionsTotal;

  const now = new Date();
  const payDate = now.toLocaleDateString("fa-IR");

  return (
    <div className="max-w-[1100px] mx-auto py-8 px-4 bg-white">
      <div className="text-center mb-6">
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
              <span className="text-gray-800">کاربر حذف شد</span>
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
              <span className="text-gray-800">{now.getFullYear()} / {now.getMonth() + 1}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">تاریخ پرداخت :</span>
              <span className="text-gray-800">{payDate}</span>
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

      <div className="mt-6 border rounded-md">
        <div className="px-4 py-2">توضیحات فیش حقوقی :</div>
        <div className="px-4 pb-4 text-gray-600">—</div>
      </div>

      <div className="flex justify-center py-6 print:hidden">
        <Button onClick={() => window.print()} className="w-auto! self-auto">
          چاپ
        </Button>
      </div>
    </div>
  );
};

export default PayrollListDetails;
