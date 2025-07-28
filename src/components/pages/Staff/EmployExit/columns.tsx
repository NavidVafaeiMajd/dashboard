import type { ColumnDef } from "@tanstack/react-table";
import type { User } from "./Table";
import { Button } from "@/components/ui/button";
import { LuArrowUpDown } from "react-icons/lu";

export const userColumns: ColumnDef<User>[] = [
  {
    accessorKey: "user",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <LuArrowUpDown className="ml-2 h-4 w-4" />
          کارمند برای انفصال
        </Button>
      );
    },
    cell(props) {
      const status = props.getValue() as {
        img: string;
        name: string;
        email: string;
       };
       
       return (
          <div className="flex gap-3 items-center">
             <span ><img className="w-15 rounded-full" src={status.img} alt={status.name} /></span>
             <span>
                <h2>{status.name}</h2>
                <p>{ status.email}</p>
             </span>
          </div>
       )
    },
  },
  {
    accessorKey: "exitType",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <LuArrowUpDown className="ml-2 h-4 w-4" />
          نوع انفصال
        </Button>
      );
    },
  },
  {
    accessorKey: "exitTime",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <LuArrowUpDown className="ml-2 h-4 w-4" />
          تاریخ انفصال کارمند
        </Button>
      );
    },
  },
  {
    accessorKey: "meeting",
    cell(props) {
      const status = props.getValue() as boolean;
      return <span>{status === true ? "بله" : "خیر"}</span>;
    },
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <LuArrowUpDown className="ml-2 h-4 w-4" />
          تشکیل جلسه کمیته انضباطی
        </Button>
      );
    },
  },
  {
    accessorKey: "acouuntdis",
    cell(props) {
      const status = props.getValue() as boolean;
      return <span>{status === true ? "بله" : "خیر"}</span>;
    },
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <LuArrowUpDown className="ml-2 h-4 w-4" />
          غیرفعال کردن اکانت
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
          <Button variant="outline" size="sm">
            ویرایش
          </Button>
          <Button variant="destructive" size="sm">
            حذف
          </Button>
          <Button variant="default" size="sm">
            مشاهده
          </Button>
        </div>
      );
    },
    header: () => {
      return <span className="font-normal">عملیات</span>;
    },
  },
];
