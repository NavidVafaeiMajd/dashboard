import { DataTable } from "@/components/shared/data-table";
import { userColumns } from "./columns";
import { useGetRowsToTable } from "@/hook/useGetRows";

export interface User {
   id: number;
   fullName: string;
   department: string;
   phoneNumber: string;
   gender: "male" | "female";
   country: string;
   accessLevel: "admin" | "user" | "guest";
   status: "active" | "inactive" | "pending";

   [key: string]: string | number | boolean | null;
}

const Table: React.FC = () => {

   const fetchUsers  = useGetRowsToTable("employees");
    
   return (
      <DataTable
         columns={userColumns}
         queryKey={["users"]}
         queryFn={() => fetchUsers}
         searchableKeys={["fullName", "department", "phoneNumber", "accessLevel"]}
      />
   );
};

export default Table;
