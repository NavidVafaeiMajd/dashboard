import { DeleteDialog } from "@/components/shared/DeleteDialog";
import { EditDialog } from "@/components/shared/EditDialog";
import { Form } from "@/components/shared/Form";
import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { LuArrowUpDown } from "react-icons/lu";
import { z } from "zod";

export interface PolicyColumnProps extends Record<string, unknown> {
  id: string;
  title: string;
  startDate: string;
  finishDate: string;
  organizationalUnit: string;
}

const defaultValues = {
   title: "",
   startDate: new Date(),
   finishDate: new Date(),
   organizationalUnit: "",
   summary: "",
   newsText: "",
}

const validation = z.object({

   title: z.string().min(1, "عنوان الزامی است"),
   startDate: z.date(),
   finishDate: z.date(),
   organizationalUnit: z.string(),
   summary: z.string(),
   newsText: z.string(),
});

export const columns: ColumnDef<PolicyColumnProps>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <LuArrowUpDown className="ml-2 h-4 w-4" />
          عنوان
        </Button>
      );
    },
  },
  {
    accessorKey: "organizationalUnit",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <LuArrowUpDown className="ml-2 h-4 w-4" />
          واحد سازمانی
        </Button>
      );
    },
  },
  {
    accessorKey: "startDate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <LuArrowUpDown className="ml-2 h-4 w-4" />
          تاریخ شروع
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("startDate"));
      return date.toLocaleDateString("fa-IR");
    },
  },
  {
    accessorKey: "finishDate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <LuArrowUpDown className="ml-2 h-4 w-4" />
          تاریخ پایان
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("finishDate"));
      return date.toLocaleDateString("fa-IR");
    },
  },
  {
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
                <div className="flex gap-5">
                  <Form.Input name="title" label=" موضوع ابلاغیه " required />
                  <div className="flex gap-5">
                    <Form.Date name="startDate" label=" تاریخ شروع  " />
                    <Form.Date name="finishtDate" label=" تاریخ پایان " />
                  </div>
                </div>
                <div>
                  <Form.MultiSelect
                    label="واحد سازمانی"
                    name="organizationalUnit"
                    options={[
                      { label: "واحد سازمانی 1", value: "1" },
                      { label: "واحد سازمانی 2", value: "2" },
                    ]}
                    required
                  />
                </div>
                <div>
                  <Form.Input name="summary" label="اختصاری" />
                </div>
                <div>
                  <Form.RichText name="newsText" label="متن ابلاغیه" required />
                </div>
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
