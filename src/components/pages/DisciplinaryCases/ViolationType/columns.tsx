import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { LuArrowUpDown } from "react-icons/lu";

export interface violationTypeColumnProps extends Record<string, unknown> {
   id: string;
   name: string;
   severity: string;
   defaultAction: string;
   description?: string;
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
            نام نوع تخلف
         </Button>
      ),
   },
   {
      accessorKey: "severity",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            شدت تخلف
         </Button>
      ),
   },
   {
      accessorKey: "defaultAction",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            اقدام پیش‌فرض
         </Button>
      ),
   },
   {
      accessorKey: "description",
      header: "توضیحات",
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
