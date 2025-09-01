import { DataTable } from "@/components/shared/data-table";
import { columns } from "./columns";
import { ATTENDANCE_LIST } from "./const";
import { useEffect } from "react";
import Table from "@/components/shared/section/Table";

const AttendanceList = () => {
   useEffect(() => {
      document.title = "لیست حضور و غیاب";
   });
   return (
      <div>
         <Table
            Title="لیست همه واحدها"
            table={
               <DataTable
                  columns={columns}
                  data={ATTENDANCE_LIST}
                  searchableKeys={["employee", "status"]}
               />
            }
         />
      </div>
   );
};
export default AttendanceList;
