import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useGetRowsToTable } from "./useGetRows";
import { useLocation } from "react-router-dom";

/**
 * Prefetch global, frequently-used server data so it's instantly
 * available across the app via React Query's cache.
 */
export const useBootstrapData = () => {
   const queryClient = useQueryClient();
  const { pathname } = useLocation();

  // Routes where we do NOT want to prefetch
  const prefetchDisabledRoutes = ["/login", "/auth/login", "/signin"];

   useEffect(() => {
      if (prefetchDisabledRoutes.includes(pathname)) {
         return; // skip prefetch on these routes
      }
      // Users list (adjust endpoint to your API naming)
      queryClient.prefetchQuery({
         queryKey: ["employees"],
         queryFn: () => useGetRowsToTable("employees"),
         staleTime: 2 * 60_000,
      });

      queryClient.prefetchQuery({
         queryKey: ["departments"],
         queryFn: () => useGetRowsToTable("departments"),
         staleTime: 2 * 60_000,
      });

      queryClient.prefetchQuery({
         queryKey: ["designations"],
         queryFn: () => useGetRowsToTable("designations"),
         staleTime: 2 * 60_000,
      });

      queryClient.prefetchQuery({
         queryKey: ["shifts"],
         queryFn: () => useGetRowsToTable("shifts"),
         staleTime: 10 * 60_000,
      });

      queryClient.prefetchQuery({
         queryKey: ["profile"],
         queryFn: () => useGetRowsToTable("profile"),
      });

      // Add more bootstrapped queries if needed, e.g. roles, departments
      // queryClient.prefetchQuery({ queryKey: ["roles"], queryFn: () => useGetRows("roles"), staleTime: 10 * 60_000 });
  }, [queryClient, pathname]);
};


