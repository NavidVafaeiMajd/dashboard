import { lazy } from "react";

const StaffList = lazy(() => import("../components/pages/Staff/StaffList/StaffList"));
const SetRoles = lazy(() => import("../components/pages/Staff/SetRoles/SetRoles"));
const OfficeShifts = lazy(() => import("../components/pages/Staff/OfficeShifts/OfficeShifts"));
const EmployExit = lazy(() => import("../components/pages/Staff/EmployExit/EmployExit"));

export const staffRoutes = [
    {
        path: "/staff",
        element: <StaffList />,
    },
    {
        path: "/staff/set-roles",
        element: <SetRoles />,
    },
    {
        path: "/staff/office-shifts",
        element: <OfficeShifts />,
    },
    {
        path: "/staff/employ-exit",
        element: <EmployExit />,
    },
];