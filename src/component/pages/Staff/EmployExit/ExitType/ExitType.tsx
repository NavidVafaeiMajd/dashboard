import { useEffect } from "react";
import { FaUserFriends } from "react-icons/fa";
import { FaUserLock } from "react-icons/fa";
import Breadcrumb from "@/component/shared/breadcrumb";
import Smartwizard from "@/component/shared/Smartwizard";
import Table from "./Table";
import Form from "./Form";

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
                                          <FaUserFriends className="w-7 h-7" />
                                       </>,
                                       "/staff/employ-exit",
                                       "انفصال از خدمت",
                                       "تنظیمات انفصال از خدمت",
                                    ],
                                    [
                                       <>
                                          <FaUserLock className="w-7 h-7" />
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
                                   <Form/>
                               </div>
                               <div className="col-span-4 bg-[#F9F9FB]">
                                   <Table/>
                               </div>
                        </div>
                     </div>
                  </>
               );
}
 
export default ExitType;