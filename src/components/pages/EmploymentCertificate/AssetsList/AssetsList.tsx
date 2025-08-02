import { DataTable } from "@/components/shared/data-table";
import { useEffect, useState } from "react";
import { columns } from "./columns";
import { ASSETS_LIST } from "./const";
import { GoPlus } from "react-icons/go";

const AssetsList = () => {
   useEffect(() => {
      document.title = "لیست حضور و غیاب";
   });

   const [accordion, setAccordion] = useState(false);

   return (
      <div className="flex flex-col w-full bg-bgBack rounded-md overflow-hidden shadow-md h-full mb-1">
         <div className="flex justify-between p-2 px-5 border-b-2 border-red-500 items-center">
            <h2>لیست همه گواهی اشتغال به کار</h2>

            <div className="flex gap-2">
               <button
                  onClick={() => setAccordion(!accordion)}
                  className="cart-header-btn flex bg-greenDark text-white items-center p-2 gap-2 rounded-sm cursor-pointer"
               >
                  <GoPlus className="w-5 h-5" />
                  ثبت جدید
               </button>
            </div>
         </div>

         <DataTable
            columns={columns}
            data={ASSETS_LIST}
            searchableKeys={[
               "name",
               "bankName",
               "bankBranch",
               "nationalId",
               "status",
               "employeeName",
            ]}
         />
      </div>
   );
};
export default AssetsList;
