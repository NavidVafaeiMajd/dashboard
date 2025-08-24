import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { LuArrowUpDown } from "react-icons/lu";

export interface violationTypeColumnProps extends Record<string, unknown> {
   id: string;
   name: string;
}

export const columns: ColumnDef<violationTypeColumnProps>[] = [
   {
      accessorKey: "name",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            نوع پرونده
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
            تاریخ ایجاد
         </Button>
      ),
   },
   {
      accessorKey: "id",
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
