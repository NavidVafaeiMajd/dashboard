import { DataTable } from "@/components/shared/data-table";
import { columns } from "./columns";
import { POLICY_CONST } from "./const";

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

   return (
      <DataTable
         columns={columns}
         data={POLICY_CONST}
         searchableKeys={["name", "position", "phone", "accessLevel"]}
      />
   );
};

export default Table;
