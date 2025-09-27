import FeedCart from "./Desk/FeedCard/FeedCard";
import DepartmentWiseChart from "./Desk/Charts/DepartmentWiseChart";
import StaffPositionChart from "./Desk/Charts/StaffPositionChart";
// import TicketStatusChart from "./Desk/Charts/TicketStatusChart";
// import TicketPriorityChart from "./Desk/Charts/TicketPriorityChart";
import StaffAttendanceChart from "./Desk/Charts/StaffAttendanceChart";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

const Desk = () => {
  const title = "پیشخوان";
  useEffect(() => {
    document.title = title;
  }, []);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["organizationStats"],
    queryFn: async () => {
      const res = await fetch("http://localhost:8000/api/organization/stats");
      if (!res.ok) {
        throw new Error("Failed to fetch stats");
      }
      return res.json();
    },
  });

  if (isLoading) return <p>در حال بارگذاری...</p>;
  if (isError) return <p>خطایی رخ داده است</p>;

  console.log(data);
  return (
    <>
      <div className="min-h-200 py-10">
        <FeedCart total_employees={data?.total_employees} />
        <div className="grid md:grid-cols-2 items-end mt-10 gap-10">
          <DepartmentWiseChart department={data?.departments} />
                  <StaffPositionChart designations={ data?.designations} />
          {/* <TicketStatusChart />
          <TicketPriorityChart /> */}
                  <StaffAttendanceChart present={data.present } absent={ data.absent} />
        </div>
      </div>
    </>
  );
};

export default Desk;
