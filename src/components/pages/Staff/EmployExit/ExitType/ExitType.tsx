import { useEffect } from "react";
import { FaSquarePlus } from "react-icons/fa6";
import Breadcrumb from "@/components/shared/breadcrumb";
import Smartwizard from "@/components/shared/Smartwizard";
import Table from "./Table";
import Form from "./Form";
import { IoMdExit } from "react-icons/io";

const ExitType = () => {
   const title = " نوع انفصال ";
   useEffect(() => {
      document.title = title;
   }, []);

   return (
      <>
         <Breadcrumb>{title}</Breadcrumb>
         <div className="">
            <div className="">
               <div>
                  <Smartwizard
                     data={[
                        [
                           <>
                              <IoMdExit className="w-7 h-7" />
                           </>,
                           "/staff/employ-exit",
                           "انفصال از خدمت",
                           "تنظیمات انفصال از خدمت",
                        ],
                        [
                           <>
                              <FaSquarePlus className="w-7 h-7" />
                           </>,
                           "/exit-type",
                           " نوع انفصال",
                           " تنظیمات نوع انفصال",
                        ],
                     ]}
                  />
               </div>
            </div>
            <div className="grid grid-cols-6 gap-10">
               <div className="col-span-2">
                  <Form />
               </div>
               <div className="col-span-4 bg-[#F9F9FB]">
                  <Table />
               </div>
            </div>
         </div>
      </>
   );
};

export default ExitType;
