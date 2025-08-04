import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { LuArrowUpDown } from "react-icons/lu";

export interface PayrollListColumnProps extends Record<string, unknown> {
   id: string;
   employee: string;
   employeeId: string;
   type: string;
   monthlySalary: string;
   salary: string;
   status: string;
}

export const columns: ColumnDef<PayrollListColumnProps>[] = [
   {
      accessorKey: "employee",
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
      accessorKey: "employeeId",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            کد پرسنلی
         </Button>
      ),
   },
   {
      accessorKey: "type",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            نوع فیش حقوقی
         </Button>
      ),
   },
   {
      accessorKey: "monthlySalary",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            دستمزد ماهیانه
         </Button>
      ),
   },
   {
      accessorKey: "salary",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            حقوق خالص
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
            وضعیت
         </Button>
      ),
   },
   {
      id: "actions",
      accessorKey: "id",
      header: "عملیات",
      cell: () => {
         return (
            <div className="flex items-center gap-2">
               <Button>پرداخت</Button>
            </div>
         );
      },
   },
];
