import type { ColumnDef } from "@tanstack/react-table";
import ActionsCell from "@/components/shared/ActionsCell";
import { DeleteDialog } from "@/components/shared/DeleteDialog";
import { useDeleteRows } from "@/hook/useDeleteRows";

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
            <span className="font-medium text-start">
              {user.first_name}{" "}
              {user.last_name}
            </span>
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
    cell: ({ row }) => {
      const status = row.getValue("status") as string | undefined
      return (
        status === "غیرفعال"
          ? <span className="bg-red-200 text-red-500 py-1 px-4 rounded-sm text-sm!">غیرفعال</span>
          : status === "فعال"
            ? <span className="bg-greenLight text-greenDark py-1 px-4 rounded-sm text-sm!">فعال</span>
            : <span className="bg-amber-200 text-yellow-600 py-1 px-4 rounded-sm text-sm!">تعیین نشده</span>
      )
  }
  },
  {
    id: "actions",
    accessorKey: "id",
    cell: ({ row }) => {
      const user = row.original ;
      const deleteRow = useDeleteRows({
        url: "clients",
        queryKey: ["clients"],
      });
      return (
        <div className="flex gap-2">
          <ActionsCell
            actions={[
              { label: "نمایش جزییات", path: `/clients/${user.id}` }
            ]}
          />
          <DeleteDialog
            onConfirm={() => {
              deleteRow.mutate(Number(user.id));
            }}
          />
        </div>
      );
    },
    header: () => {
      return <span className="font-normal">عملیات</span>;
    },
  },
];
