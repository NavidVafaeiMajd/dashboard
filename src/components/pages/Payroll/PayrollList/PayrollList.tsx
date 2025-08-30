import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";
import { Form } from "@/components/shared/Form";
import { validation } from "./validation";
import { columns } from "./columns";
import { DataTable } from "@/components/shared/data-table";
import { PAYROLL_LIST } from "./const";
import Table from "@/components/shared/section/Table";
import { Button } from "@/components/ui/button";

const PayrollList = () => {
  useEffect(() => {
    document.title = "عملیات حقوق";
  }, []);
  const form = useForm<z.infer<typeof validation>>({
    resolver: zodResolver(validation),
    defaultValues: {
      employee: "",
      date: new Date(),
    },
  });

  const onSubmit = (data: z.infer<typeof validation>) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col justify-between gap-5">
      <div className="flex flex-col w-full rounded-md overflow-hidden shadow h-full bg-[#F9F9FB] p-5">
        <Form formProp={form} onSubmit={onSubmit} className="flex flex-col md:flex-row gap-5 justify-center items-stretch">
          <Form.Select name="employee" label="کارمند" required>
            <Form.SelectItem value="1">کارمند 1</Form.SelectItem>
            <Form.SelectItem value="2">کارمند 2</Form.SelectItem>
          </Form.Select>
          <Form.Date name="date" label="تاریخ" />
          <Button type="submit">جستجو</Button>
        </Form>
      </div>

      <Table
          table={
            <DataTable
              columns={columns}
              data={PAYROLL_LIST}
              searchableKeys={["employee", "employeeId", "type", "monthlySalary", "salary", "status"]}
            />
          }
          Title="لیست همه واحدها"
        />
    </div>
  );
};

export default PayrollList;
