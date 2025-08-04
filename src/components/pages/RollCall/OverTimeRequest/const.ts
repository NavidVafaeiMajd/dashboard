import type { OverTimeRequestColumnProps } from "./columns";

export const OVERTIME_REQUEST_LIST:OverTimeRequestColumnProps[] = [
    {
        id: 1,
        employee: "علی رضایی",
        date: new Date("2023-10-01"),
        entryTime: "08:00",
        exitTime: "17:00",
        totalTime: "9 ساعت",
        status: "در انتظار تایید",
    },
    {
        id: 2,
        employee: "مریم حسینی",
        date: new Date("2023-10-02"),
        entryTime: "08:30",
        exitTime: "17:30",
        totalTime: "9 ساعت",
        status: "تایید شده",
    },
    {
        id: 3,
        employee: "حسین محمدی",
        date: new Date("2023-10-03"),
        entryTime: "09:00",
        exitTime: "18:00",
        totalTime: "9 ساعت",
        status: "رد شده",
    },
]