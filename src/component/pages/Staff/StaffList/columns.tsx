import type { ColumnDef } from "@tanstack/react-table";
import type { User } from "./Table";
import { Button } from "@/components/ui/button";
import { LuArrowUpDown } from "react-icons/lu";

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
               نام
            </Button>
         );
      },
   },
   {
      accessorKey: "position",
      header: ({ column }) => {
         return (
            <Button
               variant="ghost"
               onClick={() =>
                  column.toggleSorting(column.getIsSorted() === "asc")
               }
            >
               <LuArrowUpDown className="ml-2 h-4 w-4" />
               سمت سازمانی
            </Button>
         );
      },
   },
   {
      accessorKey: "phone",
      header: ({ column }) => {
         return (
            <Button
               variant="ghost"
               onClick={() =>
                  column.toggleSorting(column.getIsSorted() === "asc")
               }
            >
               <LuArrowUpDown className="ml-2 h-4 w-4" />
               شماره تماس
            </Button>
         );
      },
   },
   {
      accessorKey: "gender",
      header: ({ column }) => {
         return (
            <Button
               variant="ghost"
               onClick={() =>
                  column.toggleSorting(column.getIsSorted() === "asc")
               }
            >
               <LuArrowUpDown className="ml-2 h-4 w-4" />
               جنسیت
            </Button>
         );
      },
      cell(props) {
         return <span>{props.getValue() === "male" ? "مذکر" : "مونث"}</span>;
      },
   },
   {
      accessorKey: "country",
      header: ({ column }) => {
         return (
            <Button
               variant="ghost"
               onClick={() =>
                  column.toggleSorting(column.getIsSorted() === "asc")
               }
            >
               <LuArrowUpDown className="ml-2 h-4 w-4" />
               کشور
            </Button>
         );
      },
   },
   {
      accessorKey: "accessLevel",
      header: ({ column }) => {
         return (
            <Button
               variant="ghost"
               onClick={() =>
                  column.toggleSorting(column.getIsSorted() === "asc")
               }
            >
               <LuArrowUpDown className="ml-2 h-4 w-4" />
               سطح دسترسی
            </Button>
         );
      },
   },
   {
      accessorKey: "status",
      cell(props) {
         const status = props.getValue() as string;
         return (
            <span>
               {status === "active"
                  ? "فعال"
                  : status === "inactive"
                  ? "غیرفعال"
                  : "در حال بررسی"}
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
               وضعیت
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
      header: "عملیات",
   },
];
