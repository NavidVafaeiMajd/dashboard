import { DataTable } from "@/components/shared/data-table";
import { disciplinaryColumns } from "./columns";
import { useGetRowsToTable } from "@/hook/useGetRows";

const DocumentsTable: React.FC = () => {
  const fetchDocuments = () => useGetRowsToTable("disciplinary-cases");

  return (
    <div className="mt-8">
      <DataTable
         columns={disciplinaryColumns}
         queryKey={["disciplinary-cases"]}
         queryFn={fetchDocuments}
        searchableKeys={["employee", "caseType", "subject"]}
      />
    </div>
  );
};

export default DocumentsTable;
