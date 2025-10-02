import StarRating from "@/components/shared/StarRating";
import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { LuArrowUpDown } from "react-icons/lu";
import { Link } from "react-router-dom";
import { DeleteDialog } from "@/components/shared/DeleteDialog";

export interface Employee {
   id: number;
   firstName: string;
   lastName: string;
   phoneNumber: string;
   gender: string;
   personeliCode: string;
   birthDate: string;
   position: string;
   // ... بقیه فیلدها
}


export interface employeeRating extends Record<string, unknown> {
   id: number;
   title: string;
   employee: Employee;
   evaluationDate: Date;
   addedBy: string;
   totalRating: number;
   createdAt: Date;
}

export const columns: ColumnDef<employeeRating>[] = [
   {
      accessorKey: "title",
      header: ({ column }) => {
         return (
            <Button
               variant="ghost"
               onClick={() =>
                  column.toggleSorting(column.getIsSorted() === "asc")
               }
            >
               <LuArrowUpDown className="ml-2 h-4 w-4" />
               عنوان
            </Button>
         );
      },
   },
   {
      accessorKey: "employee",
      header: ({ column }) => {
         return (
            <Button
               variant="ghost"
               onClick={() =>
                  column.toggleSorting(column.getIsSorted() === "asc")
               }
            >
               <LuArrowUpDown className="ml-2 h-4 w-4" />
               کارمند
            </Button>
         );
      },
      cell: ({ row }) => {
        const employee = row.original.employee;
        return `${employee.firstName} ${employee.lastName}`;
      }
    },
   {
      accessorKey: "month",
      header: ({ column }) => {
         return (
            <Button
               variant="ghost"
               onClick={() =>
                  column.toggleSorting(column.getIsSorted() === "asc")
               }
            >
               <LuArrowUpDown className="ml-2 h-4 w-4" />
               تاریخ ارزیابی
            </Button>
         );
      },
      cell: ({ row }) => {
         const date = new Date(row.getValue("month"));
         return date.toLocaleDateString("fa-IR");
      },
   },
   {
      accessorKey: "indicator_average",
      header: ({ column }) => {
         return (
            <Button
               variant="ghost"
               onClick={() =>
                  column.toggleSorting(column.getIsSorted() === "asc")
               }
            >
               <LuArrowUpDown className="ml-2 h-4 w-4" />
               امتیاز کلی
            </Button>
         );
      },

      cell(props) {
         return (
            <StarRating
               readonly
               star={props.getValue() as number}
            />
         );
      },
   },
   {
      accessorKey: "created_at",
      header: ({ column }) => {
         return (
            <Button
               variant="ghost"
               onClick={() =>
                  column.toggleSorting(column.getIsSorted() === "asc")
               }
            >
               <LuArrowUpDown className="ml-2 h-4 w-4" />
               تاریخ ایجاد
            </Button>
         );
      },
      cell: ({ row }) => {
         const date = new Date(row.getValue("created_at"));
         return date.toLocaleDateString("fa-IR");
      },
   },
   {
      id: "actions",
      accessorKey: "id",
      header: "عملیات",
      cell: ({ row }) => {
         const id = row.original.id;
         return (
            <div className="flex items-center gap-2">
               <Button
                  variant="outline"
                  size="sm"
               >
                  <Link to={`${id}`}>نمایش جزییات</Link>
               </Button>
               <DeleteDialog onConfirm={() => {}} />
            </div>
         );
      },
   },
];
