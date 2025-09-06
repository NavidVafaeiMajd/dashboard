import { DataTable } from "@/components/shared/data-table";
import { Button } from "@/components/ui/button";

interface BankAccount {
  description: string;
  accountType: string;
  amount: number;
  [key: string]: string | number;
}

const BANK_ACCOUNTS: BankAccount[] = [
  {
    description: "واریز حقوق شهریور",
    accountType: "جاری",
    amount: 5000000,
  },
  {
    description: "برداشت خرید اینترنتی",
    accountType: "پس‌انداز",
    amount: 1200000,
  },
  {
    description: "واریز هدیه تولد",
    accountType: "جاری",
    amount: 750000,
  },
];

const columns = [
  {
    header: "شرح",
    accessorKey: "description" as keyof BankAccount,
  },
  {
    header: "نوع",
    accessorKey: "accountType" as keyof BankAccount,
  },
  {
    header: "مقدار",
    accessorKey: "amount" as keyof BankAccount,
  },
];

const AccountsListDetails = () => {
  return (
    <div className="max-w-[1200px] mx-auto py-10 gap-5 bg-white">
      <div className="flex justify-between gap-2 p-5">
        <div className="flex flex-col gap-2">
          <span> اطلاعات حساب : </span>
          <span> بانک ملت </span>
        </div>
        <div className="flex flex-col gap-2">
          <span>تاریخ</span>
          <span> {new Date().toLocaleDateString()}</span>
        </div>
      </div>
      <DataTable
        columns={columns}
        data={BANK_ACCOUNTS}
        searchableKeys={["accountNumber", "accountType"]}
      />
      <div className="bg-gray-100 m-5 gap-2 p-5">
        <div>
          <span>اعتبار</span>
          <span>10000000</span>
        </div>
        <div>
          <span>بدهی</span>
          <span>10000000</span>
        </div>
      </div>
      <div>
        <span>شرایط و ضوابط :</span>
      </div>
      <div className="flex justify-center py-5" >
        <Button onClick={() => window.print()} className="w-auto! self-auto">
          چاپ
        </Button>
      </div>
    </div>
  );
};

export default AccountsListDetails;
