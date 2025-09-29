import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { LuArrowUpDown } from "react-icons/lu";

export interface GoalType extends Record<string, unknown> {
   id: number;
   purposeType: string;
   createdAt: Date;
}

export const columns: ColumnDef<GoalType>[] = [
   {
      accessorKey: "name",
      header: ({ column }) => {
         return (
            <Button
               variant="ghost"
               onClick={() =>
                  column.toggleSorting(column.getIsSorted() === "asc")
               }
            >
               <LuArrowUpDown className="ml-2 h-4 w-4" />
               انواع هدف
            </Button>
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
