import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../../shared/breadcrumb";
import Smartwizard from "../../shared/Smartwizard";
import { FaUserFriends } from "react-icons/fa";
import { FaUserLock } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { IoMdExit } from "react-icons/io";
import { Outlet } from "react-router-dom";
const LayoutPayroll = () => {
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
                           "payroll-list",
                           "عملیات حقوق",
                           "تنظیم حقوق و دستمزد",
                        ],
                        [
                           <>
                              <FaUserLock className="w-7 h-7" />
                           </>,
                           "payslip-history",
                           "تاریخچه فیش حقوقی",
                           "مشاهده سوابق فیش حقوقی",
                        ],
                        [
                           <>
                              <FaRegClock className="w-7 h-7" />
                           </>,
                           "advance-salary",
                           "مساعده حقوق",
                           "درخواست پیش پرداخت",
                        ],
                        [
                           <>
                              <IoMdExit className="w-7 h-7" />
                           </>,
                           "loan-request",
                           "وام",
                           "درخواست وام",
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

export default LayoutPayroll;
