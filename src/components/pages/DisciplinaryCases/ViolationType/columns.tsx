import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { LuArrowUpDown } from "react-icons/lu";
import { EditDialog } from "@/components/shared/EditDialog";
import { DeleteDialog } from "@/components/shared/DeleteDialog";
import { Form } from "@/components/shared/Form";
import { z } from "zod";
import { useDeleteRows } from "@/hook/useDeleteRows";
import { useUpdateRows } from "@/hook/useUpdateRows";

export interface violationTypeColumnProps extends Record<string, unknown> {
  id: string;
  name: string;
}
const validation = z.object({ name: z.string().min(1, "نام الزامی است") });

export const columns: ColumnDef<violationTypeColumnProps>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <LuArrowUpDown className="ml-2 h-4 w-4" />
        نوع پرونده
      </Button>
    ),
  },
  {
    accessorKey: "created_at",
    header: "تاریخ ایجاد",
    cell: ({ row }) => {
      const value = row.getValue("created_at") as string;
      const date = new Date(value);

      return date.toLocaleDateString("fa-IR");
    },
  },
  {
    id: "actions",
    header: "عملیات",
    cell: ({ row }) => {
      const r = row.original;
      const deleteRow = useDeleteRows({
        url: "disciplinary-cases",
        queryKey: ["disciplinary-cases"],
      });
      const { mutation } = useUpdateRows(
        `disciplinary-types/${r.id}`,
        ["disciplinary-types"],
        validation,
        "واحد سازمانی"
      );
      return (
        <div className="flex items-center gap-2">
          <EditDialog
            title="ویرایش نوع پرونده"
            triggerLabel="ویرایش"
            defaultValues={{ name: String((r as any).name || "") }}
            schema={validation}
            onSave={(vals) => {
              mutation.mutate(vals)
            }}
            fields={
              <>
                <Form.Input name="name" label="نوع پرونده" required />
              </>
            }
          />
          <DeleteDialog
            onConfirm={() => {
              deleteRow.mutate(Number(r.id));
            }}
          />
        </div>
      );
    },
  },
];
