import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { LuArrowUpDown } from "react-icons/lu";
import { EditDialog } from "@/components/shared/EditDialog";
import { DeleteDialog } from "@/components/shared/DeleteDialog";
import { Form } from "@/components/shared/Form";
import { z } from "zod";

export interface TechnicalIndicatorRow extends Record<string, unknown> {
  id: number;
  sorting: string;
  createdAt: Date;
}

export const columns: ColumnDef<TechnicalIndicatorRow>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <LuArrowUpDown className="ml-2 h-4 w-4" />
        صلاحیت فنی
      </Button>
    ),
  },
  {
    accessorKey: "created_at",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <LuArrowUpDown className="ml-2 h-4 w-4" />
        تاریخ ایجاد
      </Button>
    ),
    cell: ({ row }) => {
      const date = new Date(row.getValue("created_at"));
      return date.toLocaleDateString("fa-IR");
    },
  },
  {
    id: "actions",
    accessorKey: "id",
    header: "عملیات",
    cell: ({ row }) => {
      const r = row.original as TechnicalIndicatorRow;
      return (
        <div className="flex items-center gap-2">
          <EditDialog
            title="ویرایش"
            triggerLabel="ویرایش"
            defaultValues={{ sorting: String(r.sorting || "") }}
            schema={z.object({ sorting: z.string().min(1, "فیلد الزامی است") })}
            onSave={(vals) => {
              console.log("save technical indicator", r.id, vals);
            }}
            fields={
              <>
                <Form.Input name="sorting" label="صلاحیت فنی" required />
              </>
            }
          />
          <DeleteDialog onConfirm={() => console.log("delete technical indicator", r.id)} />
        </div>
      );
    },
  },
];


