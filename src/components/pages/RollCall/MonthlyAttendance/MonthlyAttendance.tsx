import { Form } from "@/components/shared/Form";
import { useForm } from "react-hook-form";
import { validation } from "./validation";
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { DataTable } from "@/components/shared/data-table";
import { useMemo } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import Table from "@/components/shared/section/Table";
import { useGetRowsToTable } from "@/hook/useGetRows";
import { useEmployees } from "@/hook/useEmployees";

const MonthlyAttendance = () => {
  const form = useForm<z.infer<typeof validation>>({
    resolver: zodResolver(validation),
    defaultValues: {
      emplyee: "",
      date: new Date(),
    },
  });

  const onSubmit = (data: z.infer<typeof validation>) => {
    console.log(data);
  };
  const columns: ColumnDef<any>[] = useMemo(
    () => [
      {
        accessorKey: "date",
        header: "تاریخ",
        cell: ({ row }) => {
          const date = new Date(row.getValue("date"));
          return date.toLocaleDateString("fa-IR");
        },
      },
      {
        accessorKey: "status",
        header: "وضعیت",
      },
      {
        accessorKey: "description",
        header: "توضیحات",
      },
    ],
    []
  );

  const { data: employee, isPending: employeesLoading } = useEmployees();

  const mapped = employee?.data?.map((item) => ({
    value: String(item.id),
    label: item.fullName,
  }));

  const fetchMonthlyAttendance = () => useGetRowsToTable("attendances");

  return (
    <>
      <Form formProp={form} onSubmit={onSubmit}>
        <div className="flex bg-white items-end gap-5 p-5 mb-5 rounded-sm">
          <Form.Select
            label="کارمند"
            name="employee_id"
            placeholder="انتخاب کارمند"
            options={mapped || []}
            required
          />
          <Form.Date label="ماه" name="date" onlyMonthPicker />
          <Button type="submit" className="py-6!"> جست و جو </Button>
        </div>
      </Form>

      <Table
        table={
          <DataTable
            columns={columns}
            queryKey={["attendances"]}
            queryFn={fetchMonthlyAttendance}
          />
        }
        Title="لیست گزارش"
      />
    </>
  );
};
export default MonthlyAttendance;
