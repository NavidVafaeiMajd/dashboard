import type { ColumnDef } from "@tanstack/react-table";
import type { TecherInfoType } from "./const";
export const TecherInfoColumns: ColumnDef<TecherInfoType>[] = [
  {
    accessorKey: "name",
    header: "مشخصات مدرس",
    cell: ({ row }) => <div className="text-center">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "lname",
    header: "نام خانوادگی",
    cell: ({ row }) => <div className="text-center">{row.getValue("lname")}</div>,
  },
  {
    accessorKey: "phone",
    header: "شماره تماس",
    cell: ({ row }) => <div className="text-center">{row.getValue("phone")}</div>,
  },
  {
    accessorKey: "email",
    header: "ایمیل",
    cell: ({ row }) => <div className="text-center">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "skills",
    header: "تخصص",
    cell: ({ row }) => <div className="text-center">{row.getValue("skills")}</div>,
  },
  {
    accessorKey: "mark",
    header: "اضافه شده توسط",
    cell: ({ row }) => <div className="text-center">{row.getValue("mark")}</div>,
  },
];
