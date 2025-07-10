import { useState } from "react";
import { IoIosArrowUp , IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { GoDotFill } from "react-icons/go";

interface NavbarItemsProps {
    DropMenu: boolean,
    itemInfo : Array<string>,
    dropInfo : Array<Array<string>>
}
const NavbarItems = ({DropMenu , itemInfo , dropInfo} : NavbarItemsProps) => {
    const [openMenus, setOpenMenus] = useState(false);

    return (<>
        <li><NavLink className={({isActive})=> ` ${isActive?"bg-[#ebebeb]! text-blue-600":""}`} to={itemInfo[1]} onClick={() => { setOpenMenus(!openMenus) }}> { itemInfo[0]}
                {DropMenu? openMenus ? <IoIosArrowUp/> : <IoIosArrowBack/> :"" }
                </NavLink>
            {openMenus && DropMenu && (
                
                <ul>
                    {
                        dropInfo.map((info, index) => (
                            <li key={index}>
                                <NavLink className={({isActive})=> ` py-5! px-6! ${isActive?  " text-blue-600":""}`} to={info[1]}>
                                    {info[0]}
                                    <GoDotFill/>
                                </NavLink>
                            </li>
                        ))
                    }
                    <li>

                    </li>
                </ul>
                    )}
            </li>
    </>);
}
 
export default NavbarItems;