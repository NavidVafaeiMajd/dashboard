import ActionsCell from "@/components/shared/ActionsCell";
import { DeleteDialog } from "@/components/shared/DeleteDialog";
import { EditDialog } from "@/components/shared/EditDialog";
import { Form } from "@/components/shared/Form";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ColumnDef } from "@tanstack/react-table";
import { LuArrowUpDown } from "react-icons/lu";
import { z } from "zod";

export interface PayrollListColumnProps extends Record<string, unknown> {
   id: string;
   employee: string;
   employeeId: string;
   type: string;
   monthlySalary: string;
   salary: string;
   status: string;
}

export const columns: ColumnDef<PayrollListColumnProps>[] = [
   {
      accessorKey: "employee",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            کارمند
         </Button>
      ),
   },
   {
      accessorKey: "employeeId",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            کد پرسنلی
         </Button>
      ),
   },
   {
      accessorKey: "type",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            نوع فیش حقوقی
         </Button>
      ),
   },
   {
      accessorKey: "monthlySalary",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            دستمزد ماهیانه
         </Button>
      ),
   },
   {
      accessorKey: "salary",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            حقوق خالص
         </Button>
      ),
   },
   {
      accessorKey: "status",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            وضعیت
         </Button>
      ),
      cell: ({row}) => {
         const status = row.original.status;
         return (
            <span className={`p-2 rounded-sm ${cn(status === "paid" ? "bg-green-100 text-green-500" : status === "unpaid" ? "bg-red-100 text-red-500" : "bg-yellow-100 text-yellow-500")}`}>{status === "paid" ? "پرداخت شده" : status === "unpaid" ? "پرداخت نشده" : "نیمه پرداخت شده"}</span>
         );
      },
   },
   {
      id: "actions",
      accessorKey: "id",
      header: "عملیات",
      cell: ({row}) => {
         const status = row.original.status;
         return (
            <div className="flex items-center gap-2">
               {status === "paid" ?
                  <>
                     <ActionsCell
                        actions={[
                           { label: "نمایش جزییات", path: `/payroll/payroll-list/${row.original.id}` },
                        ]}
                     />
                     <DeleteDialog onConfirm={() => {}} />
               
                  </> :
                  <>
                     <EditDialog
                        title="پرداخت"
                        onSave={() => {}}
                        fields={<>
                           <Form.Input name="amount" label="مقدار" disabled/>
                        <Form.Textarea name="description" label="شرح" />
                           </>
                        }
                        triggerLabel="پرداخت"
                        defaultValues={{amount: 0, description: ""}}
                        schema={z.object({
                           amount: z.number(),
                           description: z.string(),
                        })}
                        btnTitle="پرداخت"
                     />
                  </>
               }
            </div>
         );
      },
   },
];
