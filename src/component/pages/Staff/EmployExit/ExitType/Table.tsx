import { useEffect, useState } from "react";
import { DataTable } from "@/component/shared/data-table";
import { userColumns } from "./columns";

export interface User {
  id: number;
  exitType: string;
  exitTime: string;
  [key: string]: unknown;
}

const Table: React.FC = () => {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response: User[] = [
        {
          id: 1,
          exitType: "تست",
          exitTime: "	1404/04/17",
        },

      ];
      setData(response);
    };
    fetchData();
  }, []);

  return (
    <DataTable<User, unknown>
      columns={userColumns}
      data={data}
      searchableKeys={["name", "position", "phone", "accessLevel"]}
    />
  );
};

export default Table;
