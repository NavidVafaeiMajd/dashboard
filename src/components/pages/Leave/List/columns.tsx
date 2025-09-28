import type { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { LuArrowUpDown } from "react-icons/lu";
import { Link } from "react-router-dom";
import { EditDialog } from "@/components/shared/EditDialog";
import { z } from "zod";
import { Form } from "@/components/shared/Form";
import { DeleteDialog } from "@/components/shared/DeleteDialog";
import { useDeleteRows } from "@/hook/useDeleteRows";
import { useUpdateRows } from "@/hook/useUpdateRows";

export interface LeaveRequest {
  id: number;
  employee: string;
  leaveType: string;
  duration: string;
  days: number;
  requestDate: Date;
  status: "pending" | "approved" | "rejected";
  [key: string]: any;
}

const validation = z.object({
  notes: z.string().min(1, "ملاحظات الزامی است"),
  reason: z.string().min(1, "دلیل مرخصی الزامی است"),
  status : z.string().min(1, "وضعیت الزامی است")
})

export const leaveColumns: ColumnDef<LeaveRequest>[] = [
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
    cell: ({ row }) => {
      const employee = row.getValue("employee") as any;
      return employee.firstName + " " + employee.lastName;
    },
  },
  {
    accessorKey: "type_name",
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
    accessorKey: "start_date",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <LuArrowUpDown className="ml-2 h-4 w-4" />
        مدت زمان مرخصی
      </Button>
    ),
    cell: ({ row }) => {
      const start = new Date(row.original.start_date).toLocaleDateString(
        "fa-IR"
      );
      const end = new Date(row.original.end_date).toLocaleDateString("fa-IR");
      return (
        <>
          از {start} تا {end}
        </>
      );
    },
  },
  {
    id: "days",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <LuArrowUpDown className="ml-2 h-4 w-4" />
        روزها
      </Button>
    ),
    cell: ({ row }) => {
      const orig = row.original as any;

      const start = new Date(orig.start_date);
      const end = new Date(orig.end_date);

      // اختلاف به روز
      const diffTime = end.getTime() - start.getTime();
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1; // +1 برای احتساب روز شروع

      return <span>{diffDays}</span>;
    },
  },
  {
    accessorKey: "created_at",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <LuArrowUpDown className="ml-2 h-4 w-4" />
        تاریخ درخواست
      </Button>
    ),
    cell: ({ row }) => {
      const date = new Date(row.getValue("created_at"));
      return date.toLocaleDateString("fa-IR");
    },
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
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            status === "تایید شده"
              ? "bg-green-100 text-green-800"
              : status === "رد شده"
              ? "bg-red-100 text-red-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {status}
        </span>
      );
    },
  },
  {
    id: "actions",
    header: "عملیات",
    cell: ({ row }) => {
      const r = row.original;
      const query = new URLSearchParams({
        employee: String(r.employee),
        leaveType: String(r.leaveType),
        duration: String(r.duration),
        days: String(r.days),
        requestDate: String(new Date(r.requestDate).getTime()),
        status: String(r.status),
      }).toString();

      const { mutation } = useUpdateRows(
        `designations/${row.id}`,
        ["designations"],
        validation ,
        "واحد سازمانی"
      );

      const deleteRow = useDeleteRows({
        url: "leaves",
        queryKey: ["leaves"],
      });
      return (
        <div className="flex items-center gap-2">
          <Link to={`/leave/details/${r.id}?${query}`}>
            <Button size="sm">نمایش جزییات</Button>
          </Link>
          <EditDialog
            fields={
              <>
                <Form.Textarea name="notes" label="ملاحظات" />
                <Form.Textarea name="reason" label="دلیل مرخصی" />
                <Form.Select label="وضعیت" name="status" options={[{label : "در حال بررسی" , value :"در حال بررسی"} , {label : " تایید شده " , value :"تایید شده "} , {label : " رد شده " , value :" رد شده "}]}/>
              </>
            }
            defaultValues={{
              notes: "",
              reason: "",
              status : "",
            }}
            onSave={(data) => {
              mutation.mutate(data)
            }}
            schema={validation}
          />
          <DeleteDialog
            onConfirm={() => {
              deleteRow.mutate(r.id);
            }}
          />
        </div>
      );
    },
  },
];
