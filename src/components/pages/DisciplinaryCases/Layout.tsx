import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../../shared/breadcrumb";
import Smartwizard from "../../shared/Smartwizard";
import { FaUserFriends } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import { Outlet } from "react-router-dom";

const LayoutDisciplinaryCases = () => {
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
                           "لیست پرونده ها",
                           "مشاهده پرونده های انضباطی",
                        ],
                        [
                           <>
                              <IoMdExit className="w-7 h-7" />
                           </>,
                           "type",
                           "نوع تخلف",
                           "مدیریت انواع تخلفات",
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

export default LayoutDisciplinaryCases;
