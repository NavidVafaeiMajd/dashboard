import type { ColumnDef } from "@tanstack/react-table";
import { EditDialog } from "@/components/shared/EditDialog";
import { Form } from "@/components/shared/Form";
import { z } from "zod";
import { DeleteDialog } from "@/components/shared/DeleteDialog";
import { useDeleteRows } from "@/hook/useDeleteRows";
import { useUpdateRows } from "@/hook/useUpdateRows";
export interface SkillsRank {
  name: string;
  created_at: string;
  [key: string]: string | number;
}

const validation = z.object({
  name: z.string().min(1, "مهارت اموزشی الزامی است"),
});

export const columns: ColumnDef<SkillsRank>[] = [
  {
    accessorKey: "name",
    header: "مهارت اموزشی",
    cell: ({ row }) => <div className="text-right">{row.getValue("name")}</div>,
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
        url: "skills",
        queryKey: ["skills"],
      });
      const { mutation } = useUpdateRows(
        `skills/${r.id}`,
        ["skills"],
        validation,
        "نوع تخلف "
      );
      return (
        <div className="flex items-center gap-2">
          <EditDialog
            onSave={(data) => {
              mutation.mutate(data)
            }}
            fields={
              <>
                <Form.Input name="name" label="مهارت اموزشی" required />
              </>
            }
            defaultValues={{
              name: "",
            }}
            schema={validation}
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
