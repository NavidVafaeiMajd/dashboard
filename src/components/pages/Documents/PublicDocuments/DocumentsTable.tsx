import { DataTable } from "@/components/shared/data-table";
import { disciplinaryColumns } from "./columns";
import { useGetRowsToTable } from "@/hook/useGetRows";

const DocumentsTable: React.FC = () => {
  const fetchUploadFiles = () => useGetRowsToTable("upload-files");

  return (
    <div className="mt-8">
      <DataTable
         columns={disciplinaryColumns}
         queryKey={["upload-files"]}
         queryFn={fetchUploadFiles}
        searchableKeys={["employee", "caseType", "subject"]}
      />
    </div>
  );
};

export default DocumentsTable;
