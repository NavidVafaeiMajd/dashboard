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
import NewsList from "./components/pages/HumanResourceManagement/NewsList/NewsList";
import MonthlyAttendance from "./components/pages/RollCall/MonthlyAttendance/MonthlyAttendance";
import ManualAttendance from "./components/pages/RollCall/ManualAttendance/ManualAttendance";
import OverTimeRequest from "./components/pages/RollCall/OverTimeRequest/OverTimeRequest";
import LayoutEmploymentCertificate from "./components/pages/EmploymentCertificate/Layout";
import AssetsList from "./components/pages/EmploymentCertificate/AssetsList/AssetsList";
import AssetsCategory from "./components/pages/EmploymentCertificate/assetsCategory/AssetsCategory";
import LayoutPayroll from "./components/pages/Payroll/Layout";
import PayrollList from "./components/pages/Payroll/PayrollList/PayrollList";
import PayslipHistory from "./components/pages/Payroll/PayslipHistory/PayslipHistory";
import AdvanceSalary from "./components/pages/Payroll/AdvanceSalary/AdvanceSalary";
import Leads from "./components/pages/Leads/Leads";
import LayoutBankaccount from "./components/pages/bank/layoutBank";
import MainBank from "./components/pages/bank/AccountBank/mainBank";
import AmmountMain from "./components/pages/bank/ammount/AmmountMain";
import MainList from "./components/pages/bank/deposit-list/mainList";
import MaintransactionsList from "./components/pages/bank/transactionsList/MaintransactionsList";
import LayoutPerformance from "./components/pages/Performance/Layout";
import PerformanceRating from "./components/pages/Performance/Rating/PerformanceRating";
import EmployeDetailse from "./components/pages/employeDetailse/employeDetailse";
import NotFound from "./NotFound";
import EmployeeRating from "./components/pages/Performance/Employee/EmployeeRating";
import TrackGoals from "./components/pages/Performance/TrackGoals/TrackGoals";
import SetupIndicator from "./components/pages/Performance/SetupIndicator/SetupIndicator";

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
                     className={`w-[25%] overflow-auto ${
                        isNavbarOpen ? "show" : "max-lg:hidden"
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
                           <Route
                              path="news-list"
                              element={<NewsList />}
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
                           <Route
                              path="monthly-attendance"
                              element={<MonthlyAttendance />}
                           />
                           <Route
                              path="manual-attendance"
                              element={<ManualAttendance />}
                           />
                           <Route
                              path="overtime-request"
                              element={<OverTimeRequest />}
                           />
                        </Route>
                        <Route
                           path="exit-type"
                           element={<ExitType />}
                        />

                        <Route
                           path="employeeCert"
                           element={<LayoutEmploymentCertificate />}
                        >
                           <Route
                              element={<AssetsList />}
                              path="assets-list"
                           />
                           <Route
                              element={<AssetsCategory />}
                              path="assets-category"
                           />
                        </Route>

                        <Route
                           path="payroll"
                           element={<LayoutPayroll />}
                        >
                           <Route
                              path="payroll-list"
                              element={<PayrollList />}
                           />
                           <Route
                              path="payslip-history"
                              element={<PayslipHistory />}
                           />
                           <Route
                              path="advance-salary"
                              element={<AdvanceSalary />}
                           />
                        </Route>
                        <Route
                           path="leads"
                           element={<Leads />}
                        />
                        <Route
                           path="accounts-list"
                           element={<LayoutBankaccount />}
                        >
                           <Route
                              index
                              element={<MainBank />}
                           />
                           <Route
                              path="deposit-list"
                              element={<AmmountMain />}
                           />
                           <Route
                              path="expense-list"
                              element={<MainList />}
                           />
                           <Route
                              path="transactions-list"
                              element={<MaintransactionsList />}
                           />
                        </Route>

                        <Route
                           element={<LayoutPerformance />}
                           path="performance"
                        >
                           <Route
                              element={<PerformanceRating />}
                              path="indicator-rating"
                           />

                           <Route
                              element={<EmployeeRating />}
                              path="employee-rating"
                           />
                           <Route
                              element={<TrackGoals />}
                              path="track-goals"
                           />

                           <Route
                              element={<SetupIndicator />}
                              path="setup-indicator"
                           />
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
