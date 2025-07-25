import { useEffect, useState } from "react";
import { DataTable } from "@/component/shared/data-table";
import { userColumns } from "./columns";

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
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response: User[] = [
        {
          id: 1,
          user: {img : "https://trust.jaferi.ir/public/uploads/users/thumb/20240801_221626.jpg" , name : "اکبر محمدی" , email : "a@g.com"},
          exitType: "test",
          exitTime: "	1404/04/17",
          meeting: true,
          acouuntdis:true,
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
