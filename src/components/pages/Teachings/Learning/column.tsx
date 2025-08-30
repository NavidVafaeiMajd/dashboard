
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import type { ColumnDef } from "@tanstack/react-table";

// export interface BankAccount {
//   id: string;
//   accountType: string;
//   accountDate: string;
//   typemoney: string;
//   count: number;
// }

// export const LearningRecord = () => {
//   // const [selectedAccount, setSelectedAccount ] = useState<BankAccount | null>(null);
//   const columns: ColumnDef<BankAccount>[] = [
//     {
//       accessorKey: "skillslearn",
//       header: "مهارت آموزشی   ",
//       cell: ({ row }) => <div className="text-right">{row.getValue("accountType")}</div>,
//     },
//     {
//       accessorKey: "infoTecher",
//       header: "	مشخصات مدرس	",
//       cell: ({ row }) => <div className="text-center">{row.getValue("accountDate")}</div>,
//     },
//     {
//       accessorKey: "entry-time",
//       header: " تاریخ شروع	 ",
//       cell: ({ row }) => (
//         <div className="text-center">{row.getValue("typemoney")} </div>
//       ),
//     },
//     {
//       accessorKey: "exit-time",
//       header: "تاریخ پایان	 ",
//       cell: ({ row }) => <div className="text-center">{row.getValue("count")}</div>,
//     },
//     {
//       accessorKey: "infoTecher",
//       header: "  پرسنل ",
//       cell: ({ row }) => <div className="text-center">{row.getValue("count")}</div>,
//     },
//     {
//       accessorKey: "priceLearn",
//       header: " آموزش	هزینه  	 ",
//       cell: ({ row }) => <div className="text-center">{row.getValue("count")}</div>,
//     },
//     {
//       accessorKey: "status",
//       header: "		وضعیت  	 ",
//       cell: ({ row }) => <div className="text-center">{row.getValue("count")}</div>,
//     },
  
//   ];


// };



import { useState } from "react";
import type { ColumnDef } from "@tanstack/react-table";

// تعریف نوع LearningRecordType
export interface LearningRecordType {
  id: string;
  infoTecher: string;
  skillslearn: string;
  priceLearn: string;
  status: string;
  "entry-time": string;
  "exit-time": string;
  text: string;
}

export const LearningRecordColumns: ColumnDef<LearningRecordType>[] = [
  {
    accessorKey: "infoTecher",
    header: "مشخصات مدرس",
    cell: ({ row }) => <div className="text-center">{row.getValue("infoTecher")}</div>,
  },
  {
    accessorKey: "skillslearn",
    header: "مهارت آموزشی",
    cell: ({ row }) => <div className="text-center">{row.getValue("skillslearn")}</div>,
  },
  {
    accessorKey: "priceLearn",
    header: "هزینه آموزش",
    cell: ({ row }) => <div className="text-center">{row.getValue("priceLearn")}</div>,
  },
  {
    accessorKey: "status",
    header: "پرسنل",
    cell: ({ row }) => <div className="text-center">{row.getValue("status")}</div>,
  },
  {
    accessorKey: "entry-time",
    header: "تاریخ شروع",
    cell: ({ row }) => <div className="text-center">{row.getValue("entry-time")}</div>,
  },
  {
    accessorKey: "exit-time",
    header: "تاریخ پایان",
    cell: ({ row }) => <div className="text-center">{row.getValue("exit-time")}</div>,
  },
  {
    accessorKey: "text",
    header: "شرح",
    cell: ({ row }) => <div className="text-center">{row.getValue("text")}</div>,
  },
];
