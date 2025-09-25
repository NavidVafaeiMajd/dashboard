import type { ColumnDef } from "@tanstack/react-table";
import ActionsCell from "@/components/shared/ActionsCell";

export interface ClientsList {
  id: string;
  fullName: string;
  username: string;
  email: string;
  avatar: string;
  phone: string;
  gender: string;
  status: string;

  [key: string]: string | number;
}

export const columns: ColumnDef<ClientsList>[] = [
  {
    accessorKey: "fullName",
    header: "نام",
    cell: ({ row }) => {
      const user = row.original;
      return (
        <div className="flex items-center gap-3">
          <div className="flex flex-col justify-start">
            <span className="font-medium text-start">{user.first_name}{ user.last_name }</span>
            <span className="text-xs text-gray-500">{user.email}</span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "phone",
    header: "شماره تماس",
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("phone")}</div>
    ),
  },
  {
    accessorKey: "gender",
    header: "جنسیت",
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("gender")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "وضعیت",
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("status")}</div>
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
              onclick: () => alert(`کاربر ${user.fullName} حذف شد!`),
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
