import { useQuery } from "@tanstack/react-query";
import { useGetRowsToTable } from "./useGetRows";

interface Departments {
   data: any[];
}

export const useShifts = () => {
   return useQuery<Departments>({
      queryKey: ["shifts"],
      queryFn: () => useGetRowsToTable("shifts"),
      staleTime: 5 * 60_000,
      refetchOnWindowFocus: false,
   });
};


