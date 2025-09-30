import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import Cookies from "js-cookie";

export const useGetData = <TData = unknown>(url: string): UseQueryResult<TData, Error> => {
  return useQuery({
    queryKey: ["get-data", url],
    queryFn: async () => {
      const token = Cookies.get("token");
      const res = await fetch(`http://localhost:8000/api/${url}`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      if (!res.ok) {
        throw new Error("عملیات با شکست مواجه شده است");
      }
      return res.json();
    },
  });
};
