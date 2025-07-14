
import { useEffect } from "react";
import Breadcrumb from "../breadcrumb";
import Smartwizard from "../Smartwizard";
import { FaUserFriends } from "react-icons/fa";
import { FaUserLock } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { IoMdExit } from "react-icons/io";

const Personnel = () => {
    const title = "پرسنل";
    useEffect(() => {
    document.title = title;
  }, []);

    return (
        <>
            <Breadcrumb>
                {title}
            </Breadcrumb>
            <div>
                <Smartwizard data={ [[<><FaUserFriends className="w-7 h-7"/></> , "/personnel" , "پرسنل" ,"تنظیمات پرسنل"] , [<><FaUserLock className="w-7 h-7"/></> , "fdsf" , "سطح دسترسی ها" ,"سطح دسترسی  نقشها"]  , [<><FaRegClock className="w-7 h-7"/></> , "fdsf" , "شیفت و برنامه ریزی" ," شیفت ها"]  , [<><IoMdExit className="w-7 h-7"/></> , "fdsf" , "انفصال از خدمت" ,"تنظیمات انفصال از خدمت"]  ] } />
            </div>
        </>
    );
}
 
export default Personnel;