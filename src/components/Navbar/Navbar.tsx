import NavbarItems from "./NavbarItems";
import { CiHome } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { TfiTarget } from "react-icons/tfi";
import { GoClock } from "react-icons/go";
import { MdPayment } from "react-icons/md";
import { SiNordicsemiconductor } from "react-icons/si";
import { AiOutlineMobile } from "react-icons/ai";
import { FiUserCheck } from "react-icons/fi";
import { FiUserPlus } from "react-icons/fi";
import { RiCameraLensLine } from "react-icons/ri";
import { TbArrowsExchange2 } from "react-icons/tb";
import { CiCircleQuestion } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";
import { MdOutlineRadar } from "react-icons/md";
import { BsExclamationCircle } from "react-icons/bs";
import { useNavbar } from "@/Context/NavbarContext";

const Navbar = () => {
   const navb = useNavbar();
   console.log(navb);

   return (
      <>
         {/* nav height */}
         <div
            id="navbar-content"
            className="lg:h-[calc(100vh-110px)]! h-full z-10 fixed  w-[70%] mt-1 lg:w-[300px] lg:right-10 overflow-auto bg-navbar shadow-xl"
            style={{ direction: "ltr", textAlign: "right" }}
         >
            <ul>
               <NavbarItems
                  DropMenu={false}
                  itemInfo={[
                     <>
                        {" "}
                        <CiHome className="w-7 h-7" /> پیشخـوان
                     </>,
                     "/",
                  ]}
                  dropInfo={[]}
               />
               <NavbarItems
                  DropMenu={false}
                  itemInfo={[
                     <>
                        {" "}
                        <FiUsers className="w-7 h-7" /> پرسنل
                     </>,
                     "/staff",
                  ]}
                  dropInfo={[]}
               />
               <NavbarItems
                  DropMenu={true}
                  itemInfo={[
                     <>
                        {" "}
                        <TfiTarget className="w-7 h-7" /> مدیریت منابع انسانی
                     </>,
                     "hr",
                  ]}
                  dropInfo={[
                     ["واحد سازمانی ", "hr/departments-list"],
                     ["سمت سازمانی", "hr/designation-list"],
                     ["خط مشی ها", "hr/policies-list"],
                     ["ابلاغیه", "managment/eblaghie"],
                     ["چارت سازمانی ", "managment/chart"],
                  ]}
               />
               <NavbarItems
                  DropMenu={true}
                  itemInfo={[
                     <>
                        {" "}
                        <GoClock className="w-7 h-7" /> حضور و غیاب
                     </>,
                     "rollcall",
                  ]}
                  dropInfo={[
                     [" حضور و غیاب ", "rollcall/attendance-list"],
                     ["ثبت تردد دستی پرسنل", "rollcall/manual-attendance"],
                     ["گزارش کارکرد ماهانه", "rollcall/monthly-attendance"],
                     ["درخواست اضافه کاری", "rollcall/overtime-request"],
                  ]}
               />
               <NavbarItems
                  DropMenu={false}
                  itemInfo={[
                     <>
                        {" "}
                        <MdPayment className="w-7 h-7" />
                        حساب بانکی{" "}
                     </>,
                     "/bank",
                  ]}
                  dropInfo={[]}
               />
               <NavbarItems
                  DropMenu={false}
                  itemInfo={[
                     <>
                        {" "}
                        <SiNordicsemiconductor className="w-7 h-7" /> گواهی
                        اشتغال به کار
                     </>,
                     "/govahi",
                  ]}
                  dropInfo={[]}
               />
               <NavbarItems
                  DropMenu={false}
                  itemInfo={[
                     <>
                        {" "}
                        <AiOutlineMobile className="w-7 h-7" /> عملیات حقوق
                     </>,
                     "/hoghoogh",
                  ]}
                  dropInfo={[]}
               />
               <NavbarItems
                  DropMenu={false}
                  itemInfo={[
                     <>
                        {" "}
                        <FiUserCheck className="w-7 h-7" /> مدیریت مشتریان
                     </>,
                     "/moshtarian",
                  ]}
                  dropInfo={[]}
               />
               <NavbarItems
                  DropMenu={false}
                  itemInfo={[
                     <>
                        {" "}
                        <FiUserPlus className="w-7 h-7" /> رهبران{" "}
                     </>,
                     "/rahbaran",
                  ]}
                  dropInfo={[]}
               />
               <NavbarItems
                  DropMenu={false}
                  itemInfo={[
                     <>
                        {" "}
                        <RiCameraLensLine className="w-7 h-7" /> ارزیابی عملکرد
                        کارکنان{" "}
                     </>,
                     "/arzyabi",
                  ]}
                  dropInfo={[]}
               />
               <NavbarItems
                  DropMenu={false}
                  itemInfo={[
                     <>
                        {" "}
                        <TbArrowsExchange2 className="w-7 h-7" /> ترفیعات و
                        تبدیل وضعیت{" "}
                     </>,
                     "/tarfiyat",
                  ]}
                  dropInfo={[]}
               />
               <NavbarItems
                  DropMenu={false}
                  itemInfo={[
                     <>
                        {" "}
                        <CiCircleQuestion className="w-7 h-7" /> پشتیبـانی{" "}
                     </>,
                     "/support",
                  ]}
                  dropInfo={[]}
               />
               <NavbarItems
                  DropMenu={false}
                  itemInfo={[
                     <>
                        {" "}
                        <CiSquarePlus className="w-7 h-7" /> درخواست مرخصی{" "}
                     </>,
                     "/morkhasi",
                  ]}
                  dropInfo={[]}
               />
               <NavbarItems
                  DropMenu={false}
                  itemInfo={[
                     <>
                        {" "}
                        <MdOutlineRadar className="w-7 h-7" /> آموزش{" "}
                     </>,
                     "/amoozesh",
                  ]}
                  dropInfo={[]}
               />
               <NavbarItems
                  DropMenu={false}
                  itemInfo={[
                     <>
                        {" "}
                        <BsExclamationCircle className="w-7 h-7" /> پرونده های
                        انضباطی{" "}
                     </>,
                     "/enzebati",
                  ]}
                  dropInfo={[]}
               />
            </ul>
         </div>
      </>
   );
};

export default Navbar;
