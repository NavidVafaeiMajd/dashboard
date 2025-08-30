import Header from "./components/shared/Header";
import Navbar from "./components/Navbar/Navbar";
import Desk from "./components/pages/Desk";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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
import MainclientsList from "./components/pages/ClientsList/MainclientsList";
import PerformanceRating from "./components/pages/Performance/Rating/PerformanceRating";
import LayoutPerformance from "./components/pages/Performance/Layout";
import EmployeDetailse from "./components/pages/UserPage/UserPage";
import NotFound from "./NotFound";
import EmployeeRating from "./components/pages/Performance/Employee/EmployeeRating";
import TrackGoals from "./components/pages/Performance/TrackGoals/TrackGoals";
import SetupIndicator from "./components/pages/Performance/SetupIndicator/SetupIndicator";
import GoalType from "./components/pages/Performance/GoalType/GoalType";
import LayoutLeave from "./components/pages/Leave/Layout";
import LeaveList from "./components/pages/Leave/List/LeaveList";
import ClientPage from "./components/pages/ClientsList/UserPage/ClientPage";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import PublicRoute from "./PublicRoute/PublicRoute";
import LoginPage from "./components/pages/login/LoginPage";
import LeaveType from "./components/pages/Leave/LeaveType";
import LayoutDisciplinaryCases from "./components/pages/DisciplinaryCases";
import DisciplinaryList from "./components/pages/DisciplinaryCases/List";
import ViolationType from "./components/pages/DisciplinaryCases/ViolationType";
import AuthProvider from "./Context/AuthContext";
import LayoutTeching from "./components/pages/Teachings/layoutTeaching";
import LearningPage from "./components/pages/Teachings/Learning/mainLearing"
import TecherInfo from "./components/pages/Teachings/TecherInfo/mainTecherInfo";
import TraningSkills from "./components/pages/Teachings/TrainingSkills/TrainingSkills";


