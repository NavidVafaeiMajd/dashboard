import StarRating from "@/components/shared/StarRating";
import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { LuArrowUpDown } from "react-icons/lu";

export interface employeeRating extends Record<string, unknown> {
   id: number;
   title: string;
   employee: string;
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
   },

   {
      accessorKey: "evaluationDate",
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
         const date = new Date(row.getValue("evaluationDate"));
         return date.toLocaleDateString("fa-IR");
      },
   },
   {
      accessorKey: "addedBy",
      header: ({ column }) => {
         return (
            <Button
               variant="ghost"
               onClick={() =>
                  column.toggleSorting(column.getIsSorted() === "asc")
               }
            >
               <LuArrowUpDown className="ml-2 h-4 w-4" />
               اضافه شده توسط
            </Button>
         );
      },
   },
   {
      accessorKey: "totalRating",
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
      accessorKey: "createdAt",
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
                  نمایش جزییات
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
