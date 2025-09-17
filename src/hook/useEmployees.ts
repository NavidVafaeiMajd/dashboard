import { useQuery } from "@tanstack/react-query";
import { useGetRows } from "./useGetRows";

interface UsersResponse {
   data: any[];
}

export const useEmployees = () => {
   return useQuery<UsersResponse>({
      queryKey: ["employees"],
      queryFn: () => useGetRows("employees"),
      staleTime: 5 * 60_000,
      refetchOnWindowFocus: false,
   });
};


