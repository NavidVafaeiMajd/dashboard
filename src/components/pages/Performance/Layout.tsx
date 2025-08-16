import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../../shared/breadcrumb";
import Smartwizard from "../../shared/Smartwizard";
import { FaUserFriends } from "react-icons/fa";
import { FaUserLock } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { IoMdExit } from "react-icons/io";
import { Outlet } from "react-router-dom";
const LayoutPerformance = () => {
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
                           "indicator-rating",
                           "رتبه بندی شاخص ها",
                           "تنظیمات نشانگر",
                        ],
                        [
                           <>
                              <FaUserLock className="w-7 h-7" />
                           </>,
                           "employee-rating",
                           "ارزیابی کارکنان",
                           "تنظیمات ارزیابی",
                        ],

                        [
                           <>
                              <FaRegClock className="w-7 h-7" />
                           </>,
                           "track-goals",
                           "پیگیری اهداف (OKR)",
                           "تنظیم اهداف سازمان",
                        ],
                        [
                           <>
                              <IoMdExit className="w-7 h-7" />
                           </>,
                           "setup-indicator ",
                           "تنظیم اندیکاتور",
                           "افزودن تنظیم اندیکاتور",
                        ],
                        [
                           <>
                              <IoMdExit className="w-7 h-7" />
                           </>,
                           "goals-type",
                           "انواع اهداف",
                           "افزودن انواع اهداف",
                        ],
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

export default LayoutPerformance;
