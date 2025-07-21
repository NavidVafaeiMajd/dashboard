import { DataTable } from "@/component/shared/data-table";
import { useEffect, useState } from "react";
import { userColumns } from "./columns";

export interface User {
   id: number;
   role: string;
   permission: string;
   date: string;
}

const Table: React.FC = () => {
   const [data, setData] = useState<User[]>([]);

   useEffect(() => {
      const fetchData = async () => {
         const response: User[] = [
            {
               id: 1,
               role: "اداری",
               permission: "دسترسی به منو سفارشی",
               date: "1400-12-10",
            },
            {
               id: 2,
               role: "تست",
               permission: "دسترسی به منو سفارشی",
               date: "1400-12-10",
            },
            {
               id: 3,
               role: "دسترسی عمومی کارکنان",
               permission: "دسترسی به منو سفارشی",
               date: "1403-6-29",
            },
         ];

         setData(response);
      };
      fetchData();
   }, []);

   return (
      <DataTable
         columns={userColumns}
         data={data}
         searchableKeys={["role", "permission", "date"]}
      />
   );
};

export default Table;
