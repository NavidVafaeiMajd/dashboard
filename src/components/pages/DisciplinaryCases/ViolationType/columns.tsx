import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { LuArrowUpDown } from "react-icons/lu";
import { EditDialog } from "@/components/shared/EditDialog";
import { DeleteDialog } from "@/components/shared/DeleteDialog";
import { Form } from "@/components/shared/Form";
import { z } from "zod";

export interface violationTypeColumnProps extends Record<string, unknown> {
   id: string;
   name: string;
}

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
      accessorKey: "date",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            تاریخ ایجاد
         </Button>
      ),
   },
   {
      accessorKey: "id",
      id: "actions",
      header: "عملیات",
      cell: ({ row }) => {
         const r = row.original;
         return (
            <div className="flex items-center gap-2">
               <EditDialog
                  title="ویرایش نوع پرونده"
                  triggerLabel="ویرایش"
                  defaultValues={{ name: String((r as any).name || "") }}
                  schema={z.object({ name: z.string().min(1, "نام الزامی است") })}
                  onSave={(vals) => {
                     console.log("save violation type", r.id, vals);
                  }}
                  fields={
                     <>
                        <Form.Input name="name" label="نوع پرونده" required />
                     </>
                  }
               />
               <DeleteDialog onConfirm={() => console.log("delete violation type", r.id)} />
            </div>
         );
      },
   },
];
