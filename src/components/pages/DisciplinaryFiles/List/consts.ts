import {
   CircleDollarSign,
   ClipboardCheck,
   Database,
   DollarSign,
} from "lucide-react";


export const stats = [
   {
      id: 0,
      title: "مجموع مرخصی",
      count: 2,
      color: "#3ec9d6",
      icon: CircleDollarSign,
   },
   {
      id: 1,
      title: "تایید شده",
      count: 2,
      color: "#89b0fa",
      icon: Database,
   },
   {
      id: 2,
      title: "رد شده",
      count: 20,
      color: "#98db63",
      icon: DollarSign,
   },
   {
      id: 3,
      title: "درحال بررسی",
      count: 2,
      color: "#f3c156",
      icon: ClipboardCheck,
   },
];
