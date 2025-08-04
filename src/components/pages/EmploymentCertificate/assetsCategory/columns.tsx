import type { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { LuArrowUpDown } from "react-icons/lu";

export interface AssetsCategoryColumnProps extends Record<string, unknown> {
   id: number;
   bankBranch: string;
   createdAt: Date;
}

export const columns: ColumnDef<AssetsCategoryColumnProps>[] = [
   {
      accessorKey: "bankBranch",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            شعبه بانک
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
