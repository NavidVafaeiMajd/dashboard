import { DataTable } from "@/components/shared/data-table";
import { TbLockPassword } from "react-icons/tb";
import { Projects_List } from "./const";
import { columns } from "./columns";
import type { ProjectsList } from "./columns";
const ProjectsList = () => {

  return (
    <div>
      <div className="flex gap-2 border-b-red-500 border-b-2 p-3">
        <TbLockPassword className="w-7 h-7" />
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

export default ProjectsList;
