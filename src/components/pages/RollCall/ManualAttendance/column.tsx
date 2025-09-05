import { DeleteDialog } from "@/components/shared/DeleteDialog";
import { EditDialog } from "@/components/shared/EditDialog";
import { Form } from "@/components/shared/Form";
import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { LuArrowUpDown } from "react-icons/lu";
import { z } from "zod";

export interface ManualAttendance extends Record<string, unknown> {
  id: number;
  employee: string;
  date: Date;
  entryTime: string;
  exitTime: string;
  totalTime: string;
}

const defaultValues = {
  employee: "",
  date: new Date(),
  entryTime: "",
  exitTime:"" ,
};
const schema = z.object({
  employee: z.string().min(1, "لطفا یک کارمند انتخاب کنید"),
  date: z.any(),
  entryTime: z.string().min(1, "لطفا زمان ورود را وارد کنید"),
  exitTime: z.string().min(1, "لطفا زمان خروج را وارد کنید"),
});

export const columns: ColumnDef<ManualAttendance>[] = [
  {
    accessorKey: "employee",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <LuArrowUpDown className="ml-2 h-4 w-4" />
          کارمند
        </Button>
      );
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <LuArrowUpDown className="ml-2 h-4 w-4" />
          تاریخ
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("date"));
      return date.toLocaleDateString("fa-IR");
    },
  },
  {
    accessorKey: "entryTime",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <LuArrowUpDown className="ml-2 h-4 w-4" />
        زمان ورود
      </Button>
    ),
  },
  {
    accessorKey: "exitTime",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <LuArrowUpDown className="ml-2 h-4 w-4" />
        زمان خروج
      </Button>
    ),
  },
  {
    accessorKey: "totalTime",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <LuArrowUpDown className="ml-2 h-4 w-4" />
        زمان کل
      </Button>
    ),
  },
  {
    id: "actions",
    accessorKey: "id",
    header: "عملیات",
    cell: () => {
      return (
        <div className="flex items-center gap-2">
          <EditDialog
            triggerLabel="ویرایش"
            defaultValues={defaultValues}
            onSave={(data) => {
              console.log(data);
            }}
            schema={schema}
            fields={
              <>
                <Form.Select name="employee" label="کارمند" required>
                  <Form.SelectItem value="1"> کارمند 1</Form.SelectItem>
                </Form.Select>
                <Form.Date name="date" label="تاریخ" />
                <Form.TimePicker name="entryTime" label="زمان ورود" />
                <Form.TimePicker name="exitTime" label="زمان خروج" />
              </>
            }
          />
          <DeleteDialog onConfirm={() => {}} />
        </div>
      );
    },
  },
];
