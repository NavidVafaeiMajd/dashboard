
import { useEffect } from "react";
import Breadcrumb from "../breadcrumb";
import Smartwizard from "../Smartwizard";
import { FaUserFriends } from "react-icons/fa";
import { FaUserLock } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { IoMdExit } from "react-icons/io";
import { Outlet } from "react-router-dom";
const LayoutStaffList = () => {
    const title = "پرسنل";
    useEffect(() => {
    document.title = title;
  }, []);

    return (
        <>
            <Breadcrumb>
                {title}
            </Breadcrumb>
            <div className=''>
                <div className="">
                    <div>
                        <Smartwizard data={ [[<><FaUserFriends className="w-7 h-7"/></> , "/staff" , "پرسنل" ,"تنظیمات پرسنل"] , [<><FaUserLock className="w-7 h-7"/></> , "staff/set-roles" , "سطح دسترسی ها" ,"سطح دسترسی  نقشها"]  , [<><FaRegClock className="w-7 h-7"/></> , "fdsf" , "شیفت و برنامه ریزی" ," شیفت ها"]  , [<><IoMdExit className="w-7 h-7"/></> , "fdsf" , "انفصال از خدمت" ,"تنظیمات انفصال از خدمت"]  ] } />
                    </div>
                </div>
                <div>
                    <Outlet/>
                </div>
            </div>
        </>
    );
}
 
export default LayoutStaffList;