import { useEffect, useState } from "react";
import { DataTable } from "@/components/shared/data-table";
import { userColumns } from "./columns";
import { useGetRowsToTable } from "@/hook/useGetRowsTable";

export interface User {
   id: number;
   shift: string;
   saturday: object;
   sunday: object;
   monday: object;
   tuesday: object;
   wednesday: object;
   thursday: object;
   friday: object;
   [key: string]: unknown;
}

const Table: React.FC = () => {
   const [data, setData] = useState<User[]>([]);

   useEffect(() => {
      const fetchData = async () => {
         const response: User[] = [
            {
               id: 1,
               shift: "اداری",
               saturday: { entry: "", exit: "" },
               sunday: { entry: "12", exit: "13" },
               monday: { entry: "", exit: "" },
               tuesday: { entry: "", exit: "" },
               wednesday: { entry: "", exit: "" },
               thursday: { entry: "", exit: "" },
               friday: { entry: "", exit: "" },
            },
            {
               id: 1,
               shift: "ستادی",
               saturday: { entry: "08:30", exit: "16:00" },
               sunday: { entry: "09:00", exit: "17:00" },
               monday: { entry: "08:15", exit: "15:30" },
               tuesday: { entry: "10:00", exit: "16:45" },
               wednesday: { entry: "08:00", exit: "14:30" },
               thursday: { entry: "", exit: "" },
               friday: { entry: "", exit: "" },
            },
         ];
         setData(response);
      };
      fetchData();
   }, []);

   const fetchData = useGetRowsToTable("office-shifts");
   return (
      <DataTable<User, unknown>
         columns={userColumns}
         queryKey={["employees"]}
         queryFn={() => fetchData}
         searchableKeys={["name", "position", "phone", "accessLevel"]}
      />
   );
};

export default Table;
