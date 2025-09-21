import { DataTable } from "@/components/shared/data-table";
import { columns } from "./columns";
import { useGetRowsToTable } from "@/hook/useGetRows";

export interface User {
   id: number;
   user: object;
   exitType: string;
   exitTime: string;
   meeting: boolean;
   acouuntdis: boolean;
   [key: string]: unknown;
}

const Table: React.FC = () => {

   const fetchNewsList = () => useGetRowsToTable("hr-news");


   return (
      <DataTable
      columns={columns}
      queryKey={["hr-news"]}
      queryFn={fetchNewsList}
         searchableKeys={["name", "position", "phone", "accessLevel"]}
      />
   );
};

export default Table;
