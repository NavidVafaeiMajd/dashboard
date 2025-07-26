import Header from "./component/Header";
import Navbar from "./component/Navbar/Navbar";
import Desk from "./component/pages/Desk";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import LayoutStaffList from "./component/pages/Staff/LayoutStaffList";
import StaffList from "./component/pages/Staff/StaffList/StaffList";
import SetRoles from "./component/pages/Staff/SetRoles/SetRoles";
import OfficeShifts from "./component/pages/Staff/OfficeShifts/OfficeShifts";
import EmployExit from "./component/pages/Staff/EmployExit/EmployExit";
import { ToastContainer } from "react-toastify";
import LayoutHumanResource from "./component/pages/HumanResourceManagement/LayoutHumanResource";
import OrganizationalUnit from "./component/pages/HumanResourceManagement/OrganizationalUnit/OrganizationalUnit";
import OrganizationalPosition from "./component/pages/HumanResourceManagement/OrganizationalPosition/OrganizationalPosition";
import ExitType from "./component/pages/Staff/EmployExit/ExitType/ExitType";
import Policies from "./component/pages/HumanResourceManagement/Policies/Policies";

const Layout = () => {
   const [headerMenu, setheaderMenu] = useState<boolean>(false);

   const handleDataFromChild = () => {
      setheaderMenu((prev) => !prev);
   };
   return (
      <>
         <main className="w-full! min-h-screen flex flex-col">
            <div className="fixed z-100 w-full">
               <Header headerMenu={handleDataFromChild} />
            </div>
            <Router>
               <ToastContainer
                  toastClassName="custom-toast-font"
                  position="top-right"
               />
               <div className=" flex flex-1 py-5 lg:mt-[75px] mt-[50px] max-lg:flex-col">
                  <div
                     className={`w-[25%] overflow-auto ${
                        headerMenu ? "show" : "max-lg:hidden"
                     }`}
                  >
                     <Navbar />
                     <div className="max-lg:bg-black/50 md:hidden fixed h-full w-full z-9"></div>
                  </div>
                  <div className="lg:w-[85%] overflow-auto  px-5 md:px-10">
                     <Routes>
                        <Route
                           path="/"
                           element={<Desk />}
                        />
                        <Route
                           path="staff"
                           element={<LayoutStaffList />}
                        >
                           <Route
                              index
                              element={<StaffList />}
                           />
                           <Route
                              path="set-roles"
                              element={<SetRoles />}
                           />
                           <Route
                              path="office-shifts"
                              element={<OfficeShifts />}
                           />
                           <Route
                              path="employ-exit"
                              element={<EmployExit />}
                           />
                        </Route>
                        <Route
                           path="hr"
                           element={<LayoutHumanResource />}
                        >
                           <Route
                              path="departments-list"
                              element={<OrganizationalUnit />}
                           />
                           <Route
                              path="designation-list"
                              element={<OrganizationalPosition />}
                           />
                           <Route
                              path="office-shifts"
                              element={<OfficeShifts />}
                           />
                           <Route
                              path="policies-list"
                              element={<Policies />}
                           />
                        </Route>
                        <Route
                           path="exit-type"
                           element={<ExitType />}
                        />
                     </Routes>
                  </div>
               </div>
            </Router>
         </main>
      </>
   );
};

export default Layout;
