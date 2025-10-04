import { DataTable } from "@/components/shared/data-table";
import { userColumns } from "./columns";
import { useGetRowsToTable } from "@/hook/useGetRows";

export interface User {
   id: number;
   first_name: string;
   last_name: string;
   email: string;
   phone: string;
   address?: string;

   [key: string]: string | number | boolean | null | undefined;
}

const Table: React.FC = () => {

   const fetchUsers = () => useGetRowsToTable("marketing-staff");
    
   return (
      <DataTable
         columns={userColumns}
         queryKey={["marketing-staff"]}
         queryFn={fetchUsers}
         searchableKeys={["first_name", "last_name", "email", "phone"]}
      />
   );
};

export default Table;
