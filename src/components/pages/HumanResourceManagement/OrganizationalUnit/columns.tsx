import { DeleteDialog } from "@/components/shared/DeleteDialog";
import { EditDialog } from "@/components/shared/EditDialog";
import { Form } from "@/components/shared/Form";
import { Button } from "@/components/ui/button";
import { useDeleteRows } from "@/hook/useDeleteRows";
import type { ColumnDef } from "@tanstack/react-table";
import { LuArrowUpDown } from "react-icons/lu";
import { z } from "zod";

export interface organizationUnitColumnProps extends Record<string, unknown> {
  id: number;
  name: string;
  created_at: Date;
}

const defaultValues = {
   name: "",
   unitBoss: "",
};

const validation = z.object({
   name: z.string().min(1, "نام واحد سازمانی الزامی است"),
   unitBoss: z.string().min(1, "رئیس واحد الزامی است"),
});

export const columns: ColumnDef<organizationUnitColumnProps>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <LuArrowUpDown className="ml-2 h-4 w-4" />
          نام واحد سازمانی
        </Button>
      );
    },
  },
  {
    accessorKey: "created_at",
    header: "تاریخ ایجاد",
    cell: ({ row }) => {
      const rawDate = row.getValue("created_at") as string | null;
  
      if (!rawDate) return "-"; 
  
      const date = new Date(rawDate.replace(" ", "T"));
      return date.toLocaleDateString("fa-IR"); 
    },
  },
  
  {
    accessorKey: "id",
    id: "actions",
    header: "عملیات",

    cell: ({row}) => {
      const user = row.original;
      const deleteRow = useDeleteRows({
        url: "departments",
        queryKey: ["departments"],
      });
      return (
        <div className="flex items-center gap-2">
          
          <EditDialog
            title="ویرایش  "
            triggerLabel="ویرایش"
            fields={
              <>
                <Form.Input name="name" label="نام  " required />
                <Form.Select name="unitBoss" label=" رئیس واحد " required>
                  <Form.SelectItem value="1">استحقاقی</Form.SelectItem>
                  <Form.SelectItem value="2">استعلاجی</Form.SelectItem>
                  <Form.SelectItem value="3">بدون حقوق</Form.SelectItem>
                  <Form.SelectItem value="4">سایر</Form.SelectItem>
                  </Form.Select>
              </>
            }
            defaultValues={defaultValues}
            onSave={(data) => {
              console.log(data);
            }}
            schema={validation}
          />
                    <DeleteDialog
            onConfirm={() => {
              deleteRow.mutate(user.id);
            }}
          />
        </div>
      );
    },
  },
];
