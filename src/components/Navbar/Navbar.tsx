import NavbarItems from "./NavbarItems";
import { CiHome } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { TfiTarget } from "react-icons/tfi";
import { GoClock } from "react-icons/go";
// import { AiOutlineMobile } from "react-icons/ai";
import { FiUserCheck } from "react-icons/fi";
// import { FiUserPlus } from "react-icons/fi";
import { RiCameraLensLine } from "react-icons/ri";

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
        className="lg:h-[calc(100vh-110px)]! h-full z-50 fixed w-[70%] mt-1 lg:w-[20%] lg:right-10 overflow-auto bg-navbar shadow-xl"
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
              ["واحد سازمانی ", "/hr/departments-list"],
              ["سمت سازمانی", "/hr/designation-list"],
              ["ابلاغیه", "/hr/news-list"],
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
              [" حضور و غیاب ", "/rollcall/attendance-list"],
              ["ثبت تردد دستی پرسنل", "/rollcall/manual-attendance"],
              ["گزارش کارکرد ماهانه", "/rollcall/monthly-attendance"],
            ]}
          />
          {/* <NavbarItems
                  DropMenu={false}
                  itemInfo={[
                     <>
                        {" "}
                        <AiOutlineMobile className="w-7 h-7" /> عملیات حقوق
                     </>,
                     "/payroll/payroll-list",
                  ]}
                  dropInfo={[]}
               /> */}
          <NavbarItems
            DropMenu={false}
            itemInfo={[
              <>
                {" "}
                <FiUserCheck className="w-7 h-7" /> مدیریت مشتریان
              </>,
              "/clients-list",
            ]}
            dropInfo={[]}
          />
          {/* <NavbarItems
                  DropMenu={false}
                  itemInfo={[
                     <>
                        {" "}
                        <FiUserPlus className="w-7 h-7" /> رهبران{" "}
                     </>,
                     "/leads",
                  ]}
                  dropInfo={[]}
               /> */}
          <NavbarItems
            DropMenu={true}
            itemInfo={[
              <>
                {" "}
                <RiCameraLensLine className="w-7 h-7" /> ارزیابی عملکرد کارکنان{" "}
              </>,
              "performance",
            ]}
            dropInfo={[
              ["رتبه بندی شاخص ها", "/performance/indicator-rating"],
              ["ارزیابی کارکنان", "/performance/employee-rating"],
              ["پیگیری اهداف (OKR)", "/performance/track-goals"],
              ["تنظیم اندیکاتور", "/performance/setup-indicator"],
            ]}
          />
          <NavbarItems
            DropMenu={false}
            itemInfo={[
              <>
                {" "}
                <CiSquarePlus className="w-7 h-7" /> درخواست مرخصی{" "}
              </>,
              "/leave/list",
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
              "/teaching",
            ]}
            dropInfo={[]}
          />
          <NavbarItems
            DropMenu={false}
            itemInfo={[
              <>
                {" "}
                <BsExclamationCircle className="w-7 h-7" /> پرونده های انضباطی{" "}
              </>,
              "/disciplinary/list",
            ]}
            dropInfo={[]}
          />
          <NavbarItems
            DropMenu={false}
            itemInfo={[
              <>
                {" "}
                <BsExclamationCircle className="w-7 h-7" /> مدیریت اسناد  {" "}
              </>,
              "/documents",
            ]}
            dropInfo={[]}
          />
        </ul>
      </div>
    </>
  );
};

export default Navbar;
