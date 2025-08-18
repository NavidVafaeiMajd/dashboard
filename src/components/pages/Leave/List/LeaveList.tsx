import StatBox from "@/components/shared/StatBox";
import { CircleDollarSign } from "lucide-react";

const LeaveList = () => {
   return (
      <div>
         <StatBox
            counter={2}
            Icon={CircleDollarSign}
            color="#ff6d9e"
            title="مجموع مرخصی"
         />
      </div>
   );
};
export default LeaveList;
