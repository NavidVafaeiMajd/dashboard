import { DeleteDialog } from "@/components/shared/DeleteDialog";
import { EditDialog } from "@/components/shared/EditDialog";
import { Form } from "@/components/shared/Form";
import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { LuArrowUpDown } from "react-icons/lu";
import { z } from "zod";

export interface organizationUnitColumnProps extends Record<string, unknown> {
  id: number;
  name: string;
  unitBoss: string;
  createdAt: Date;
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
    accessorKey: "unitBoss",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <LuArrowUpDown className="ml-2 h-4 w-4" />
          رئیس واحد
        </Button>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "تاریخ ایجاد",
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"));
      return date.toLocaleDateString("fa-IR");
    },
  },
  {
    accessorKey: "id",
    id: "actions",
    header: "عملیات",

    cell: () => {
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
          <DeleteDialog onConfirm={() => {}} />
        </div>
      );
    },
  },
];
