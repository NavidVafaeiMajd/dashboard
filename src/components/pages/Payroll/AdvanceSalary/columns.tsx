import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { LuArrowUpDown } from "react-icons/lu";

export interface AdvanceSalaryColumnProps extends Record<string, unknown> {
   id: string;
   employee: string;
   amount: string;
   installmentMonth: Date;
   oneTimeDeduction: boolean;
   installmentAmount: string;
   createdAt: Date;
}

export const columns: ColumnDef<AdvanceSalaryColumnProps>[] = [
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
      accessorKey: "amount",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            مقدار
         </Button>
      ),
   },
   {
      accessorKey: "installmentMonth",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            ماه شروع تقسیط
         </Button>
      ),

      cell: ({ row }) => {
         const date = new Date(row.getValue("installmentMonth"));
         const parts = new Intl.DateTimeFormat("fa-IR", {
            year: "numeric",
            month: "2-digit",
            calendar: "persian",
         }).formatToParts(date);

         const year = parts.find((p) => p.type === "year")?.value ?? "--";
         const month = parts.find((p) => p.type === "month")?.value ?? "--";

         return `${year}/${month}`;
      },
   },
   {
      accessorKey: "oneTimeDeduction",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            یک بار کسر
         </Button>
      ),

      cell({ row }) {
         return <span>{row.original.oneTimeDeduction ? "بله" : "خیر"}</span>;
      },
   },
   {
      accessorKey: "installmentAmount",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            مبلغ اقساط
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

   {
      id: "actions",
      accessorKey: "id",
      header: "عملیات",
      cell: () => {
         return (
            <div className="flex items-center gap-2">
               <Button
                  variant="outline"
                  size="sm"
               >
                  ویرایش
               </Button>
               <Button
                  variant="destructive"
                  size="sm"
               >
                  حذف
               </Button>
            </div>
         );
      },
   },
];
