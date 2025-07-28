import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../../shared/breadcrumb";
import Smartwizard from "../../shared/Smartwizard";
import { FaUserFriends } from "react-icons/fa";
import { FaUserLock } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { IoMdExit } from "react-icons/io";
import { Outlet } from "react-router-dom";
const LayoutRollCall = () => {
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
                           "attendance-list",
                           "حضور و غیاب",
                           "نمایش حضور و غیاب",
                        ],
                        [
                           <>
                              <FaUserLock className="w-7 h-7" />
                           </>,
                           "manual-attendance",
                           "ثبت تردد دستی پرسنل",
                           "افزودن/ویرایش حضور و غیاب",
                        ],
                        [
                           <>
                              <FaRegClock className="w-7 h-7" />
                           </>,
                           "monthly-attendance",
                           "گزارش کارکرد ماهانه",
                           "نمایش گزارش کارکرد ماهانه",
                        ],
                        [
                           <>
                              <IoMdExit className="w-7 h-7" />
                           </>,
                           "overtime-request",
                           "درخواست اضافه کاری",
                           "تنظیمات درخواست اضافه کاری  ",
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

export default LayoutRollCall;
