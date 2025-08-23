import StatBox from "@/components/shared/StatBox";
import { stats } from "./consts";
import LeaveTable from "./LeaveTable";

const LeaveList = () => {
   return (
      <div>
         <StatBox data={stats} />
         <div id="table">
            <LeaveTable />
         </div>
      </div>
   );
};
export default LeaveList;
