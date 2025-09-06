import type { ColumnDef } from "@tanstack/react-table";
import type { User } from "./Table";
import { Button } from "@/components/ui/button";
import { LuArrowUpDown } from "react-icons/lu";
import { cn } from "@/lib/utils";
import ActionsCell from "@/components/shared/ActionsCell";

export const userColumns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
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
    accessorKey: "position",
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
    accessorKey: "phone",
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
    accessorKey: "status",
    cell(props) {
      const status = props.getValue() as string;
      return (
        <span
          className={cn(
            status === "active"
              ? "bg-green-100 text-green-500"
              : status === "inactive"
              ? "bg-red-100 text-red-500"
              : status === "pending"
              ? "bg-yellow-100 text-yellow-500"
              : "",
            "p-2 rounded-sm"
          )}
        >
          {status === "active"
            ? "فعال"
            : status === "inactive"
            ? "غیرفعال"
            : "در حال بررسی"}
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
      const user = row.original;
      return (
        <ActionsCell
          actions={[
            { label: "نمایش جزییات", path: `/users/${user.id}` },
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
