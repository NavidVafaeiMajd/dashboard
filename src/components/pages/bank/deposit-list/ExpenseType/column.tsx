import type { ColumnDef } from "@tanstack/react-table";

export interface ExpenseTypeColumnProps {
    name: string;
    createdAt:  Date;
    [key: string]: string | Date;
}

export const columns: ColumnDef<ExpenseTypeColumnProps >[] = [
    {
        header: "دسته بندی",
        accessorKey: "name",
    },
    {
        header: "تاریخ ایجاد",
        accessorKey: "createdAt",
        cell: ({ row }) => {
            const date = new Date(row.getValue("createdAt"));
            return date.toLocaleDateString("fa-IR");
        },
    },
];
