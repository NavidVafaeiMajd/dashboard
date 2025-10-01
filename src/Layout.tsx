import Header from "./components/shared/Header";
import Navbar from "./components/Navbar/Navbar";
import { lazy } from "react";
import { useBootstrapData } from "./hook/useBootstrapData";
const Desk = lazy(() => import("./components/pages/Desk"));
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
const LayoutStaffList = lazy(
  () => import("./components/pages/Staff/LayoutStaffList")
);
const StaffList = lazy(
  () => import("./components/pages/Staff/StaffList/StaffList")
);
const SetRoles = lazy(
  () => import("./components/pages/Staff/SetRoles/SetRoles")
);
const OfficeShifts = lazy(
  () => import("./components/pages/Staff/OfficeShifts/OfficeShifts")
);
const EmployExit = lazy(
  () => import("./components/pages/Staff/EmployExit/EmployExit")
);
import { ToastContainer } from "react-toastify";
const LayoutHumanResource = lazy(
  () => import("./components/pages/HumanResourceManagement/LayoutHumanResource")
);
const OrganizationalUnit = lazy(
  () =>
    import(
      "./components/pages/HumanResourceManagement/OrganizationalUnit/OrganizationalUnit"
    )
);
const OrganizationalPosition = lazy(
  () =>
    import(
      "./components/pages/HumanResourceManagement/OrganizationalPosition/OrganizationalPosition"
    )
);
const ExitType = lazy(
  () => import("./components/pages/Staff/EmployExit/ExitType/ExitType")
);
const Policies = lazy(
  () => import("./components/pages/HumanResourceManagement/Policies/Policies")
);
import { useNavbar } from "./Context/NavbarContext";
const LayoutRollCall = lazy(() => import("./components/pages/RollCall/Layout"));
const AttendanceList = lazy(
  () => import("./components/pages/RollCall/AttendanceList/AttendanceList")
);
const NewsList = lazy(
  () => import("./components/pages/HumanResourceManagement/NewsList/NewsList")
);
const MonthlyAttendance = lazy(
  () =>
    import("./components/pages/RollCall/MonthlyAttendance/MonthlyAttendance")
);
const ManualAttendance = lazy(
  () => import("./components/pages/RollCall/ManualAttendance/ManualAttendance")
);
const OverTimeRequest = lazy(
  () => import("./components/pages/RollCall/OverTimeRequest/OverTimeRequest")
);
const LayoutEmploymentCertificate = lazy(
  () => import("./components/pages/EmploymentCertificate/Layout")
);
const AssetsList = lazy(
  () => import("./components/pages/EmploymentCertificate/AssetsList/AssetsList")
);
const AssetsCategory = lazy(
  () =>
    import(
      "./components/pages/EmploymentCertificate/assetsCategory/AssetsCategory"
    )
);
const LayoutPayroll = lazy(() => import("./components/pages/Payroll/Layout"));
const PayrollList = lazy(
  () => import("./components/pages/Payroll/PayrollList/PayrollList")
);
const PayslipHistory = lazy(
  () => import("./components/pages/Payroll/PayslipHistory/PayslipHistory")
);
const PayslipDetailsPage = lazy(
  () => import("./components/pages/Payroll/PayslipHistory/PayslipDetailsPage")
);
const AdvanceSalary = lazy(
  () => import("./components/pages/Payroll/AdvanceSalary/AdvanceSalary")
);
const Leads = lazy(() => import("./components/pages/Leads/Leads"));
const LayoutBankaccount = lazy(
  () => import("./components/pages/bank/layoutBank")
);
const MainBank = lazy(
  () => import("./components/pages/bank/AccountBank/mainBank")
);
const AmmountMain = lazy(
  () => import("./components/pages/bank/ammount/AmmountMain")
);
const MainList = lazy(
  () => import("./components/pages/bank/deposit-list/mainList")
);
const MaintransactionsList = lazy(
  () => import("./components/pages/bank/transactionsList/MaintransactionsList")
);
const MainclientsList = lazy(
  () => import("./components/pages/ClientsList/MainclientsList")
);
const PerformanceRating = lazy(
  () => import("./components/pages/Performance/Rating/PerformanceRating")
);
const LayoutPerformance = lazy(
  () => import("./components/pages/Performance/Layout")
);
const EmployeDetailse = lazy(
  () => import("./components/pages/UserPage/UserPage")
);
const NotFound = lazy(() => import("./NotFound"));
const EmployeeRating = lazy(
  () => import("./components/pages/Performance/Employee/EmployeeRating")
);
const TrackGoals = lazy(
  () => import("./components/pages/Performance/TrackGoals/TrackGoals")
);
const TechnicalIndicator = lazy(
  () =>
    import("./components/pages/Performance/SetupIndicator/TechnicalIndicator")
);
const BehavioralIndicator = lazy(
  () =>
    import("./components/pages/Performance/SetupIndicator/BehavioralIndicator")
);
const GoalType = lazy(
  () => import("./components/pages/Performance/GoalType/GoalType")
);
const LayoutLeave = lazy(() => import("./components/pages/Leave/Layout"));
const LeaveList = lazy(() => import("./components/pages/Leave/List/LeaveList"));
const LeaveDetailsPage = lazy(
  () => import("./components/pages/Leave/List/LeaveDetailsPage")
);
const ClientPage = lazy(
  () => import("./components/pages/ClientsList/UserPage/ClientPage")
);
import ProtectedRoute from "./routes/ProtectedRoute/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute/PublicRoute";
const LoginPage = lazy(() => import("./components/pages/login/LoginPage"));
const LeaveType = lazy(() => import("./components/pages/Leave/LeaveType"));
const LayoutDisciplinaryCases = lazy(
  () => import("./components/pages/DisciplinaryCases")
);
const DisciplinaryList = lazy(
  () => import("./components/pages/DisciplinaryCases/List")
);
const ViolationType = lazy(
  () => import("./components/pages/DisciplinaryCases/ViolationType")
);
import AuthProvider, { useAuth } from "./Context/AuthContext";
import DocumentsLayout from "./components/pages/Documents/DocumentsLayout";
import PublicDocuments from "./components/pages/Documents/PublicDocuments/PublicDocuments";
import PrivateDocuments from "./components/pages/Documents/PrivateDocuments/PrivateDocuments";
const AccountPage = lazy(
  () => import("./components/pages/AccountPage/AccountPage")
);
const LayoutTeching = lazy(
  () => import("./components/pages/Teachings/layoutTeaching")
);
const LearningPage = lazy(
  () => import("./components/pages/Teachings/Learning/mainLearing")
);
const LearningDetailsPage = lazy(
  () => import("./components/pages/Teachings/Learning/LearningDetailsPage")
);
const TecherInfo = lazy(
  () => import("./components/pages/Teachings/TecherInfo/mainTecherInfo")
);
const TraningSkills = lazy(
  () => import("./components/pages/Teachings/TrainingSkills/TrainingSkills")
);
const LeadPage = lazy(
  () => import("./components/pages/Leads/LeadPage/LeadPage")
);
const NewsListDetailes = lazy(
  () =>
    import(
      "./components/pages/HumanResourceManagement/NewsList/NewaListDetailes/NewsListDetailes"
    )
);
const AccountsListDetails = lazy(
  () =>
    import(
      "./components/pages/bank/AccountBank/AccountsListDetails/AccountsListDetails"
    )
);
const DepositListDetails = lazy(
  () =>
    import(
      "./components/pages/bank/deposit-list/DepositListDetails/DepositListDetails"
    )
);
const ExpenseType = lazy(
  () => import("./components/pages/bank/deposit-list/ExpenseType/ExpenseType")
);
const PayrollListDetails = lazy(
  () =>
    import(
      "./components/pages/Payroll/PayrollList/PayrollListDetails/PayrollListDetails"
    )
);
const IndicatorRatingDetails = lazy(
  () =>
    import(
      "./components/pages/Performance/PerformanceDetails/IndicatorRatingDetails"
    )
);
const EmployeeRatingDetailes = lazy(
  () =>
    import(
      "./components/pages/Performance/PerformanceDetails/EmployeeRatingDetailes"
    )
);

