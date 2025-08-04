import { DataTable } from "@/components/shared/data-table";
import { columns } from "./columns";
import { ATTENDANCE_LIST } from "./const";
import { useEffect } from "react";

const AttendanceList = () => {
   useEffect(() => {
      document.title = "لیست حضور و غیاب";
   });
   return (
      <div className="flex flex-col w-full bg-bgBack rounded-md overflow-hidden shadow-md h-full mb-1">
         <div className="flex bg-bgBack w-full p-2 px-5 border-b-2 border-red-500 items-center">
            <h2> لیست همه واحدها</h2>
         </div>

         <DataTable
            columns={columns}
            data={ATTENDANCE_LIST}
            searchableKeys={["employee", "status"]}
         />
      </div>
   );
};
export default AttendanceList;
