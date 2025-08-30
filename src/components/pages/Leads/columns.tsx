// import { ColumnDef } from "@tanstack/react-table";

import type { ColumnDef } from "@tanstack/react-table";

// تعریف تایپ BankAccount
export interface Leads  {
  id: string;
  name: string;
  phone: string;
  gender: string;
  country: string;
  status: string;

  [key: string]: string | number | boolean | null;
};

export const columns: ColumnDef<Leads>[] = [
    {
      accessorKey: "id",
      header: "شناسه",
    },
    {
      accessorKey: "name",
      header: "نام",
    },
    {
      accessorKey: "phone",
      header: "تلفن",
    },
    {
      accessorKey: "gender",
      header: "جنسیت",
    },
    {
      accessorKey: "country",
      header: "کشور",
    },
    {
      accessorKey: "status",
      header: "وضعیت",
    },
  ];
