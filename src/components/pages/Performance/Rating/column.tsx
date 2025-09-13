import { DeleteDialog } from "@/components/shared/DeleteDialog";
import StarRating from "@/components/shared/StarRating";
import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { LuArrowUpDown } from "react-icons/lu";
import { Link } from "react-router-dom";

export interface performanceRating extends Record<string, unknown> {
   id: number;
   title: string;
   position: string;
   totalRating: number;
   addedBy: string;
   createdAt: Date;
}

export const columns: ColumnDef<performanceRating>[] = [
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
      accessorKey: "position",
      header: ({ column }) => {
         return (
            <Button
               variant="ghost"
               onClick={() =>
                  column.toggleSorting(column.getIsSorted() === "asc")
               }
            >
               <LuArrowUpDown className="ml-2 h-4 w-4" />
               سمت سازمانی
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
