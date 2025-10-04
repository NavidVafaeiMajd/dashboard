import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../../shared/breadcrumb";
import Smartwizard from "../../shared/Smartwizard";
import { FaUserFriends } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { Outlet } from "react-router-dom";
const StaffList = () => {
   const location = useLocation();
   const [title, setTitle] = useState(document.title);

   useEffect(() => {
      setTitle(document.title);
   }, [location.pathname]);

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
                           "/crm",
                           "نیروی بازاریابی",
                           "تنظیمات نیروی بازاریابی",
                        ],
                        [
                           <>
                              <FaRegClock className="w-7 h-7" />
                           </>,
                           "/crm/clients-list",
                           "مشتریان",
                           "تنظیمات مشتریان",
                        ],
                        [
                           <>
                              <FaRegClock className="w-7 h-7" />
                           </>,
                           "/crm/statistics",
                           "آمار",
                           "تنظیمات آمار",
                        ]
                     ]}
                  />
               </div>
            </div>
            <div>
               <Outlet />
            </div>
         </div>
      </>
   );
};

export default StaffList;
