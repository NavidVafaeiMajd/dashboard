import type { leaveTypeColumnProps } from "./columns";

export const LEAVE_TYPE_CONSTANTS: leaveTypeColumnProps[] = [
    {
        id: "1",
        name: "مرخصی سالانه",
        daysPerYear: 30,
        requiresApproval: "بله",
    },
    {
        id: "2",
        name: "مرخصی استعلاجی",
        daysPerYear: 15,
        requiresApproval: "بله",
    },
    {
        id: "3",
        name: "مرخصی اضطراری",
        daysPerYear: 5,
        requiresApproval: "خیر",
    },
    {
        id: "4",
        name: "مرخصی زایمان",
        daysPerYear: 90,
        requiresApproval: "بله",
    },
    {
        id: "5",
        name: "مرخصی تشییع",
        daysPerYear: 3,
        requiresApproval: "خیر",
    },
];
