import ProgressBar from "@/components/shared/ProgressBar";
import StarRating from "@/components/shared/StarRating";
import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { LuArrowUpDown } from "react-icons/lu";

export interface trackGoals extends Record<string, unknown> {
   id: number;
   typeOfGoal: string;
   title: string;
   startDate: Date;
   endDate: Date;
   totalRating: number;
   progress: number;
}

export const columns: ColumnDef<trackGoals>[] = [
   {
      accessorKey: "typeOfGoal",
      header: ({ column }) => {
         return (
            <Button
               variant="ghost"
               onClick={() =>
                  column.toggleSorting(column.getIsSorted() === "asc")
               }
            >
               <LuArrowUpDown className="ml-2 h-4 w-4" />
               نوع هدف
            </Button>
         );
      },
   },
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
               موضوع
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
      accessorKey: "endDate",
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
         const date = new Date(row.getValue("endDate"));
         return date.toLocaleDateString("fa-IR");
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
      accessorKey: "progress",
      header: ({ column }) => {
         return (
            <Button
               variant="ghost"
               onClick={() =>
                  column.toggleSorting(column.getIsSorted() === "asc")
               }
            >
               <LuArrowUpDown className="ml-2 h-4 w-4" />
               پیشرفت
            </Button>
         );
      },

      cell(props) {
         return <ProgressBar value={props.getValue() as number} />;
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
