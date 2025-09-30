import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { LuArrowUpDown } from "react-icons/lu";
import { EditDialog } from "@/components/shared/EditDialog";
import { DeleteDialog } from "@/components/shared/DeleteDialog";
import { Form } from "@/components/shared/Form";
import { z } from "zod";
import { useUpdateRows } from "@/hook/useUpdateRows";
import { validation } from "../validation";
import { useDeleteRows } from "@/hook/useDeleteRows";

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
      const { mutation } = useUpdateRows(
        `indicators/${r.id}`,
        ["indicators/technical"],
        validation,
        "واحد سازمانی"
      );
      const deleteRow = useDeleteRows({
        url: "indicators",
        queryKey: ["indicators/technical"],
      });

      return (
        <div className="flex items-center gap-2">
          <EditDialog
            title="ویرایش"
            triggerLabel="ویرایش"
            defaultValues={{ name: String(r.name || "") }}
            schema={z.object({ name: z.string().min(1, "فیلد الزامی است") })}
            onSave={(data) => {
              console.log(data)
              mutation.mutate(data)
            }}
            fields={
              <>
                <Form.Input name="name"  label="صلاحیت فنی" required />
              </>
            }
          />
          <DeleteDialog
            onConfirm={() => {
              deleteRow.mutate(r.id as number);
            }}
          />
        </div>
      );
    },
  },
];


