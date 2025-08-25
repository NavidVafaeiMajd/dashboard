
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../../shared/breadcrumb";
import Smartwizard from "../../shared/Smartwizard";
import { FaUserFriends } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import { FcTodoList } from "react-icons/fc";
import { MdOutlineRadar } from "react-icons/md";
const LayoutTeching = () => {
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
                              <MdOutlineRadar className="w-7 h-7" />
                           </>,
                           "learn",
                           "اموزش ها",
                           "تنظیمات اموزش ها",
                        ],
                        [
                           <>
                              <FaUserPlus className="w-7 h-7" />
                           </>,
                           "techerinfo",
                           "مشخصات مدرس",
                           "افزودن مشخصات مدرس",
                        ],
                        [
                           <>
                              <FcTodoList className="w-7 h-7" />
                           </>,
                           "traningskills",
                           "مهارت های امورشی",
                           "افزودن مهارت های امورشی",
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

export default LayoutTeching;
