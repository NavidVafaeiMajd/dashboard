import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { LuArrowUpDown } from "react-icons/lu";
import { Link } from "react-router-dom";

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
      header: "عملیات",
      cell: ({ row }) => {
         const r = row.original;
         const monthlySalary = (r.monthlySalary || "0").toString().replace(/[\,\s]/g, "");
         const salary = (r.salary || "0").toString().replace(/[\,\s]/g, "");
         const payDate = new Date(r.payDate).getTime();
         const query = new URLSearchParams({
            employee: String(r.employee),
            monthlySalary,
            salary,
            payDate: String(payDate),
         }).toString();
         return (
            <Link to={`/payslip-history/${r.id}?${query}`}>
               <Button>مشاهده فیش حقوقی</Button>
            </Link>
         );
      },
   },
];
