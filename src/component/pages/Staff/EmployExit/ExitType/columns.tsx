import type { ColumnDef } from "@tanstack/react-table";
import type { User } from "./Table";
import { Button } from "@/components/ui/button";
import { LuArrowUpDown } from "react-icons/lu";

export const userColumns: ColumnDef<User>[] = [
  {
    accessorKey: "exitType",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <LuArrowUpDown className="ml-2 h-4 w-4" />
          نوع انفصال
        </Button>
      );
    },
  },
  {
    accessorKey: "exitTime",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <LuArrowUpDown className="ml-2 h-4 w-4" />
          تاریخ ایجاد 
        </Button>
      );
    },
  },
  {
    id: "actions",
    accessorKey: "id",
    cell: () => {
      return (
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            ویرایش
          </Button>
          <Button variant="destructive" size="sm">
            حذف
          </Button>
        </div>
      );
    },
    header: () => {
      return <span className="font-normal">عملیات</span>;
    },
  },
];
