import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { LuArrowUpDown } from "react-icons/lu";

export interface leaveTypeColumnProps extends Record<string, unknown> {
   id: string;
   name: string;
   daysPerYear: number;
   requiresApproval: string;
}

export const columns: ColumnDef<leaveTypeColumnProps>[] = [
   {
      accessorKey: "name",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            نوع مرخصی
         </Button>
      ),
   },
   {
      accessorKey: "daysPerYear",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            روزها در سال
         </Button>
      ),
   },
   {
      accessorKey: "requiresApproval",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            نیاز به تایید دارد
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
