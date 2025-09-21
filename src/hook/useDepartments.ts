import { useQuery } from "@tanstack/react-query";
import { useGetRowsToTable } from "./useGetRows";

interface Departments {
   data: any[];
}

export const useDepartments = () => {
   return useQuery<Departments>({
      queryKey: ["departments"],
      queryFn: () => useGetRowsToTable("departments"),
      staleTime: 5 * 60_000,
      refetchOnWindowFocus: false,
   });
};


