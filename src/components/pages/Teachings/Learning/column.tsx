import type { ColumnDef } from "@tanstack/react-table";

export interface LearningRecordType {
  id: string;
  infoTecher: string;
  skillslearn: string;
  priceLearn: string;
  status: string;
  "entry-time": string;
  "exit-time": string;
  text: string;
  [key: string]: string | number;
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
