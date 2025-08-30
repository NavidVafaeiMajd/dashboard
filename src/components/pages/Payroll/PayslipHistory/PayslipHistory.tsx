import { DataTable } from "@/components/shared/data-table";
import { columns } from "./columns";
import { PAYSLIP_HISTORY } from "./const";
import { useEffect } from "react";
import Table from "@/components/shared/section/Table";

const PayslipHistory = () => {
  useEffect(() => {
    document.title = "تاریخچه فیش حقوقی";
  }, []);
  return (
    <div>
      <Table
        table={
          <DataTable
            columns={columns}
            data={PAYSLIP_HISTORY}
            searchableKeys={["employee", "monthlySalary", "salary"]}
          />
        }
        Title="تاریخچه فیش حقوقی"
      />
    </div>
  );
};
export default PayslipHistory;
