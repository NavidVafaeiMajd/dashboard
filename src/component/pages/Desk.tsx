
import FeedCart from "./Desk/FeedCard/FeedCard";
import DepartmentWiseChart from './Desk/Charts/DepartmentWiseChart';
import StaffPositionChart from './Desk/Charts/StaffPositionChart';
import TicketStatusChart from "./Desk/Charts/TicketStatusChart";
import TicketPriorityChart from "./Desk/Charts/TicketPriorityChart";
import StaffAttendanceChart from "./Desk/Charts/StaffAttendanceChart";
import { useEffect } from "react";

const Desk = () => {
        const title = "پیشخوان";
        useEffect(() => {
        document.title = title;
      }, []);
    return (
    <>
    <div className="min-h-200 py-10">
                <FeedCart/>
                <div className="grid md:grid-cols-2 items-end mt-10 gap-10">
                    <DepartmentWiseChart />
                    <StaffPositionChart />
                    <TicketStatusChart />
                    <TicketPriorityChart />
                    <StaffAttendanceChart />
        </div>
    </div>
    </>);
}
 
export default Desk;