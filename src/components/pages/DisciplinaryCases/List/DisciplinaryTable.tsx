import { useEffect, useState } from "react";
import { DataTable } from "@/components/shared/data-table";
import { disciplinaryColumns, type DisciplinaryFile } from "./columns";

const DisciplinaryTable: React.FC = () => {
  const [data, setData] = useState<DisciplinaryFile[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response: DisciplinaryFile[] = [
        {
          id: 1,
          employee: "اکبر محمدی",
          caseType: "تخلف انضباطی",
          caseDate: new Date("2024-01-15"),
          subject: "تاخیر در ورود به محل کار",
          filedBy: "مدیر بخش",
        },
        {
          id: 2,
          employee: "سارا احمدی",
          caseType: "تخلف اخلاقی",
          caseDate: new Date("2024-01-20"),
          subject: "عدم رعایت قوانین پوشش",
          filedBy: "سرپرست",
        },
        {
          id: 3,
          employee: "علی رضایی",
          caseType: "تخلف کاری",
          caseDate: new Date("2024-01-18"),
          subject: "استفاده نادرست از امکانات شرکت",
          filedBy: "مدیر منابع انسانی",
        },
        {
          id: 4,
          employee: "فاطمه محمدی",
          caseType: "تخلف انضباطی",
          caseDate: new Date("2024-01-10"),
          subject: "غیبت غیرمجاز",
          filedBy: "سرپرست",
        },
        {
          id: 5,
          employee: "محمد کریمی",
          caseType: "تخلف امنیتی",
          caseDate: new Date("2024-01-25"),
          subject: "عدم رعایت نکات ایمنی",
          filedBy: "مسئول ایمنی",
        },
        {
          id: 6,
          employee: "زهرا جعفری",
          caseType: "تخلف کاری",
          caseDate: new Date("2024-01-22"),
          subject: "عدم رعایت ساعات کاری",
          filedBy: "مدیر بخش",
        },
      ];
      setData(response);
    };

    fetchData();
  }, []);

  return (
    <div className="mt-8">
      <DataTable
        columns={disciplinaryColumns}
        data={data}
        searchableKeys={["employee", "caseType", "subject"]}
      />
    </div>
  );
};

export default DisciplinaryTable;
