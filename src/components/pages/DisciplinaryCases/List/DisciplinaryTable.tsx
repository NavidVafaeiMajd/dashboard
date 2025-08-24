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
               violationType: "تاخیر در ورود",
               violationDate: new Date("2024-01-15"),
               severity: "خفیف",
               action: "تذکر شفاهی",
               status: "بسته",
            },
            {
               id: 2,
               employee: "سارا احمدی",
               violationType: "غیبت غیرمجاز",
               violationDate: new Date("2024-01-20"),
               severity: "متوسط",
               action: "تذکر کتبی",
               status: "باز",
            },
            {
               id: 3,
               employee: "علی رضایی",
               violationType: "عدم رعایت قوانین",
               violationDate: new Date("2024-01-18"),
               severity: "شدید",
               action: "کسر حقوق",
               status: "بسته",
            },
            {
               id: 4,
               employee: "فاطمه محمدی",
               violationType: "تاخیر در ورود",
               violationDate: new Date("2024-01-10"),
               severity: "خفیف",
               action: "تذکر شفاهی",
               status: "بسته",
            },
            {
               id: 5,
               employee: "محمد کریمی",
               violationType: "غیبت غیرمجاز",
               violationDate: new Date("2024-01-25"),
               severity: "متوسط",
               action: "تذکر کتبی",
               status: "باز",
            },
            {
               id: 6,
               employee: "زهرا جعفری",
               violationType: "عدم رعایت قوانین",
               violationDate: new Date("2024-01-22"),
               severity: "شدید",
               action: "تعلیق",
               status: "باز",
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
            searchableKeys={["employee", "violationType", "severity"]}
         />
      </div>
   );
};

export default DisciplinaryTable;
