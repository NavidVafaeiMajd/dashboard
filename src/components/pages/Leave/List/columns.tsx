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
import { useEmployees } from "@/hook/useEmployees";
import { useGetData } from "@/hook/useGetData";

export interface LeaveRequest {
  id: number;
  employee_full_name: string;
  leaveType: string;
  duration: string;
  days: number;
  requestDate: Date;
  status: "pending" | "approved" | "rejected";
  [key: string]: any;
}

const validation = z.object({
  employee_id: z.string().min(1, "انتخاب کارمند الزامی است"),
  leave_type_id: z.string().min(1, "انتخاب نوع مرخصی الزامی است"),
  start_date: z.string().min(1, "تاریخ شروع الزامی است"),
  end_date: z.string().min(1, "تاریخ پایان الزامی است"),
  considerations: z.string().optional(),
  reason: z.string().optional(),
  status: z.string().optional()
})

export const leaveColumns: ColumnDef<LeaveRequest>[] = [
  {
    accessorKey: "employee_full_name",
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
      const employee = row.getValue("employee_full_name") as any;
      return employee
    },
  },
  {
    accessorKey: "leave_type",
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
          {status === "تایید شده" ? "تایید شده" : status === "رد شده" ? "رد شده" : "در حال بررسی"}
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
        `leaves/${r.id}`,
        ["leaves"],
        validation ,
        "مرخصی"
      );

      const deleteRow = useDeleteRows({
        url: "leaves",
        queryKey: ["leaves"],
      });

      // Get employees and leave types data
      const { data: employee } = useEmployees();
      const { data: leaveTypes } = useGetData("leave-types");

      const mapped = employee?.data?.map((item) => ({
        value: String(item.id),
        label: item.fullName,
      }));

      const leaveMapped = Array.isArray(leaveTypes) ? leaveTypes.map((item) => ({
        value: String(item.id),
        label: item.type_name,
      })) : [];
      return (
        <div className="flex items-center gap-2">
          <Link to={`/leave/details/${r.id}?${query}`}>
            <Button size="sm">نمایش جزییات</Button>
          </Link>
          <EditDialog
            fields={
              <>
                <Form.Select
                  label="کارمند"
                  name="employee_id"
                  placeholder="انتخاب کارمند"
                  options={mapped || []}
                  required
                />

                <Form.Select
                  label="نوع مرخصی"
                  name="leave_type_id"
                  placeholder="انتخاب نوع مرخصی"
                  required
                  options={leaveMapped || []}
                />

                <div className="flex gap-5">
                  <Form.Date 
                    label="تاریخ شروع" 
                    name="start_date" 
                    
                  />
                  <Form.Date 
                    label="تاریخ پایان" 
                    name="end_date" 
                    
                  />
                </div>

                <Form.Textarea label="ملاحظات" name="considerations" placeholder="..." />

                <Form.Input
                  label="دلیل مرخصی"
                  name="reason"
                  placeholder="دلیل مرخصی"
                  required
                />

                <Form.Select 
                  label="وضعیت" 
                  name="status" 
                  options={[
                    {label: "درحال بررسی", value: "درحال بررسی"}, 
                    {label: "تایید شده", value: "تایید شده"}, 
                    {label: "رد شده", value: "رد شده"}
                  ]}
                />
              </>
            }
            defaultValues={{
              employee_id: String(r.employee_id || ""),
              leave_type_id: String(r.leave_type_id || ""),
              start_date: r.start_date ? new Date(r.start_date).toISOString().slice(0, 19) : "",
              end_date: r.end_date ? new Date(r.end_date).toISOString().slice(0, 19) : "",
              considerations: r.considerations || "",
              reason: r.reason || "",
              status: r.status || "",
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
