
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../../shared/breadcrumb";
import Smartwizard from "../../shared/Smartwizard";
import { FaUserFriends } from "react-icons/fa";
import { FaUserLock } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { IoMdExit } from "react-icons/io";
import { Outlet } from "react-router-dom";
const LayoutBankaccount = () => {
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
                           "",
                           "حساب ها",
                           "افزودن حساب ها",
                        ],
                        [
                           <>
                              <FaUserLock className="w-7 h-7" />
                           </>,
                           "deposit-list",
                           "سپرده",
                           "افزودن سپرده",
                        ],
                        [
                           <>
                              <FaRegClock className="w-7 h-7" />
                           </>,
                           "expense-list",
                           "هزینه",
                           "افزودن هزینه",
                        ],
                        [
                           <>
                              <IoMdExit className="w-7 h-7" />
                           </>,
                           "transactions-list",
                           "معاملات",
                           "نمایش همه معاملات",
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

export default LayoutBankaccount;
