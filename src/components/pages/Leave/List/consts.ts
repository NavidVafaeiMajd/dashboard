import {
   CircleDollarSign,
   ClipboardCheck,
   Database,
   DollarSign,
} from "lucide-react";
import { useGetData } from "@/hook/useGetData";

export const useLeaveStats = () => {
  const { data: reportData, isLoading } = useGetData("leaves/report");
  
  const report = Array.isArray(reportData) ? reportData[0] : null;
  
  const stats = [
    {
      id: 0,
      title: "مجموع مرخصی",
      count: report?.total || 0,
      color: "#3ec9d6",
      icon: CircleDollarSign,
    },
    {
      id: 1,
      title: "تایید شده",
      count: parseInt(report?.approved || "0"),
      color: "#89b0fa",
      icon: Database,
    },
    {
      id: 2,
      title: "رد شده",
      count: parseInt(report?.rejected || "0"),
      color: "#98db63",
      icon: DollarSign,
    },
    {
      id: 3,
      title: "درحال بررسی",
      count: parseInt(report?.pending || "0"),
      color: "#f3c156",
      icon: ClipboardCheck,
    },
  ];

  return { stats, isLoading };
};
