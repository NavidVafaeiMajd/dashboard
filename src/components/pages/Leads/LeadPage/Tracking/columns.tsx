import type { ColumnDef } from "@tanstack/react-table";

export interface FollowUpList {
  id: string;
  nextFollowUp: string;
  description: string;  
  createdAt: string;    

  [key: string]: string | number;
}

export const columns: ColumnDef<FollowUpList>[] = [
  {
    accessorKey: "nextFollowUp",
    header: "پیگیری بعدی",
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("nextFollowUp")}</div>
    ),
  },
  {
    accessorKey: "description",
    header: "شرح",
    cell: ({ row }) => (
      <div className="text-right">{row.getValue("description")}</div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "تاریخ ایجاد",
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("createdAt")}</div>
    ),
  },
];
