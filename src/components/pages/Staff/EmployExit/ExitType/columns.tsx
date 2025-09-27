import type { ColumnDef } from "@tanstack/react-table";
import type { User } from "./Table";
import { Button } from "@/components/ui/button";
import { LuArrowUpDown } from "react-icons/lu";
import { EditDialog } from "@/components/shared/EditDialog";
import { Form } from "@/components/shared/Form";
import { DeleteDialog } from "@/components/shared/DeleteDialog";
import { useDeleteRows } from "@/hook/useDeleteRows";
import { useUpdateRows } from "@/hook/useUpdateRows";
import { validation } from "./validation";

const defaultValues = {
  name: "",
};

export const userColumns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <LuArrowUpDown className="ml-2 h-4 w-4" />
          نوع انفصال
        </Button>
      );
    },
    cell: ({ row }) => {
      const name = row.getValue("name") as string;
      return (
        <span className="font-medium">{name}</span>
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
      return (
        <span className="text-sm text-gray-600">
          {date.toLocaleDateString("fa-IR")}
        </span>
      );
    },
  },
  {
    accessorKey: "updated_at",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <LuArrowUpDown className="ml-2 h-4 w-4" />
          تاریخ به‌روزرسانی
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("updated_at"));
      return (
        <span className="text-sm text-gray-600">
          {date.toLocaleDateString("fa-IR")}
        </span>
      );
    },
  },
  {
    accessorKey: "id",
    id: "actions",
    header: "عملیات",
    cell: ({ row }) => {
      const rowInf = row.original;
      const deleteRow = useDeleteRows({
        url: "separation-types",
        queryKey: ["separation-types"],
      });
      const { mutation } = useUpdateRows(
        `separation-types/${rowInf.id}`,
        ["separation-types"],
        validation,
        "نوع انفصال"
      );
      return (
        <div className="flex items-center gap-2">
          <EditDialog
            title="ویرایش نوع انفصال"
            triggerLabel="ویرایش"
            fields={
              <>
                <Form.Input
                  name="name"
                  label="نوع انفصال"
                  required
                />
              </>
            }
            defaultValues={defaultValues}
            onSave={(data) => {
              mutation.mutate(data)
            }}
            schema={validation}
          />
          <DeleteDialog
            onConfirm={() => {
              deleteRow.mutate(rowInf.id as number);
            }}
          />
        </div>
      );
    },
  },
];