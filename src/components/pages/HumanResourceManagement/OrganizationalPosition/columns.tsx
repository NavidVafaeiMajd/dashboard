import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { LuArrowUpDown } from "react-icons/lu";
import { EditDialog } from "@/components/shared/EditDialog";
import { Form } from "@/components/shared/Form";
import { z } from "zod";
import { DeleteDialog } from "@/components/shared/DeleteDialog";
import { useDepartments } from "@/hook/useDepartments";
import { useDeleteRows } from "@/hook/useDeleteRows";
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
         const rowInf = row.original;
         const deleteRow = useDeleteRows({
            url: "designations",
            queryKey: ["designations"],
          });
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
