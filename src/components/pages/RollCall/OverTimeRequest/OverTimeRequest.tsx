import { DataTable } from "@/components/shared/data-table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { OverTimeRequestColumns } from "./columns";
import { OVERTIME_REQUEST_LIST } from "./const";
import NewRequestModal from "./NewRequestModal";
import { useState } from "react";

const OverTimeRequest = () => {
   const [open, setOpen] = useState(false);

   return (
      <div className="flex flex-col w-full bg-bgBack rounded-md overflow-hidden shadow-md h-full mb-1">
         <NewRequestModal
            open={open}
            setOpen={setOpen}
         />
         <div className="flex justify-between bg-bgBack w-full p-2 px-5 border-b-2 border-red-500 items-center">
            <h2>درخواست اضافه کاری</h2>
            <Button
               onClick={() => setOpen(true)}
               className="text-lg flex items-center"
            >
               <Plus className="size-5 translate-y-0.5" />
               <span>ثبت جدید</span>
            </Button>
         </div>

         <DataTable
            columns={OverTimeRequestColumns}
            data={OVERTIME_REQUEST_LIST}
            searchableKeys={["employee"]}
         />
      </div>
   );
};
export default OverTimeRequest;
