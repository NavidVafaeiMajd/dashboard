import type { ColumnDef } from "@tanstack/react-table";

export interface SkillsRank {
  skillsType: string;
  creatDate: string;
  [key: string]: string | number;
}



export  const columns: ColumnDef<SkillsRank>[] = [
    {
      accessorKey: "accountType",
      header: "مهارت اموزشی",
      cell: ({ row }) => <div className="text-right">{row.getValue("skillsType")}</div>,
    },
    {
      accessorKey: "accountDate",
      header: "تاریخ ایجاد",
      cell: ({ row }) => <div className="text-center">{row.getValue("creatDate")}</div>,
    },
   
  ];

