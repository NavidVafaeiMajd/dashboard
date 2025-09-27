import { DataTable } from "@/components/shared/data-table";
import { userColumns } from "./columns";
import { useGetRowsToTable } from "@/hook/useGetRows";

export interface User {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  [key: string]: unknown;
}

const Table: React.FC = () => {
  const fetchSeparationTypes = () => useGetRowsToTable("separation-types");

  return (
    <DataTable<User, unknown>
      columns={userColumns}
      queryKey={["separation-types"]}
      queryFn={fetchSeparationTypes}
      searchableKeys={["name"]}
    />
  );
};

export default Table;