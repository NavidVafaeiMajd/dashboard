import type { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { LuArrowUpDown } from "react-icons/lu";

export interface AssetsListColumnProps extends Record<string, unknown> {
   id: number;
   name: string;
   bankName: string;
   bankBranch: string;
   nationalId: string;
   status: string;
   employeeName: string;
   createdAt: Date;
}

export const columns: ColumnDef<AssetsListColumnProps>[] = [
   {
      accessorKey: "name",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            عنوان
         </Button>
      ),
   },

   {
      accessorKey: "bankName",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            بانک
         </Button>
      ),
   },
   {
      accessorKey: "bankBranch",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            شعبه بانک
         </Button>
      ),
   },
   {
      accessorKey: "nationalId",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            کد ملی
         </Button>
      ),
   },
   {
      accessorKey: "status",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            وضعیت استخدام
         </Button>
      ),
   },
   {
      accessorKey: "employeeName",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            نام کارمند
         </Button>
      ),
   },
   {
      accessorKey: "createdAt",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            تاریخ ایجاد
         </Button>
      ),
      cell: ({ row }) => {
         const date = new Date(row.getValue("createdAt"));
         return date.toLocaleDateString("fa-IR");
      },
   },
];
