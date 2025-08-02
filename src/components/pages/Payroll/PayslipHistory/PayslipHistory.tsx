import { DataTable } from "@/components/shared/data-table";
import { columns } from "./columns";
import { PAYSLIP_HISTORY } from "./const";

const PayslipHistory = () => {
   return (
      <div className="flex flex-col w-full bg-bgBack rounded-md overflow-hidden shadow-md h-full mb-1">
         <div className="flex bg-bgBack w-full p-2 px-5 border-b-2 border-red-500 items-center">
            <h2>تاریخچه فیش حقوقی</h2>
         </div>

         <DataTable
            columns={columns}
            data={PAYSLIP_HISTORY}
            searchableKeys={["employee", "monthlySalary", "salary"]}
         />
      </div>
   );
};
export default PayslipHistory;
