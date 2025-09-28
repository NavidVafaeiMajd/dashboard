import { EditDialog } from "@/components/shared/EditDialog";
import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { LuArrowUpDown } from "react-icons/lu";
import { Form } from "@/components/shared/Form";
import { z } from "zod";
import { DeleteDialog } from "@/components/shared/DeleteDialog";
import { useDeleteRows } from "@/hook/useDeleteRows";

export interface leaveTypeColumnProps extends Record<string, unknown> {
  id: string;
  leave_types: string;
  days_per_year: number;
  requires_approval: string;
}

export const columns: ColumnDef<leaveTypeColumnProps>[] = [
  {
    accessorKey: "type_name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <LuArrowUpDown className="ml-2 h-4 w-4" />
        نوع مرخصی
      </Button>
    ),
  },
  {
    accessorKey: "days_per_year",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <LuArrowUpDown className="ml-2 h-4 w-4" />
        روزها در سال
      </Button>
    ),
  },
  {
    accessorKey: "requires_approval",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <LuArrowUpDown className="ml-2 h-4 w-4" />
        وضعیت
      </Button>
    ),
  },
  {
    accessorKey: "id",
    id: "actions",
    header: "عملیات",

    cell: ({row}) => {
      const deleteRow = useDeleteRows({
        url: "leave-types",
        queryKey: ["leave-types"],
      });
      const leaveType = row.original;
      return (
        <div className="flex items-center gap-2">
          <EditDialog
            onSave={() => {}}
            fields={
              <>
                <Form.Input name="name" label="نوع مرخصی" required />
                <Form.Input name="daysPerYear" label="روزها در سال" required />
                <Form.Select
                  name="requiresApproval"
                  label="نیاز به تایید دارد"
                  options={[{ label: "سازمانی", value: true }]}
                  required
                />
              </>
            }
            defaultValues={{
              name: "",
              daysPerYear: "",
              requiresApproval: "",
            }}
            schema={z.object({
              name: z.string().min(1, "نوع مرخصی الزامی است"),
              daysPerYear: z.string().min(1, "روزها در سال الزامی است"),
              requiresApproval: z
                .string()
                .min(1, "نیاز به تایید دارد الزامی است"),
            })}
          />
          <DeleteDialog
            onConfirm={() => {
              deleteRow.mutate(Number(leaveType.id));
            }}
          />
        </div>
      );
    },
  },
];
