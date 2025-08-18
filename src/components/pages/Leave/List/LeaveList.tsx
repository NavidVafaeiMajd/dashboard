import StatBox from "@/components/shared/StatBox";
import { stats } from "./consts";

const LeaveList = () => {
   return (
      <div>
         <StatBox data={stats} />
      </div>
   );
};
export default LeaveList;
