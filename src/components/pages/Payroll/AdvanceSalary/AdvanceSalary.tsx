// itsEhsanMM

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/shared/data-table";
import { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import { columns } from "./columns";
import { ADVANCE_SALARY_LIST } from "./const";

const AdvanceSalary = () => {
   useEffect(() => {
      document.title = "واحد سازمانی";
   }, []);

   const [accordion, setAccordion] = useState(false);

   //    const form = useForm<z.infer<typeof validation>>({
   //       resolver: zodResolver(validation),
   //       defaultValues: {
   //          name: "",
   //          unitBoss: "",
   //       },
   //    });

   //    const onSubmit = (data: z.infer<typeof validation>) => {
   //       console.log(data);
   //    };

   return (
      <div className="flex flex-col justify-between gap-y-10">
         <div className="flex bg-bgBack justify-between p-2 px-5 border-b-2 border-red-500 items-center">
            <h2>لیست همه مساعده حقوق</h2>
            <Button
               onClick={() => setAccordion(!accordion)}
               className="cart-header-btn flex bg-greenDark text-white items-center p-2 gap-2 rounded-sm cursor-pointer"
            >
               <GoPlus className="w-5 h-5" />
               ثبت جدید
            </Button>
         </div>

         <DataTable
            columns={columns}
            data={ADVANCE_SALARY_LIST}
            searchableKeys={["employee", "amount", "installmentAmount"]}
         />
      </div>
   );
};

export default AdvanceSalary;
