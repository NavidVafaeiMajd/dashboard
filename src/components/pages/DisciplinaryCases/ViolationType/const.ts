import type { violationTypeColumnProps } from "./columns";

export const VIOLATION_TYPE_CONSTANTS: violationTypeColumnProps[] = [
    {
        id: "1",
        name: "تاخیر در ورود",
        severity: "خفیف",
        defaultAction: "تذکر شفاهی",
        description: "تاخیر در ورود به محل کار",
    },
    {
        id: "2",
        name: "غیبت غیرمجاز",
        severity: "متوسط",
        defaultAction: "تذکر کتبی",
        description: "غیبت بدون اطلاع قبلی",
    },
    {
        id: "3",
        name: "عدم رعایت قوانین",
        severity: "شدید",
        defaultAction: "کسر حقوق",
        description: "نقض قوانین و مقررات سازمانی",
    },
    {
        id: "4",
        name: "استفاده نادرست از امکانات",
        severity: "متوسط",
        defaultAction: "تذکر کتبی",
        description: "استفاده شخصی از امکانات شرکت",
    },
    {
        id: "5",
        name: "عدم رعایت ایمنی",
        severity: "شدید",
        defaultAction: "تعلیق",
        description: "عدم رعایت نکات ایمنی در محیط کار",
    },
];
