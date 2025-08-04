
import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";

export interface BankAccount {
  id: string;
  accountType: string;
  accountDate: string;
  typemoney: string;
  count: number;
}

export const useBankColumns = () => {
  const [selectedAccount, setSelectedAccount ] = useState<BankAccount | null>(null);
  const columns: ColumnDef<BankAccount>[] = [
    {
      accessorKey: "accountType",
      header: "نوع حساب بانکی",
      cell: ({ row }) => <div className="text-right">{row.getValue("accountType")}</div>,
    },
    {
      accessorKey: "accountDate",
      header: "تاریخ",
      cell: ({ row }) => <div className="text-center">{row.getValue("accountDate")}</div>,
    },
    {
      accessorKey: "typemoney",
      header: "نوع ",
      cell: ({ row }) => (
        <div className="text-center">{row.getValue("typemoney")} </div>
      ),
    },
    {
      accessorKey: "count",
      header: "مقدار",
      cell: ({ row }) => <div className="text-center">{row.getValue("count")}</div>,
    },
    {
      id: "actions",
      header: "مرجع",
      cell: ({ row }) => {
        const rowData = row.original;
        return (
          <div className="flex items-center gap-2">
            <Button variant="default" size="sm">نمایش</Button>
          </div>
        );
      },
    },
  ];

  // خروجی: ستون‌ها + مودال
  return {
    columns,
    modal: selectedAccount && (
  
        <div className="space-y-2 text-sm leading-relaxed">
          <p><strong>نوع حساب:</strong> {selectedAccount.accountType}</p>
          <p><strong>شماره حساب:</strong> {selectedAccount.accountNumber}</p>
          <p><strong>ما به التفاوت:</strong> {selectedAccount.typemoney.toLocaleString()} ریال</p>
          <p><strong>شعبه بانک:</strong> {selectedAccount.count}</p>
        </div>
    ),
  };
};
