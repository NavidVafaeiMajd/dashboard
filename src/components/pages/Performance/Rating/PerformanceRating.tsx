import Cookies from "js-cookie";
import { useQuery } from "@tanstack/react-query";
import { JsonTable } from "@/components/shared/json-table";
import { columns, transformTechnicalData } from "./column";
import Table from "@/components/shared/section/Table";

async function fetchRatings() {
  const token = Cookies.get("token");
  const res = await fetch("http://localhost:8000/api/indicators/averages", {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  if (!res.ok) throw new Error("خطا در گرفتن دیتا از سرور");
  return res.json(); // { technical: Record<string, ...>, behavioral: ... }
}

const PerformanceRating = () => {
  const { data : technical , isLoading, isError, error } = useQuery({
    queryKey: ["technical"],
    queryFn: fetchRatings,
    select: (json: any) => transformTechnicalData(json?.technical ?? {}), // -> آرایه
  });

  const { data : behavioral  } = useQuery({
    queryKey: ["behavioral"],
    queryFn: fetchRatings,
    select: (json: any) => transformTechnicalData(json?.behavioral ?? {}), // -> آرایه
  });

  if (isLoading) return <div>در حال بارگذاری...</div>;
  if (isError) return <div>خطا: {(error as Error).message}</div>;

  return (
    <div className="grid grid-cols-2 gap-5">
      <Table
        table={
          <JsonTable
            columns={columns}
            data={technical || []} // الان آرایه است
            searchableKeys={[
              "title",
              "position",
              "totalRating",
              "addedBy",
              "createdAt",
            ]}
          />
        }
        Title="میانگین شاخص های فنی"
      />
            <Table
        table={
          <JsonTable
            columns={columns}
            data={behavioral || []} // الان آرایه است
            searchableKeys={[
              "title",
              "position",
              "totalRating",
              "addedBy",
              "createdAt",
            ]}
          />
        }
        Title="میانگین شاخص های سازمانی"
      />
    </div>
  );
};
export default PerformanceRating;
