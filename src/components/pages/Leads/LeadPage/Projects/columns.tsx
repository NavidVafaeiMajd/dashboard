import type { ColumnDef } from "@tanstack/react-table";

export interface ProjectsList {
  id: string;
  projectName: string;
  importance: string;
  group: string;
  startDate: string;
  endDate: string;
  progress: number;

   [key: string]: string | number;
}

export const columns: ColumnDef<ProjectsList>[] = [
  {
    accessorKey: "projectName",
    header: "پروژه‌ها",
    cell: ({ row }) => (
      <div className="text-right">{row.getValue("projectName")}</div>
    ),
  },
  {
    accessorKey: "importance",
    header: "اهمیت",
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("importance")}</div>
    ),
  },
  {
    accessorKey: "group",
    header: "گروه",
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("group")}</div>
    ),
  },
  {
    accessorKey: "startDate",
    header: "تاریخ شروع",
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("startDate")}</div>
    ),
  },
  {
    accessorKey: "endDate",
    header: "تاریخ پایان",
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("endDate")}</div>
    ),
  },
  {
    accessorKey: "progress",
    header: "پیشرفت",
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("progress")}</div>
    ),
  },
];
