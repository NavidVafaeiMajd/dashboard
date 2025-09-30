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

export interface BehavioralIndicatorRow extends Record<string, unknown> {
  id: number;
  sorting: string;
  createdAt: Date;
}

export const columns: ColumnDef<BehavioralIndicatorRow>[] = [
  {
    accessorKey: "sorting",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <LuArrowUpDown className="ml-2 h-4 w-4" />
        رفتار سازمانی
      </Button>
    ),
  },
  {
    accessorKey: "createdAt",
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
      const date = new Date(row.getValue("createdAt"));
      return date.toLocaleDateString("fa-IR");
    },
  },
  {
    id: "actions",
    accessorKey: "id",
    header: "عملیات",
    cell: ({ row }) => {
      const r = row.original as BehavioralIndicatorRow;
      const { mutation } = useUpdateRows(
        `indicators/${r.id}`,
        ["indicators/behavioral"],
        validation,
        "واحد سازمانی"
      );
      const deleteRow = useDeleteRows({
        url: "indicators",
        queryKey: ["indicators/behavioral"],
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
                <Form.Input name="name" label="صلاحیت سازمانی" required />
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