const LayoutContent = () => {
  useBootstrapData();
  const { toggleNavbar, isNavbarOpen } = useNavbar();
  const location = useLocation();
  const { isLoggedIn } = useAuth();

  const isLoginPage = location.pathname === "/login";

  // Prevent dashboard flash for unauthenticated users
  if (!isLoginPage && !isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

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
        className={`flex flex-1 gap-[3.5rem] py-5 ${
          !isLoginPage ? "lg:mt-[75px] mt-[60px]" : ""
        } max-lg:flex-col`}
      >
        {/* فقط وقتی صفحه login نیست، نوبار نمایش داده می‌شود */}
        {!isLoginPage && (
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
        )}

        <div
          className={`${
            !isLoginPage ? "lg:w-[100%] overflow-auto px-5 md:px-10" : "w-full"
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
              path="account"
              element={
                <ProtectedRoute>
                  <AccountPage />
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
              path="news-list/:id"
              element={
                <ProtectedRoute>
                  <NewsListDetailes />
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
              <Route
                path="departments-list"
                element={
                  <ProtectedRoute>
                    <OrganizationalUnit />
                  </ProtectedRoute>
                }
              />
              <Route
                path="designation-list"
                element={
                  <ProtectedRoute>
                    <OrganizationalPosition />
                  </ProtectedRoute>
                }
              />
              <Route
                path="office-shifts"
                element={
                  <ProtectedRoute>
                    <OfficeShifts />
                  </ProtectedRoute>
                }
              />
              <Route
                path="policies-list"
                element={
                  <ProtectedRoute>
                    <Policies />
                  </ProtectedRoute>
                }
              />

              <Route
                path="news-list"
                element={
                  <ProtectedRoute>
                    <NewsList />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route
              path="rollcall"
              element={
                <ProtectedRoute>
                  <LayoutRollCall />
                </ProtectedRoute>
              }
            >
              <Route
                path="attendance-list"
                element={
                  <ProtectedRoute>
                    <AttendanceList />
                  </ProtectedRoute>
                }
              />
              <Route
                path="monthly-attendance"
                element={
                  <ProtectedRoute>
                    <MonthlyAttendance />
                  </ProtectedRoute>
                }
              />
              <Route
                path="manual-attendance"
                element={
                  <ProtectedRoute>
                    <ManualAttendance />
                  </ProtectedRoute>
                }
              />
              <Route
                path="overtime-request"
                element={
                  <ProtectedRoute>
                    <OverTimeRequest />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route
              path="exit-type"
              element={
                <ProtectedRoute>
                  <ProtectedRoute>
                    <ExitType />
                  </ProtectedRoute>
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
              <Route
                path="assets-list"
                element={
                  <ProtectedRoute>
                    <AssetsList />
                  </ProtectedRoute>
                }
              />
              <Route
                path="assets-category"
                element={
                  <ProtectedRoute>
                    <AssetsCategory />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route
              path="payroll"
              element={
                <ProtectedRoute>
                  <LayoutPayroll />
                </ProtectedRoute>
              }
            >
              <Route
                path="payroll-list"
                element={
                  <ProtectedRoute>
                    <PayrollList />
                  </ProtectedRoute>
                }
              />
              <Route
                path="payslip-history"
                element={
                  <ProtectedRoute>
                    <PayslipHistory />
                  </ProtectedRoute>
                }
              />

              <Route
                path="advance-salary"
                element={
                  <ProtectedRoute>
                    <AdvanceSalary />
                  </ProtectedRoute>
                }
              />
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
              path="leads/:id"
              element={
                <ProtectedRoute>
                  <LeadPage />
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
              <Route
                index
                element={
                  <ProtectedRoute>
                    <MainBank />
                  </ProtectedRoute>
                }
              />
              <Route
                path="deposit-list"
                element={
                  <ProtectedRoute>
                    <AmmountMain />
                  </ProtectedRoute>
                }
              />
              <Route
                path="expense-list"
                element={
                  <ProtectedRoute>
                    <MainList />
                  </ProtectedRoute>
                }
              />
              <Route
                path="expense-type"
                element={
                  <ProtectedRoute>
                    <ExpenseType />
                  </ProtectedRoute>
                }
              />
              <Route
                path="transactions-list"
                element={
                  <ProtectedRoute>
                    <MaintransactionsList />
                  </ProtectedRoute>
                }
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
              <Route
                element={<IndicatorRatingDetails />}
                path="indicator-rating/:id"
              />
              <Route
                element={<EmployeeRatingDetailes />}
                path="employee-rating/:id"
              />
              <Route path="employee-rating" element={<EmployeeRating />} />
              <Route path="track-goals" element={<TrackGoals />} />
              <Route path="setup-indicator" element={<TechnicalIndicator />} />
              <Route path="behavioral" element={<BehavioralIndicator />} />
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

            <Route path="teaching" element={<LayoutTeching />}>
              <Route index element={<LearningPage />} />
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
            <Route path="documents" element={<DocumentsLayout />}>
              <Route index element={<PublicDocuments />} />
              <Route path="private" element={<PrivateDocuments />} />
            </Route>
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
        <Routes>
          <Route
            path="bank/accounts-list-details/:id"
            element={<AccountsListDetails />}
          />
          <Route
            path="bank/deposit-list-details/:id"
            element={<DepositListDetails />}
          />
          <Route
            path="payroll/payroll-list-details/:id"
            element={<PayrollListDetails />}
          />
          <Route
            path="payslip-history/:id"
            element={
              <ProtectedRoute>
                <PayslipDetailsPage />
              </ProtectedRoute>
            }
          />
          <Route path="leave/details/:id" element={<LeaveDetailsPage />} />
          <Route
            path="learning/details/:id"
            element={<LearningDetailsPage />}
          />

          <Route path="/*" element={<LayoutContent />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default Layout;
