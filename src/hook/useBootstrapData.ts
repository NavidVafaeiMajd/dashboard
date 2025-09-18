import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useGetRowsToTable } from "./useGetRowsTable";

/**
 * Prefetch global, frequently-used server data so it's instantly
 * available across the app via React Query's cache.
 */
export const useBootstrapData = () => {
   const queryClient = useQueryClient();

   useEffect(() => {
      // Users list (adjust endpoint to your API naming)
      queryClient.prefetchQuery({
         queryKey: ["employees"],
         queryFn: () => useGetRowsToTable("employees"),
         staleTime: 5 * 60_000,
      });

      // Add more bootstrapped queries if needed, e.g. roles, departments
      // queryClient.prefetchQuery({ queryKey: ["roles"], queryFn: () => useGetRows("roles"), staleTime: 10 * 60_000 });
   }, [queryClient]);
};


