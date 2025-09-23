import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { LuArrowUpDown } from "react-icons/lu";
import { EditDialog } from "@/components/shared/EditDialog";
import { Form } from "@/components/shared/Form";
import { z } from "zod";
import { DeleteDialog } from "@/components/shared/DeleteDialog";
import { useDepartments } from "@/hook/useDepartments";
import { useDeleteRows } from "@/hook/useDeleteRows";
import { useUpdateRows } from "@/hook/useUpdateRows";
export interface designationColumnProps extends Record<string, unknown> {
  department_id: string;
  title: string;
  description?: string | undefined;
}

const defaultValues = {
  department_id: "",
  title: "",
  description: "",
};

const validation = z.object({
  department_id: z.string().min(1, "واحد سازمانی الزامی است"),
  title: z.string().min(1, "نام سمت سازمانی الزامی است"),
  description: z.string().optional(),
});

export const columns: ColumnDef<designationColumnProps>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <LuArrowUpDown className="ml-2 h-4 w-4" />
        نام سمت سازمانی
      </Button>
    ),
  },
  {
    accessorKey: "department_id",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <LuArrowUpDown className="ml-2 h-4 w-4" />
        واحد سازمانی
      </Button>
    ),
     cell: ({ row }) => {
      const { data: departments } = useDepartments();
      const rowData = row.original;
      const department = departments?.data?.find(
        (item) => item?.id === rowData.department_id
      );

      return department ? department.name : "-";
    },
  },

  {
    accessorKey: "id",
    id: "actions",
    header: "عملیات",

     cell: ({ row }) => {

      const { data: departments } = useDepartments();
      const rowInf = row.original;
      const deleteRow = useDeleteRows({
        url: "designations",
        queryKey: ["designations"],
      });
      const { mutation } = useUpdateRows(
         `designations/${rowInf.id}`,
         ["designations"],
         validation,
         "واحد سازمانی"
       );
      return (
        <div className="flex items-center gap-2">
            <EditDialog
            
            title="ویرایش  "
            triggerLabel="ویرایش"
            fields={
              <>
                <Form.Select name="department_id" label="واحد سازمانی" required>
                  {departments?.data?.map((dept, index) => (
                    <Form.SelectItem key={index} value={String(dept.id)}>
                      {dept.name || dept.title || dept.department_name}
                    </Form.SelectItem>
                  ))}
                </Form.Select>
                <Form.Input
                  name="title"
                  label="نام سمت سازمانی"
                  required
                />
                <Form.Textarea name="description" label="شرح" />
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
