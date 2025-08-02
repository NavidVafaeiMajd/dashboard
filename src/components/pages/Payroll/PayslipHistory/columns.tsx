import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { LuArrowUpDown } from "react-icons/lu";

export interface PayslipHistoryColumnProps extends Record<string, unknown> {
   id: string;
   employee: string;
   monthlySalary: string;
   salary: string;
   payDate: Date;
}

export const columns: ColumnDef<PayslipHistoryColumnProps>[] = [
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
      accessorKey: "salary",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            پرداخت خالص
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
      accessorKey: "payDate",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            تاریخ پرداخت
         </Button>
      ),
      cell: ({ row }) => {
         const date = new Date(row.getValue("payDate"));
         return date.toLocaleDateString("fa-IR");
      },
   },
   {
      id: "actions",
      accessorKey: "id",
      header: "عملیات",
      cell: () => {
         return (
            <div className="flex items-center gap-2">
               <Button>مشاهده فیش حقوقی</Button>
            </div>
         );
      },
   },
];
