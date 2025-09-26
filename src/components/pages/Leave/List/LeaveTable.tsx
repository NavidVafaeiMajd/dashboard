import { DataTable } from "@/components/shared/data-table";
import { leaveColumns , type LeaveRequest } from "./columns";
import { useGetRowsToTable } from "@/hook/useGetRows";

const LeaveTable: React.FC = () => {

   const fetchLeaves = () => useGetRowsToTable("leaves");


   return (
      <DataTable<LeaveRequest, unknown>
      columns={leaveColumns}
      queryKey={["leaves"]}
      queryFn={fetchLeaves}
         searchableKeys={["employee", "leaveType", "status"]}
      />
   );
};

export default LeaveTable;
