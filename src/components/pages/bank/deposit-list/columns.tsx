import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";

export interface DepositList {
  id: string;
  accountType: string;     // نوع حساب بانکی
  receiver: string;        // دریافت کننده وجه
  amount: number;          // مقدار
  category: string;        // دسته بندی
  reference: string;       // مرجع#
  paymentMethod: string;   // روش پرداخت
  date:  Date;            // تاریخ
  [key: string]: string | number | Date;
}

export const columns: ColumnDef<DepositList>[] = [
  {
    accessorKey: "accountType",
    header: "نوع حساب بانکی",
    cell: ({ row }) => (
      <div className="text-right">{row.getValue("accountType")}</div>
    ),
  },
  {
    accessorKey: "receiver",
    header: "دریافت کننده وجه",
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("receiver")}</div>
    ),
  },
  {
    accessorKey: "amount",
    header: "مقدار",
    cell: ({ row }) => (
      <div className="text-center">
        {Number(row.getValue("amount")).toLocaleString()} ریال
      </div>
    ),
  },
  {
    accessorKey: "category",
    header: "دسته بندی",
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("category")}</div>
    ),
  },
  {
    accessorKey: "reference",
    header: "مرجع#",
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("reference")}</div>
    ),
  },
  {
    accessorKey: "paymentMethod",
    header: "روش پرداخت",
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("paymentMethod")}</div>
    ),
  },
  {
    accessorKey: "date",
    header: "تاریخ",
    cell: ({ row }) => {
      const date: Date = row.getValue("date");
      return (
        <div className="text-center">
          {new Intl.DateTimeFormat("fa-IR").format(new Date(date))}
        </div>
      );
    },
  },  
  {
    id: "actions",
    header: "عملیات",
    cell: ({ row }) => {
      const rowData = row.original;
      return (
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            ویرایش
          </Button>
          <Button variant="destructive" size="sm">
            حذف
          </Button>
          <Button variant="default" size="sm">
            نمایش
          </Button>
        </div>
      );
    },
  },
];
