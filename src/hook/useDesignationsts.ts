import { useQuery } from "@tanstack/react-query";
import { useGetRowsToTable } from "./useGetRows";

interface Designationsts {
   data: any[];
}

export const useDesignationsts = () => {
   return useQuery<Designationsts>({
      queryKey: ["designations"],
      queryFn: () => useGetRowsToTable("designations"),
      staleTime: 5 * 60_000,
      refetchOnWindowFocus: false,
   });
};


