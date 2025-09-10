import type { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { LuArrowUpDown } from "react-icons/lu";
import { Link } from "react-router-dom";

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
  },
  {
    accessorKey: "leaveType",
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
    accessorKey: "duration",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <LuArrowUpDown className="ml-2 h-4 w-4" />
        مدت زمان مرخصی
      </Button>
    ),
  },
  {
    accessorKey: "days",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <LuArrowUpDown className="ml-2 h-4 w-4" />
        روزها
      </Button>
    ),
  },
  {
    accessorKey: "requestDate",
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
      const date = new Date(row.getValue("requestDate"));
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
      const statusMap = {
        pending: "درحال بررسی",
        approved: "تایید شده",
        rejected: "رد شده",
      };
      return (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            status === "approved"
              ? "bg-green-100 text-green-800"
              : status === "rejected"
              ? "bg-red-100 text-red-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {statusMap[status as keyof typeof statusMap]}
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
      return (
        <div className="flex items-center gap-2">
          <Link to={`/leave/details/${r.id}?${query}`}>
            <Button size="sm">نمایش جزییات</Button>
          </Link>
          <Button variant="outline" size="sm">ویرایش</Button>
          <Button variant="destructive" size="sm">حذف</Button>
        </div>
      );
    },
  },
];
