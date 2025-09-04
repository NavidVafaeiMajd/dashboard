// import { ColumnDef } from "@tanstack/react-table";

import ActionsCell from "@/components/shared/ActionsCell";
import { DeleteDialog } from "@/components/shared/DeleteDialog";
import type { ColumnDef } from "@tanstack/react-table";

// تعریف تایپ BankAccount
export interface Leads {
  id: string;
  name: string;
  phone: string;
  gender: string;
  country: string;
  status: string;

  [key: string]: string | number | boolean | null;
}

export const columns: ColumnDef<Leads>[] = [
  {
    accessorKey: "id",
    header: "شناسه",
  },
  {
    accessorKey: "name",
    header: "نام",
  },
  {
    accessorKey: "phone",
    header: "تلفن",
  },
  {
    accessorKey: "gender",
    header: "جنسیت",
  },
  {
    accessorKey: "country",
    header: "کشور",
  },
  {
    accessorKey: "status",
    header: "وضعیت",
  },
  {
    id: "actions",
    accessorKey: "id",
    cell: ({ row }) => {
      const lead = row.original;
      return (
        <div className="flex gap-x-2">
          <ActionsCell
            actions={[{ label: "نمایش جزییات", path: `/leads/${lead.id}` }]}
          />
          <DeleteDialog onConfirm={() => {}} />
        </div>
      );
    },
    header: () => {
      return <span className="font-normal">عملیات</span>;
    },
  },
];
