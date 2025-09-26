import Breadcrumb from "@/components/shared/breadcrumb";
import Smartwizard from "@/components/shared/Smartwizard";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { FaUserFriends } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";

const DocumentsLayout = () => {
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
                            " اسناد های عمومی "   ,
                            "مشاهده اسناد های عمومی ",
                         ],
                         [
                            <>
                               <IoMdExit className="w-7 h-7" />
                            </>,
                            "privte",
                            " اسناد های خصوصی  ",
                            "مدیریت اسناد های حصوصی ",
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
}
 
export default DocumentsLayout;