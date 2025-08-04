import Header from "./components/shared/Header";
import Navbar from "./components/Navbar/Navbar";
import Desk from "./components/pages/Desk";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayoutStaffList from "./components/pages/Staff/LayoutStaffList";
import StaffList from "./components/pages/Staff/StaffList/StaffList";
import SetRoles from "./components/pages/Staff/SetRoles/SetRoles";
import OfficeShifts from "./components/pages/Staff/OfficeShifts/OfficeShifts";
import EmployExit from "./components/pages/Staff/EmployExit/EmployExit";
import { ToastContainer } from "react-toastify";
import LayoutHumanResource from "./components/pages/HumanResourceManagement/LayoutHumanResource";
import OrganizationalUnit from "./components/pages/HumanResourceManagement/OrganizationalUnit/OrganizationalUnit";
import OrganizationalPosition from "./components/pages/HumanResourceManagement/OrganizationalPosition/OrganizationalPosition";
import ExitType from "./components/pages/Staff/EmployExit/ExitType/ExitType";
import Policies from "./components/pages/HumanResourceManagement/Policies/Policies";
import { useNavbar } from "./Context/NavbarContext";
import LayoutRollCall from "./components/pages/RollCall/Layout";
import AttendanceList from "./components/pages/RollCall/AttendanceList/AttendanceList";
import LayoutBankaccount from "./components/pages/bank/layoutBank";
import MainBank from "./components/pages/bank/AccountBank/mainBank";
import MainList from "./components/pages/bank/deposit-list/mainList";
import MaintransactionsList from "./components/pages/bank/transactionsList/MaintransactionsList";
import ExpenseList from "./components/pages/bank/expenseList/expenseList";
import MainclientsList from "./components/pages/ClientsList/MainclientsList";
import AmmountMain from "./components/pages/bank/ammount/AmmountMain";
const Layout = () => {
   const { toggleNavbar, isNavbarOpen } = useNavbar();

   const handleDataFromChild = () => {
      toggleNavbar();
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
               <div className=" flex flex-1 gap-[3.5rem] py-5 lg:mt-[75px] mt-[60px] max-lg:flex-col">
                  <div
                     className={`w-[25%] overflow-auto ${isNavbarOpen ? "show" : "max-lg:hidden"
                        }`}
                  >
                     <Navbar />
                     <div
                        onClick={toggleNavbar}
                        className="max-lg:bg-black/50 md:hidden fixed h-full w-full z-9"
                     />
                  </div>
                  <div className="lg:w-[100%] overflow-auto  px-5 md:px-10">
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
                           path="rollcall"
                           element={<LayoutRollCall />}
                        >
                           <Route
                              path="attendance-list"
                              element={<AttendanceList />}
                           />
                        </Route>
                        <Route
                           path="exit-type"
                           element={<ExitType />}
                        />
                        <Route path="bank" element={<LayoutBankaccount />}>
                           <Route index element={<MainBank />} />
                           <Route path="deposit-list" element={<MainList />} />
                           <Route path="transactions-list" element={<MaintransactionsList />} />
                           <Route path="expense-list" element={<AmmountMain />} />
                        </Route>
                        <Route path="clients-list" element={<MainclientsList/>}>
                        
                        </Route>
                     </Routes>
                  </div>
               </div>
            </Router>
         </main>
      </>
   );
};

export default Layout;
