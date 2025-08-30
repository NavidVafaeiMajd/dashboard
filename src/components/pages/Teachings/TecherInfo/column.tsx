
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import type { ColumnDef } from "@tanstack/react-table";

// export interface TecherInfo {
//   name: string;
//   lname: string;
//   phone: string;
//   email: string;
//   skills: number;
//   location: string;
// }

// /*

//        name: "",
//             lname: "",
//             phone: "",
//             email: "",
//             skills: "",
//             location: "",

// */

// export const useBankColumns = () => {
//   const columns: ColumnDef<TecherInfo>[] = [
//     {
//       accessorKey: "مشخصات مدرس",
//       header: "نوع حساب بانکی",
//       cell: ({ row }) => <div className="text-right">{row.getValue("accountType")}</div>,
//     },
//     {
//       accessorKey: "accountDate",
//       header: "	شماره تماس",
//       cell: ({ row }) => <div className="text-center">{row.getValue("accountDate")}</div>,
//     },
//     {
//       accessorKey: "typemoney",
//       header: "	ایمیل ",
//       cell: ({ row }) => (
//         <div className="text-center">{row.getValue("typemoney")} </div>
//       ),
//     },
//     {
//       accessorKey: "count",
//       header: "	تخصص",
//       cell: ({ row }) => <div className="text-center">{row.getValue("count")}</div>,
//     },
//     {
//       accessorKey: "count",
//       header: "	 اضافه شده توسط",
//       cell: ({ row }) => <div className="text-center">{row.getValue("count")}</div>,
//     },

//   ];


// };


import type { ColumnDef } from "@tanstack/react-table";

export interface LearningRecordType {
  name: string,
  lname: string
  phone: number,
  email: string,
  skills: string,
  mark: string,
}
export const TecherInfoColumns: ColumnDef<LearningRecordType>[] = [
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
