import { DeleteDialog } from "@/components/shared/DeleteDialog";
import { EditDialog } from "@/components/shared/EditDialog";
import { Form } from "@/components/shared/Form";
import { Button } from "@/components/ui/button";
import { useDeleteRows } from "@/hook/useDeleteRows";
import { useUpdateRows } from "@/hook/useUpdateRows";
import type { ColumnDef } from "@tanstack/react-table";
import { LuArrowUpDown } from "react-icons/lu";
import { validation } from "./validation";

export interface GoalType extends Record<string, unknown> {
  id: number;
  purposeType: string;
  createdAt: Date;
}

export const columns: ColumnDef<GoalType>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <LuArrowUpDown className="ml-2 h-4 w-4" />
          انواع هدف
        </Button>
      );
    },
  },
  {
    accessorKey: "created_at",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <LuArrowUpDown className="ml-2 h-4 w-4" />
          تاریخ ایجاد
        </Button>
      );
    },
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
      const r = row.original;
      const deleteRow = useDeleteRows({
        url: "goal-types",
        queryKey: ["goal-types"],
      });
      const { mutation } = useUpdateRows(
        `goal-types/${r.id}`,
        ["goal-types"],
        validation,
        " ابلاغیه "
      );
      return (
        <div className="flex items-center gap-2">
          <EditDialog
            title="ویرایش  "
            triggerLabel="ویرایش"
            fields={
              <>
                <Form.Input name="name" label=" انواع هدف " required />
              </>
            }
            defaultValues={{name : r.name as string}}
            onSave={(data) => {
              mutation.mutate(data);
            }}
            schema={validation}
          />
          <DeleteDialog
            onConfirm={() => {
              deleteRow.mutate(r.id as any);
            }}
          />
        </div>
      );
    },
  },
];
