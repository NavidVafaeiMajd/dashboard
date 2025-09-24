import { DataTable } from "@/components/shared/data-table";
import { columns } from "./columns";
import { useEffect } from "react";
import Table from "@/components/shared/section/Table";
import { useGetRowsToTable } from "@/hook/useGetRows";

const AttendanceList = () => {
   useEffect(() => {
      document.title = "لیست حضور و غیاب";
   });

   const fetchAttendances = () => useGetRowsToTable("attendances");

   return (
      <div>
         <Table
            Title="لیست همه واحدها"
            table={
               <DataTable
               columns={columns}
               queryKey={["attendances"]}
               queryFn={fetchAttendances}
                  searchableKeys={["attendances", "status"]}
               />
            }
         />
      </div>
   );
};
export default AttendanceList;
