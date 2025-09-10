import { EditDialog } from "@/components/shared/EditDialog";
import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { LuArrowUpDown } from "react-icons/lu";
import { Form } from "@/components/shared/Form";
import { z } from "zod";
import { DeleteDialog } from "@/components/shared/DeleteDialog";

export interface leaveTypeColumnProps extends Record<string, unknown> {
   id: string;
   name: string;
   daysPerYear: number;
   requiresApproval: string;
}

export const columns: ColumnDef<leaveTypeColumnProps>[] = [
   {
      accessorKey: "name",
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
      accessorKey: "daysPerYear",
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
      accessorKey: "requiresApproval",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            نیاز به تایید دارد
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
                  onSave={() => {}}
                  fields={<>
                     <Form.Input name="name" label="نوع مرخصی" required />
                     <Form.Input name="daysPerYear" label="روزها در سال" required />
                     <Form.Select name="requiresApproval" label="نیاز به تایید دارد" required >
                        <Form.SelectItem value="1">بله</Form.SelectItem>
                        <Form.SelectItem value="2">خیر</Form.SelectItem>
                     </Form.Select>
                  </>}
                  defaultValues={{
                     name: "",
                     daysPerYear: "",
                     requiresApproval: "",
                  }}
                  schema={z.object({
                     name: z.string().min(1, "نوع مرخصی الزامی است"),
                     daysPerYear: z.string().min(1, "روزها در سال الزامی است"),
                     requiresApproval: z.string().min(1, "نیاز به تایید دارد الزامی است"),
                  })}
               />
               <DeleteDialog onConfirm={() => {}} />
            </div>
         );
      },
   },
];
