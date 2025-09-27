import type { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { LuArrowUpDown } from "react-icons/lu";

export interface AttendanceListColumnProps extends Record<string, unknown> {
   id: number;
   employee: string;
   date: Date;
   status: string;
   entryTime: string;
   exitTime: string;
   tardiness: string;
   earlyLeave: string;
   totalHours: string;
}

export const columns: ColumnDef<AttendanceListColumnProps>[] = [
   {
      accessorKey: "full_name",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            کارمند
         </Button>
      ),
   },
   {
      accessorKey: "date",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            تاریخ
         </Button>
      ),
      cell: ({ row }) => {
         const date = new Date(row.getValue("date"));
         return date.toLocaleDateString("fa-IR");
      },
   },
   {
      accessorKey: "status",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            وضعیت
         </Button>
      ),
   },
   {
      accessorKey: "check_in",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            زمان ورود
         </Button>
      ),
   },
   {
      accessorKey: "check_out",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            زمان خروج
         </Button>
      ),
   },
   {
      accessorKey: "late",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            تاخیر
         </Button>
      ),
   },
   {
      accessorKey: "early_leave",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            ترک زودهنگام
         </Button>
      ),
   },
   {
      accessorKey: "total_work",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            مجموع کار
         </Button>
      ),
   },
];
