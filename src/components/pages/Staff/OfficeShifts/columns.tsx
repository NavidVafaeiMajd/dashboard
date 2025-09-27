import type { ColumnDef } from "@tanstack/react-table";
import type { User } from "./Table";
import { Button } from "@/components/ui/button";
import { LuArrowUpDown } from "react-icons/lu";
import { cn } from "@/lib/utils";

export const userColumns: ColumnDef<User>[] = [
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
               شیفت
            </Button>
         );
      },
   },
   {
      accessorKey: "saturday",
      cell(props) {
         const status = props.getValue();
         return (
            <span
               className={cn(
                  status === "تعطیل"
                     ? "bg-green-100 text-green-500"
                     : "",
                  "p-2 rounded-sm"
               )}
            >
               {status === "تعطیل" 
                  ? "تعطیلات"
                  : `${status}` }
            </span>
         );
      },
      header: ({ column }) => {
         return (
            <Button
               variant="ghost"
               onClick={() =>
                  column.toggleSorting(column.getIsSorted() === "asc")
               }
            >
               <LuArrowUpDown className="ml-2 h-4 w-4" />
               شنبه
            </Button>
         );
      },
   },
      {
      accessorKey: "sunday",
      cell(props) {
         const status = props.getValue();
         return (
            <span
               className={cn(
                  status === "تعطیل"
                     ? "bg-green-100 text-green-500"
                     : "",
                  "p-2 rounded-sm"
               )}
            >
               {status === "تعطیل" 
                  ? "تعطیلات"
                  : `${status}` }
            </span>
         );
      },
      header: ({ column }) => {
         return (
            <Button
               variant="ghost"
               onClick={() =>
                  column.toggleSorting(column.getIsSorted() === "asc")
               }
            >
               <LuArrowUpDown className="ml-2 h-4 w-4" />
               یکشنبه
            </Button>
         );
      },
   },
   {
      accessorKey: "monday",
      cell(props) {
         const status = props.getValue();
         return (
            <span
               className={cn(
                  status === "تعطیل"
                     ? "bg-green-100 text-green-500"
                     : "",
                  "p-2 rounded-sm"
               )}
            >
               {status === "تعطیل" 
                  ? "تعطیلات"
                  : `${status}` }
            </span>
         );
      },
      header: ({ column }) => {
         return (
            <Button
               variant="ghost"
               onClick={() =>
                  column.toggleSorting(column.getIsSorted() === "asc")
               }
            >
               <LuArrowUpDown className="ml-2 h-4 w-4" />
               دوشنبه
            </Button>
         );
      },
   },
      {
      accessorKey: "tuesday",
      cell(props) {
         const status = props.getValue();
         return (
            <span
               className={cn(
                  status === "تعطیل"
                     ? "bg-green-100 text-green-500"
                     : "",
                  "p-2 rounded-sm"
               )}
            >
               {status === "تعطیل" 
                  ? "تعطیلات"
                  : `${status}` }
            </span>
         );
      },
      header: ({ column }) => {
         return (
            <Button
               variant="ghost"
               onClick={() =>
                  column.toggleSorting(column.getIsSorted() === "asc")
               }
            >
               <LuArrowUpDown className="ml-2 h-4 w-4" />
               سه‌شنبه
            </Button>
         );
      },
   },
      {
      accessorKey: "wednesday",
      cell(props) {
         const status = props.getValue();
         return (
            <span
               className={cn(
                  status === "تعطیل"
                     ? "bg-green-100 text-green-500"
                     : "",
                  "p-2 rounded-sm"
               )}
            >
               {status === "تعطیل" 
                  ? "تعطیلات"
                  : `${status}` }
            </span>
         );
      },
      header: ({ column }) => {
         return (
            <Button
               variant="ghost"
               onClick={() =>
                  column.toggleSorting(column.getIsSorted() === "asc")
               }
            >
               <LuArrowUpDown className="ml-2 h-4 w-4" />
               چهارشنبه
            </Button>
         );
      },
   },
      {
      accessorKey: "thursday",
      cell(props) {
         const status = props.getValue();
         return (
            <span
               className={cn(
                  status === "تعطیل"
                     ? "bg-green-100 text-green-500"
                     : "",
                  "p-2 rounded-sm"
               )}
            >
               {status === "تعطیل" 
                  ? "تعطیلات"
                  : `${status}` }
            </span>
         );
      },
      header: ({ column }) => {
         return (
            <Button
               variant="ghost"
               onClick={() =>
                  column.toggleSorting(column.getIsSorted() === "asc")
               }
            >
               <LuArrowUpDown className="ml-2 h-4 w-4" />
               پنجشنبه
            </Button>
         );
      },
   },
      {
      accessorKey: "friday",
      cell(props) {
         const status = props.getValue();
         return (
            <span
               className={cn(
                  status === "تعطیل"
                     ? "bg-green-100 text-green-500"
                     : "",
                  "p-2 rounded-sm"
               )}
            >
               {status === "تعطیل" 
                  ? "تعطیلات"
                  : `${status}` }
            </span>
         );
      },
      header: ({ column }) => {
         return (
            <Button
               variant="ghost"
               onClick={() =>
                  column.toggleSorting(column.getIsSorted() === "asc")
               }
            >
               <LuArrowUpDown className="ml-2 h-4 w-4" />
               جمعه
            </Button>
         );
      },
   },

   {
      id: "actions",
      accessorKey: "id",
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
      header: () => {
         return <span className="font-normal">عملیات</span>;
      },
   },
];
