import { AiOutlineMenu } from "react-icons/ai";
import { FiUserCheck } from "react-icons/fi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useProfile } from "@/hook/useProfile";
import { HiUserCircle } from "react-icons/hi2";

interface ChildProps {
  headerMenu: () => void;
}
const Header: React.FC<ChildProps> = ({ headerMenu }) => {
  const [fisrtMenu, setFisrtMenu] = useState(false);
  const [secoundMenu, setSecoundMenu] = useState(false);
  const { data: queryData, isLoading } = useProfile();

  return (
    <>
      <div className="bg-primary max-md:bg-[#161C25] text-white h-[75px] px-10 w-full! ">
        <div className=" flex justify-between items-center h-full!">
          <div id="right-header " className="flex gap-3">
            <HiOutlineDotsVertical
              onClick={() => {
                setFisrtMenu(!fisrtMenu);
              }}
              className="w-8 h-8 md:hidden"
            />
            <AiOutlineMenu
              onClick={() => {
                setSecoundMenu(!secoundMenu);
              }}
              className="w-8 h-8 md:hidden"
            />
            <ul
              className={`flex transition! ease-in-out delay-150 duration-300  items-center gap-5 ${
                fisrtMenu ? "max-md:top-[75px]" : "max-md:top-[0px]"
              } max-md:fixed max-md:-z-10!  max-md:bg-white max-md:right-0 max-md:w-full max-md:text-primary `}
            >
              {isLoading ? (
                "درحال بارگزاری"
              ) : (
                <li className="px-5 py-1">
                  <a href="#" className="flex items-center gap-2">
                    <div>
                      {queryData?.image ? (
                        <img
                          className="w-20 rounded-full"
                          src={`http://localhost:8000/${queryData?.image}`}
                          alt=""
                        />
                      ) : (
                        <HiUserCircle className="w-20 h-25" />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <span>
                        {queryData?.first_name} {queryData?.last_name}
                      </span>
                      <span>{queryData?.username}</span>
                    </div>
                  </a>
                </li>
              )}
            </ul>
          </div>
          <div id="left-header" className="flex items-center gap-3 relative">
            <div
              id="header-icon "
              className={`flex flex-row items-center gap-2 ${
                secoundMenu ? "show" : "max-md:hidden"
              } max-md:fixed max-md:top-0 max-md:right-0 max-md:w-full max-md:h-20 max-md:mt-15 max-md:bg-[#161C25]`}
            >
              <span className="relative group">
                <Link to={"/account"}>
                  <FiUserCheck className="w-8 h-8 bg-white/20 p-1 rounded-full" />
                </Link>
                <span className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                  حساب کاربری
                </span>
              </span>
            </div>
            <div id="mobile-menu-header">
              <AiOutlineMenu
                onClick={headerMenu}
                className="w-8 h-8 lg:hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
