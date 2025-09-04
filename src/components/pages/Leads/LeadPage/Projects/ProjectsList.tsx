import { DataTable } from "@/components/shared/data-table";
import { Projects_List } from "./const";
import { columns } from "./columns";
const ProjectsListTable = () => {

  return (
    <div>
      <div className="flex gap-2 border-b-red-500 border-b-2 p-3">
        <span>لیست همه پروژه ها </span>
      </div>
      <div className="p-3">
          <DataTable
            columns={columns}
            data={Projects_List}
            searchableKeys={["accountNumber", "accountType"]}
          />
      </div>
    </div>
  );
};

export default ProjectsListTable;
