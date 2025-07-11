import { SiTicktick } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
import { FiPieChart } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { FiUserCheck } from "react-icons/fi";

const Header = () => {
    return (
    <>
            <div className="bg-primary text-white h-[75px] px-10 w-full!">
                <div className=" flex justify-between items-center h-full!">
                    <div id="right-header">
                        <ul className="flex items-center gap-5">
                                <li className="px-5 py-1">
                                    <a href="#" className="flex items-center gap-2">
                                        <div><img className="w-10 rounded-full" src="https://trust.jaferi.ir/public/uploads/users/thumb/Untitled-1.jpg" alt="" /></div>
                                        <div className="flex flex-col">
                                            <span>jaferi jaferi</span>
                                            <span>jaferi</span>
                                        </div>
                                    </a>
                            </li>
                                <li className="px-3 py-2">
                                    <a href="#">
                                        <SiTicktick className="w-5 h-5"/>
                                    </a>
                            </li>
                        </ul>
                    </div>
                    <div id="left-header" className="flex items-center gap-3">
                        <div id="header-icon " className="flex flex-row items-center gap-2">
                            <span><a href="#"><IoSettingsOutline className="w-8 h-8 bg-white/20 p-1 rounded-full"/></a></span>
                            <span><a href="#"><FiPieChart className="w-8 h-8 bg-white/20 p-1 rounded-full"/></a></span>
                            <span><a href="#"><AiOutlineMenu className="w-8 h-8 bg-white/20 p-1 rounded-full" /></a></span>
                            <span><a href="#"><FiUserCheck className="w-8 h-8 bg-white/20 p-1 rounded-full"/></a></span>
                        </div>
                        <div id="user-icon">
                            <a href="">
                                <img className="w-15" src="https://trust.jaferi.ir/public/uploads/logo/serv.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
        </div>
    </>);
}
 
export default Header;