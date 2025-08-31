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
          <img
            src={user.avatar}
            alt={user.fullName}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col justify-start">
            <span className="font-medium text-start">{user.fullName}</span>
            <span className="text-xs text-gray-500">{user.email}</span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "username",
    header: "نام کاربری",
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("username")}</div>
    ),
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
            { label: "نمایش جزییات", path: `/users/${user.id}` },
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
