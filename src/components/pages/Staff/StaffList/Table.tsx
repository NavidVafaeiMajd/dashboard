import { DataTable } from "@/components/shared/data-table";
import { userColumns } from "./columns";
import { useQuery } from "@tanstack/react-query";

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

const fetchUsers = async (): Promise<{ data: User[] }> => {
   const res = await fetch("http://localhost:8000/api/employees");
   if (!res.ok) {
     throw new Error("Failed to fetch users");
   }
   return res.json();
};
 
const Table: React.FC = () => {
   const { data, isLoading, isError, error } = useQuery<{ data: User[] }>({
      queryKey: ["users"],
      queryFn: fetchUsers,
   });
   
   if (isLoading) return <div className="h-[200px]! flex justify-center items-center gap-3">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      در حال بارگذاری...  </div>
   
   if (isError) return <div className="h-[200px]! flex justify-center items-center">خطا در دریافت دیتا: {(error as Error).message}</div>;
 

   return (
      <DataTable
         columns={userColumns}
         data={data?.data ?? []}
         searchableKeys={["fullName", "department", "phoneNumber", "accessLevel"]}
      />
   );
};

export default Table;
