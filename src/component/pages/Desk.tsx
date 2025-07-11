
import FeedCart from "./Desk/FeedCard/FeedCard";
import DepartmentWiseChart from './Desk/Charts/DepartmentWiseChart';
import StaffPositionChart from './Desk/Charts/StaffPositionChart';
import TicketStatusChart from "./Desk/Charts/TicketStatusChart";
import TicketPriorityChart from "./Desk/Charts/TicketPriorityChart";
import StaffAttendanceChart from "./Desk/Charts/staffAttendanceChart";

const Desk = () => {
    return (
    <>
    <div className="overflow-auto min-h-200 py-10 px-5">
                <FeedCart/>
                <div className="grid md:grid-cols-2 mt-5 gap-5">
                    <DepartmentWiseChart />
                    <StaffPositionChart />
                    <TicketStatusChart />
                    <TicketPriorityChart />
                    <StaffAttendanceChart/>
        </div>
    </div>
    </>);
}
 
export default Desk;