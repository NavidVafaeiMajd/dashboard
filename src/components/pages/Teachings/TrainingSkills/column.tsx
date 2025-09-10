import type { ColumnDef } from "@tanstack/react-table";
import { EditDialog } from "@/components/shared/EditDialog";
import { Form } from "@/components/shared/Form";
import { z } from "zod";
import { DeleteDialog } from "@/components/shared/DeleteDialog";
export interface SkillsRank {
  skillsType: string;
  creatDate: string;
  [key: string]: string | number;
}



export  const columns: ColumnDef<SkillsRank>[] = [
    {
      accessorKey: "skillsType",
      header: "مهارت اموزشی",
      cell: ({ row }) => <div className="text-right">{row.getValue("skillsType")}</div>,
    },
    {
      accessorKey: "creatDate",
      header: "تاریخ ایجاد",
      cell: ({ row }) => <div className="text-center">{row.getValue("creatDate")}</div>,
  },
  {
    id: "actions",
    header: "عملیات",
    cell: () => {
      return (
        <div className="flex items-center gap-2">
          <EditDialog
            onSave={() => {}}
          fields={<>
            <Form.Input name="skillsType" label="مهارت اموزشی" required />
          </>}
          defaultValues={{
            skillsType: "",
          }}
          schema={z.object({
            skillsType: z.string().min(1, "مهارت اموزشی الزامی است"),
          })}
          />
          <DeleteDialog onConfirm={() => {}} />
        </div>
      );

    },
    }
   
  ];

