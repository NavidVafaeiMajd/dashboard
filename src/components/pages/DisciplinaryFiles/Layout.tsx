import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../../shared/breadcrumb";
import Smartwizard from "../../shared/Smartwizard";
import { FaUserFriends } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import { Outlet } from "react-router-dom";
const LayoutLeave = () => {
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
                           "list",
                           "تنظیم مرخصی ها",
                           "تنظیمات مرخصی",
                        ],

                        [
                           <>
                              <IoMdExit className="w-7 h-7" />
                           </>,
                           "type",
                           "نوع مرخصی",
                           "افزودن انواع مرخصی",
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

export default LayoutLeave;
