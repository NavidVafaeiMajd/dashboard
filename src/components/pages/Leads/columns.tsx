// import { ColumnDef } from "@tanstack/react-table";

// تعریف تایپ BankAccount
export type BankAccount = {
  id: string;
  name: string;
  phone: string;
  gender: string;
  country: string;
  status: string;
};

// ستون‌ها برای DataTable
export const useBankColumns = () => {
  const columns= [
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

  return { columns };
};
