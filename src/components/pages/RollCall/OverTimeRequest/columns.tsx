import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { LuArrowUpDown } from "react-icons/lu";

export interface OverTimeRequestColumnProps extends Record<string, unknown> {
   id: number;
   employee: string;
   date: Date;
   entryTime: string;
   exitTime: string;
   totalTime: string;
   status: string;
}

export const OverTimeRequestColumns: ColumnDef<OverTimeRequestColumnProps>[] = [
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
      accessorKey: "date",
      header: ({ column }) => {
         return (
            <Button
               variant="ghost"
               onClick={() =>
                  column.toggleSorting(column.getIsSorted() === "asc")
               }
            >
               <LuArrowUpDown className="ml-2 h-4 w-4" />
               تاریخ
            </Button>
         );
      },
      cell: ({ row }) => {
         const date = new Date(row.getValue("date"));
         return date.toLocaleDateString("fa-IR");
      },
   },
   {
      accessorKey: "entryTime",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            زمان ورود
         </Button>
      ),
   },
   {
      accessorKey: "exitTime",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            زمان خروج
         </Button>
      ),
   },
   {
      accessorKey: "totalTime",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            مجموع ساعت ها
         </Button>
      ),
   },
   {
      accessorKey: "status",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            وضعیت
         </Button>
      ),
   },
   {
      id: "actions",
      accessorKey: "id",
      header: "عملیات",
      cell: () => {
         return (
            <div className="flex items-center gap-2">
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
