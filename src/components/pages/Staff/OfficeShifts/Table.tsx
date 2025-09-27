import { DataTable } from "@/components/shared/data-table";
import { userColumns } from "./columns";
import { useGetRowsToTable } from "@/hook/useGetRows";

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

   const fetchData = useGetRowsToTable("shifts");
   return (
      <DataTable<User, unknown>
         columns={userColumns}
         queryKey={["shifts"]}
         queryFn={() => fetchData}
         searchableKeys={["name", "position", "phone", "accessLevel"]}
      />
   );
};

export default Table;
