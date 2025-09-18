import { useQuery } from "@tanstack/react-query";
import { useGetRowsToTable } from "./useGetRows";

interface UsersResponse {
   data: any[];
}

export const useEmployees = () => {
   return useQuery<UsersResponse>({
      queryKey: ["employees"],
      queryFn: () => useGetRowsToTable("employees"),
      staleTime: 5 * 60_000,
      refetchOnWindowFocus: false,
   });
};


