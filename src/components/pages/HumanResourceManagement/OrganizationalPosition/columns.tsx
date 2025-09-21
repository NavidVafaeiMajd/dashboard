import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { LuArrowUpDown } from "react-icons/lu";
import { EditDialog } from "@/components/shared/EditDialog";
import { Form } from "@/components/shared/Form";
import { z } from "zod";
import { DeleteDialog } from "@/components/shared/DeleteDialog";
export interface designationColumnProps extends Record<string, unknown> {
   department_id : string;
   title: string;
   designation: "",
   unit: string;
}

const defaultValues = {
   unit: "",
   designation: "",
   description: "",
};

const validation = z.object({

   unit: z.string().min(1, "واحد سازمانی الزامی است"),
   designation: z.string().min(1, "نام سمت سازمانی الزامی است"),
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
      accessorKey: "unit",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            واحد سازمانی
         </Button>
      ),
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
                        <Form.Select name="unit" label="واحد سازمانی" required>
                           <Form.SelectItem value="1">استحقاقی</Form.SelectItem>
                           <Form.SelectItem value="2">استعلاجی</Form.SelectItem>
                           <Form.SelectItem value="3">بدون حقوق</Form.SelectItem>
                           <Form.SelectItem value="4">سایر</Form.SelectItem>
                        </Form.Select>
                        <Form.Input name="designation" label="نام سمت سازمانی" required />
                        <Form.Textarea name="description" label="شرح" />
                     </>
                  }
                  defaultValues={defaultValues}
                  onSave={(data) => {
                     console.log(data);
                  }}
                  schema={validation}
               />
               <DeleteDialog onConfirm={()=>{}}/>
            </div>
         );
      },
   },
];
