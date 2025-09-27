import { useQuery } from "@tanstack/react-query";
import { useGetRowsToTable } from "./useGetRows";

interface SeparationTypes {
  data: any[];
}

export const useSeparationTypes = () => {
  return useQuery<SeparationTypes>({
    queryKey: ["separation-types"],
    queryFn: () => useGetRowsToTable("separation-types"),
    staleTime: 5 * 60_000,
    refetchOnWindowFocus: false,
  });
};

// Hook for getting a single separation type
export const useSeparationType = (id: string) => {
  return useQuery({
    queryKey: ["separation-type", id],
    queryFn: () => useGetRowsToTable(`separation-types/${id}`),
    enabled: !!id,
    staleTime: 5 * 60_000,
    refetchOnWindowFocus: false,
  });
};
