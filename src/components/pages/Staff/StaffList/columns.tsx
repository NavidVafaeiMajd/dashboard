import type { ColumnDef } from "@tanstack/react-table";
import type { User } from "./Table";
import { Button } from "@/components/ui/button";
import { LuArrowUpDown } from "react-icons/lu";
import { cn } from "@/lib/utils";
import ActionsCell from "@/components/shared/ActionsCell";
import { DeleteDialog } from "@/components/shared/DeleteDialog";
import { useDeleteRows } from "@/hook/useDeleteRows";

export const userColumns: ColumnDef<User>[] = [
  {
    accessorKey: "fullName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <LuArrowUpDown className="ml-2 h-4 w-4" />
          نام
        </Button>
      );
    },
  },
  {
    accessorKey: "department",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <LuArrowUpDown className="ml-2 h-4 w-4" />
          سمت سازمانی
        </Button>
      );
    },
  },
  {
    accessorKey: "phoneNumber",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <LuArrowUpDown className="ml-2 h-4 w-4" />
          شماره تماس
        </Button>
      );
    },
  },
  {
    accessorKey: "gender",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <LuArrowUpDown className="ml-2 h-4 w-4" />
          جنسیت
        </Button>
      );
    },
    cell(props) {
      return <span>{props.getValue() === "male" ? "مذکر" : "مونث"}</span>;
    },
  },
  {
    accessorKey: "position",
    cell(props) {
      const status = props.getValue() as string;
      return (
        <span
          className={cn(
            status === "فعال"
              ? "bg-green-100 text-green-500"
              : status === "ممنوع"
               ? "bg-red-100 text-red-500"
               : status === "در حال بررسی"
               ? "bg-yellow-100 text-yellow-500"
               : "",

            "p-2 rounded-sm"
          )}
        >
          {status === "فعال"? "فعال" : status === "ممنوع" ? "ممنوع" : status === "در حال بررسی" ? "در حال بررسی" : ""} 

        </span>
      );
    },
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <LuArrowUpDown className="ml-2 h-4 w-4" />
          وضعیت
        </Button>
      );
    },
  },
  {
    id: "actions",
    accessorKey: "id",
    cell: ({ row }) => {
      const deleteRow = useDeleteRows({
        url: "employees",
        queryKey: ["users"],
      });
      const user = row.original;
      return (
        <div className="flex items-center gap-2">
          <ActionsCell
            actions={[{ label: "نمایش جزییات", path: `/users/${user.id}` }]}
          />
          <DeleteDialog
            onConfirm={() => {
              deleteRow.mutate(user.id);
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