const LayoutContent = () => {
  const { toggleNavbar, isNavbarOpen } = useNavbar();
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";

  const handleDataFromChild = () => {
    toggleNavbar();
  };

  return (
    <main className="w-full! min-h-screen flex flex-col">
      {/* فقط وقتی صفحه login نیست، هدر نمایش داده می‌شود */}
      {!isLoginPage && (
        <div className="fixed z-100 w-full">
          <Header headerMenu={handleDataFromChild} />
        </div>
      )}

      <ToastContainer toastClassName="custom-toast-font" position="top-right" />

      <div
        className={`flex flex-1 gap-[3.5rem] py-5 ${!isLoginPage ? "lg:mt-[75px] mt-[60px]" : ""
          } max-lg:flex-col`}
      >
        {/* فقط وقتی صفحه login نیست، نوبار نمایش داده می‌شود */}
        {!isLoginPage && (
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
        )}

        <div
          className={`${!isLoginPage ? "lg:w-[100%] overflow-auto px-5 md:px-10" : "w-full"
            }`}
        >
          <Routes>
            {/* Public Routes */}
            <Route
              path="login"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />

            {/* Protected Routes */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Desk />
                </ProtectedRoute>
              }
            />
            <Route
              path="users/:id"
              element={
                <ProtectedRoute>
                  <EmployeDetailse />
                </ProtectedRoute>
              }
            />
            <Route
              path="clients/:id"
              element={
                <ProtectedRoute>
                  <ClientPage />
                </ProtectedRoute>
              }
            />

            <Route
              path="staff"
              element={
                <ProtectedRoute>
                  <LayoutStaffList />
                </ProtectedRoute>
              }
            >
              <Route index element={<StaffList />} />
              <Route path="set-roles" element={<SetRoles />} />
              <Route path="office-shifts" element={<OfficeShifts />} />
              <Route path="employ-exit" element={<EmployExit />} />
            </Route>

            <Route
              path="hr"
              element={
                <ProtectedRoute>
                  <LayoutHumanResource />
                </ProtectedRoute>
              }
            >
              <Route path="departments-list" element={<OrganizationalUnit />} />
              <Route
                path="designation-list"
                element={<OrganizationalPosition />}
              />
              <Route path="office-shifts" element={<OfficeShifts />} />
              <Route path="policies-list" element={<Policies />} />
              <Route path="news-list" element={<NewsList />} />
            </Route>

            <Route
              path="rollcall"
              element={
                <ProtectedRoute>
                  <LayoutRollCall />
                </ProtectedRoute>
              }
            >
              <Route path="attendance-list" element={<AttendanceList />} />
              <Route
                path="monthly-attendance"
                element={<MonthlyAttendance />}
              />
              <Route path="manual-attendance" element={<ManualAttendance />} />
              <Route path="overtime-request" element={<OverTimeRequest />} />
            </Route>

            <Route
              path="exit-type"
              element={
                <ProtectedRoute>
                  <ExitType />
                </ProtectedRoute>
              }
            />

            <Route
              path="employeeCert"
              element={
                <ProtectedRoute>
                  <LayoutEmploymentCertificate />
                </ProtectedRoute>
              }
            >
              <Route path="assets-list" element={<AssetsList />} />
              <Route path="assets-category" element={<AssetsCategory />} />
            </Route>

            <Route
              path="payroll"
              element={
                <ProtectedRoute>
                  <LayoutPayroll />
                </ProtectedRoute>
              }
            >
              <Route path="payroll-list" element={<PayrollList />} />
              <Route path="payslip-history" element={<PayslipHistory />} />
              <Route path="advance-salary" element={<AdvanceSalary />} />
            </Route>

            <Route
              path="leads"
              element={
                <ProtectedRoute>
                  <Leads />
                </ProtectedRoute>
              }
            />

            <Route
              path="accounts-list"
              element={
                <ProtectedRoute>
                  <LayoutBankaccount />
                </ProtectedRoute>
              }
            >
              <Route index element={<MainBank />} />
              <Route path="deposit-list" element={<AmmountMain />} />
              <Route path="expense-list" element={<MainList />} />
              <Route
                path="transactions-list"
                element={<MaintransactionsList />}
              />
            </Route>

            <Route
              path="performance"
              element={
                <ProtectedRoute>
                  <LayoutPerformance />
                </ProtectedRoute>
              }
            >
              <Route path="indicator-rating" element={<PerformanceRating />} />
              <Route path="employee-rating" element={<EmployeeRating />} />
              <Route path="track-goals" element={<TrackGoals />} />
              <Route path="setup-indicator" element={<SetupIndicator />} />
              <Route path="goals-type" element={<GoalType />} />
            </Route>

            <Route
              path="leave"
              element={
                <ProtectedRoute>
                  <LayoutLeave />
                </ProtectedRoute>
              }
            >
              <Route path="list" element={<LeaveList />} />
              <Route path="type" element={<LeaveType />} />
            </Route>

            <Route
              path="disciplinary"
              element={
                <ProtectedRoute>
                  <LayoutDisciplinaryCases />
                </ProtectedRoute>
              }
            >
              <Route path="list" element={<DisciplinaryList />} />
              <Route path="type" element={<ViolationType />} />
            </Route>

            <Route path="teching" element={<LayoutTeching />}>
              <Route path="learn" element={<LearningPage />} />
              <Route path="techerinfo" element={<TecherInfo />} />
              <Route path="traningskills" element={<TraningSkills />} />
            </Route>

            <Route
              path="clients-list"
              element={
                <ProtectedRoute>
                  <MainclientsList />
                </ProtectedRoute>
              }
            />

            {/* Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </main>
  );
};

const Layout = () => {
  return (
    <AuthProvider>
      <Router>
        <LayoutContent />
      </Router>
    </AuthProvider>
  );
};

export default Layout;
