import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
const Breadcrumb = ({children} : {children : string}) => {
    return (
        <>
            <div className="flex gap-2 items-center" id="breadcrumb">
                <NavLink className="hover:text-cupurple" to={"/"}>پیشخـوان</NavLink >
                <span><IoIosArrowForward/></span>
                <span className="text-black/50">{children}</span>
            </div>
        </>
    );
}
 
export default Breadcrumb;