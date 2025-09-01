import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { LuArrowUpDown } from "react-icons/lu";
import { EditDialog } from "@/components/shared/EditDialog";
import { Form } from "@/components/shared/Form";
import { z } from "zod";
export interface designationColumnProps extends Record<string, unknown> {
   id: string;
   designation: string;
   unit: string;
}

const defaultValues = {
   unit: "",
};

const validation = z.object({

   unit: z.string().min(1, "واحد سازمانی الزامی است"),
});

export const columns: ColumnDef<designationColumnProps>[] = [
   {
      accessorKey: "designation",
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
                        <Form.Input name="unit" label="واحد سازمانی" required />
                     </>
                  }
                  defaultValues={defaultValues}
                  onSave={(data) => {
                     console.log(data);
                  }}
                  schema={validation}
               />
               <Button
                  variant="destructive"
                  size="sm"
               >
                  حذف
               </Button>
            </div>
         );
      },
   },
];
