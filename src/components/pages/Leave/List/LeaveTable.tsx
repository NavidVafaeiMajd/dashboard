import { useEffect, useState } from "react";
import { DataTable } from "@/components/shared/data-table";
import { leaveColumns , type LeaveRequest } from "./columns";

const LeaveTable: React.FC = () => {
   const [data, setData] = useState<LeaveRequest[]>([]);

   useEffect(() => {
      const fetchData = async () => {
         const response: LeaveRequest[] = [
            {
               id: 1,
               employee: "اکبر محمدی",
               leaveType: "مرخصی سالانه",
               duration: "5 روز",
               days: 5,
               requestDate: new Date("2024-01-15"),
               status: "approved",
            },
            {
               id: 2,
               employee: "سارا احمدی",
               leaveType: "مرخصی استعلاجی",
               duration: "3 روز",
               days: 3,
               requestDate: new Date("2024-01-20"),
               status: "pending",
            },
            {
               id: 3,
               employee: "علی رضایی",
               leaveType: "مرخصی بدون حقوق",
               duration: "2 روز",
               days: 2,
               requestDate: new Date("2024-01-18"),
               status: "rejected",
            },
            {
               id: 4,
               employee: "فاطمه محمدی",
               leaveType: "مرخصی زایمان",
               duration: "90 روز",
               days: 90,
               requestDate: new Date("2024-01-10"),
               status: "approved",
            },
            {
               id: 5,
               employee: "محمد کریمی",
               leaveType: "مرخصی سالانه",
               duration: "10 روز",
               days: 10,
               requestDate: new Date("2024-01-25"),
               status: "pending",
            },
            {
               id: 6,
               employee: "زهرا جعفری",
               leaveType: "مرخصی استعلاجی",
               duration: "1 روز",
               days: 1,
               requestDate: new Date("2024-01-22"),
               status: "approved",
            },
            {
               id: 7,
               employee: "حسن نوری",
               leaveType: "مرخصی بدون حقوق",
               duration: "7 روز",
               days: 7,
               requestDate: new Date("2024-01-12"),
               status: "rejected",
            },
            {
               id: 8,
               employee: "مریم شیرازی",
               leaveType: "مرخصی سالانه",
               duration: "15 روز",
               days: 15,
               requestDate: new Date("2024-01-28"),
               status: "pending",
            },
         ];
         setData(response);
      };
      fetchData();
   }, []);

   return (
      <DataTable<LeaveRequest, unknown>
         columns={leaveColumns}
         data={data}
         searchableKeys={["employee", "leaveType", "status"]}
      />
   );
};

export default LeaveTable;
