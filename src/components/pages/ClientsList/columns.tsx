import type { ColumnDef } from "@tanstack/react-table";
import ActionsCell from "@/components/shared/ActionsCell";

export interface ClientsList {
  id: string;
  accountType: string;
  accountDate: string;
  typemoney: string;
  count: number;

  [key: string]: string | number;
}

export const columns: ColumnDef<ClientsList>[] = [
  {
    accessorKey: "accountType",
    header: "نوع حساب بانکی",
    cell: ({ row }) => (
      <div className="text-right">{row.getValue("accountType")}</div>
    ),
  },
  {
    accessorKey: "accountDate",
    header: "تاریخ",
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("accountDate")}</div>
    ),
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
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("count")}</div>
    ),
  },
  {
    id: "actions",
    accessorKey: "id",
    cell: ({ row }) => {
      const user = row.original;
      return (
        <ActionsCell
          actions={[
            { label: "نمایش جزییات", path: `/clients/${user.id}` },
            {
              label: "حذف",
              onclick: () => alert("حذف کاربر!"),
              type: "destructive",
            },
          ]}
        />
      );
    },
    header: () => {
      return <span className="font-normal">عملیات</span>;
    },
  },
];
