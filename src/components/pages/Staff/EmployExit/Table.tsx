import { DataTable } from "@/components/shared/data-table";
import { userColumns } from "./columns";
import { useGetRowsToTable } from "@/hook/useGetRows";

export interface User {
  id: number;
  employee_id: number;
  separation_type_id: number;
  separation_date: string;
  disciplinary_committee: number;
  deactivate_account: number;
  separation_letter: string;
  contract_file: string | null;
  created_at: string;
  updated_at: string;
  employee: {
    id: number;
    firstName: string;
    lastName: string;
    image: string | null;
    phoneNumber: string;
    gender: string;
    personeliCode: string;
    birthDate: string;
    position: string;
    shift_id: number;
    maritalStatus: string;
    designation_id: number | null;
    department_id: number | null;
    province: string;
    city: string;
    postalCode: string;
    religion: string;
    bloodGroup: string;
    nationality: string;
    citizenship: string;
    address1: string;
    address2: string;
    created_at: string;
    updated_at: string;
  };
  separation_type: {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
  };
  [key: string]: unknown;
}

const Table: React.FC = () => {
  const fetchSeparations = () => useGetRowsToTable("employee-separations");

  return (
    <DataTable<User, unknown>
      columns={userColumns}
      queryKey={["employee-separations"]}
      queryFn={fetchSeparations}
      searchableKeys={["employee.firstName", "employee.lastName", "separation_type.name", "separation_date"]}
    />
  );
};

export default Table;