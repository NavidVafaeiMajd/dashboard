import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../../shared/breadcrumb";
import Smartwizard from "../../shared/Smartwizard";
import { FaUserFriends } from "react-icons/fa";
import { FaUserLock } from "react-icons/fa";
import { Outlet } from "react-router-dom";
const LayoutEmploymentCertificate = () => {
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
                           "assets-list",
                           "گواهی اشتغال به کار",
                           "تنظیمات گواهی اشتغال به کار",
                        ],
                        [
                           <>
                              <FaUserLock className="w-7 h-7" />
                           </>,
                           "assets-category",
                           "بانک",
                           "افزودن بانک",
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

export default LayoutEmploymentCertificate;
