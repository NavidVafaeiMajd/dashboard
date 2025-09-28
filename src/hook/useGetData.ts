import { useQuery, type UseQueryResult } from "@tanstack/react-query";

export const useGetData = <TData = unknown>(url: string): UseQueryResult<TData, Error> => {
  return useQuery({
    queryKey: ["get-data", url],
    queryFn: async () => {
      const res = await fetch(`http://localhost:8000/api/${url}`);
      if (!res.ok) {
        throw new Error("عملیات با شکست مواجه شده است");
      }
      return res.json();
    },
  });
};
