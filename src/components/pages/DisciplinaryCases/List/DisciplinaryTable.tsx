import { DataTable } from "@/components/shared/data-table";
import { disciplinaryColumns } from "./columns";
import { useGetRowsToTable } from "@/hook/useGetRows";

const DisciplinaryTable: React.FC = () => {
  const fetchDisciplinary = () => useGetRowsToTable("disciplinary-cases");

  return (
    <div className="mt-8">
      <DataTable
         columns={disciplinaryColumns}
         queryKey={["disciplinary-cases"]}
         queryFn={fetchDisciplinary}
        searchableKeys={["employee", "caseType", "subject"]}
      />
    </div>
  );
};

export default DisciplinaryTable;
