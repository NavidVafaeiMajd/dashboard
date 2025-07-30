import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { LuArrowUpDown } from "react-icons/lu";

export interface PolicyColumnProps extends Record<string, unknown> {
   id: string;
   title: string;
   startDate: string;
   finishDate: string;
   organizationalUnit: string;
}

export const columns: ColumnDef<PolicyColumnProps>[] = [
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
      accessorKey: "organizationalUnit",
      header: ({ column }) => {
         return (
            <Button
               variant="ghost"
               onClick={() =>
                  column.toggleSorting(column.getIsSorted() === "asc")
               }
            >
               <LuArrowUpDown className="ml-2 h-4 w-4" />
               واحد سازمانی
            </Button>
         );
      },
   },
   {
      accessorKey: "startDate",
      header: ({ column }) => {
         return (
            <Button
               variant="ghost"
               onClick={() =>
                  column.toggleSorting(column.getIsSorted() === "asc")
               }
            >
               <LuArrowUpDown className="ml-2 h-4 w-4" />
               تاریخ شروع
            </Button>
         );
      },
      cell: ({ row }) => {
         const date = new Date(row.getValue("startDate"));
         return date.toLocaleDateString("fa-IR");
      },
   },
   {
      accessorKey: "finishDate",
      header: ({ column }) => {
         return (
            <Button
               variant="ghost"
               onClick={() =>
                  column.toggleSorting(column.getIsSorted() === "asc")
               }
            >
               <LuArrowUpDown className="ml-2 h-4 w-4" />
               تاریخ پایان
            </Button>
         );
      },
            cell: ({ row }) => {
         const date = new Date(row.getValue("finishDate"));
         return date.toLocaleDateString("fa-IR");
      },
   },
   {
      id: "actions",
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
