import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { LuArrowUpDown } from "react-icons/lu";

export interface DisciplinaryFile {
   id: number;
   employee: string;
   violationType: string;
   violationDate: Date;
   severity: string;
   action: string;
   status: string;
}

export const disciplinaryColumns: ColumnDef<DisciplinaryFile>[] = [
   {
      accessorKey: "employee",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            کارمند
         </Button>
      ),
   },
   {
      accessorKey: "violationType",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            نوع تخلف
         </Button>
      ),
   },
   {
      accessorKey: "violationDate",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            تاریخ تخلف
         </Button>
      ),
      cell: ({ row }) => {
         const date = row.getValue("violationDate") as Date;
         return date.toLocaleDateString("fa-IR");
      },
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
      accessorKey: "action",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            اقدام انضباطی
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
      cell: ({ row }) => {
         const status = row.getValue("status") as string;
         return (
            <span
               className={`px-2 py-1 rounded-full text-xs font-medium ${
                  status === "باز"
                     ? "bg-yellow-100 text-yellow-800"
                     : "bg-green-100 text-green-800"
               }`}
            >
               {status}
            </span>
         );
      },
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
