import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { LuArrowUpDown } from "react-icons/lu";
import { EditDialog } from "@/components/shared/EditDialog";
import { DeleteDialog } from "@/components/shared/DeleteDialog";
import { Form } from "@/components/shared/Form";
import { z } from "zod";

export interface DisciplinaryFile {
   id: number;
   employee: string;
   caseType: string;
   caseDate: Date;
   subject: string;
   filedBy: string;

   [key: string]: Date | number | string;
}

export const disciplinaryColumns: ColumnDef<DisciplinaryFile>[] = [
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
      accessorKey: "caseType",
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
      accessorKey: "caseDate",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            تاریخ پرونده
         </Button>
      ),
      cell: ({ row }) => {
         const date = row.getValue("caseDate") as Date;
         return date.toLocaleDateString("fa-IR");
      },
   },
   {
      accessorKey: "subject",
      header: ({ column }) => (
         <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
         >
            <LuArrowUpDown className="ml-2 h-4 w-4" />
            موضوع
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
                  title="ویرایش پرونده انضباطی"
                  triggerLabel="ویرایش"
                  defaultValues={{
                     caseDate: (r as any).caseDate || new Date(),
                     subject: String((r as any).subject || ""),
                     description: String((r as any).description || ""),
                  }}
                  schema={z.object({
                     description: z.string().min(1, "شرح الزامی است"),
                     caseDate: z.date({ error: "تاریخ پرونده الزامی است" }),
                     subject: z.string().min(1, "موضوع الزامی است"),
                  })}
                  onSave={(vals) => {
                     console.log("save disciplinary case", r.id, vals);
                  }}
                  fields={
                     <>
                        <Form.Input name="subject" label="موضوع" required />
                        <Form.Date name="caseDate" label="تاریخ پرونده" />
                        <Form.Textarea name="description" label="شرح" required />
                     </>
                  }
               />
               <DeleteDialog onConfirm={() => console.log("delete disciplinary case", r.id)} />
            </div>
         );
      },
   },
];
