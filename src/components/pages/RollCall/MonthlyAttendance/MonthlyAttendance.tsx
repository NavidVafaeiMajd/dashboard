import { Form } from "@/components/shared/Form";
import { useForm } from "react-hook-form";
import { validation } from "./validation";
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";
import { Button } from "@/components/ui/button";
import { useMemo, useState } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import Table from "@/components/shared/section/Table";
import { useGetRowsToTable } from "@/hook/useGetRows";
import { useEmployees } from "@/hook/useEmployees";
import { JsonTable } from "@/components/shared/json-table";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";

const MonthlyAttendance = () => {
  const form = useForm<z.infer<typeof validation>>({
    resolver: zodResolver(validation),
    defaultValues: {
      employee_id: "",
      date: new Date(),
    },
  });

  const [rows, setRows] = useState<any[]>([]);

  const mutation = useMutation({
    mutationFn: async (form: { employee_id: string; year: number; month: number }) => {
      const token = Cookies.get("token");
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
        Accept: "application/json",
      };
      if (token) headers.Authorization = `Bearer ${token}`;
  
      const res = await fetch("http://localhost:8000/api/attendances/monthly-report", {
        method: "POST",
        headers,
        body: JSON.stringify(form),
      });
  
      if (!res.ok) {
        const t = await res.text();
        throw new Error(t || "Request failed");
      }
      return res.json();
    },
    onSuccess: (data: any) => {
      setRows(Array.isArray(data) ? data : (Array.isArray(data?.days) ? data.days : []));
    },
  });
  

  const onSubmit = (data: z.infer<typeof validation>) => {
    const dateObj = new Date(data.date);
  
    // تبدیل به سال و ماه
    const payload = {
      employee_id: data.employee_id,
      year: dateObj.getFullYear(),
      month: dateObj.getMonth() + 1, // چون ماه از 0 شروع میشه
    };
  
    console.log(payload)
    mutation.mutate(payload);
  };
  console.log(rows)

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
        accessorKey: "check_in",
        header: "ساعت ورود",
        cell: ({ row }) => row.getValue("check_in") || "-",
      },
      {
        accessorKey: "check_out",
        header: "ساعت خروج",
        cell: ({ row }) => row.getValue("check_out") || "-",
      },
      {
        accessorKey: "work_time",
        header: "مدت کارکرد",
        cell: ({ row }) => row.getValue("work_time") || "-",
      },
    ],
    []
  );

  const { data: employee, isPending: employeesLoading } = useEmployees();

  const mapped = employee?.data?.map((item) => ({
    value: String(item.id),
    label: item.fullName,
  }));

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
          <Button type="submit" className="py-6!" disabled={mutation.isPending ? true : false} >{mutation.isPending ?"در حال جست و جو ...." : " جست و جو"} </Button>
        </div>
      </Form>

      <Table
        table={
          <JsonTable
            columns={columns}
            data={rows}
          />
        }
        Title="لیست گزارش"
      />
    </>
  );
};
export default MonthlyAttendance;
