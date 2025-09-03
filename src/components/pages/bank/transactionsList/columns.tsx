
import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";

export interface BankAccount {
  id: string;
  accountType: string;
  accountDate: string;
  typemoney: string;
  count: number;

  [key : string] : string | number
}

export const columns: ColumnDef<BankAccount>[] = [
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

