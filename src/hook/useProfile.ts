import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import Cookies from "js-cookie";

export interface Profile {
   id?: number;
   first_name?: string;
   last_name?: string;
   phone?: string;
   email?: string;
   image?: string;
   username?: string;
   gender?: string;
   country?: string;
   province?: string;
   city?: string;
   postal_code?: string;
   address?: string;
   company_type?: string;
   company_name?: string;
   national_id?: string;
   economic_code?: string;
   registration_number?: string;
}

export const useProfile = (): UseQueryResult<Profile> => {
   return useQuery<Profile>({
      queryKey: ["profile"],
      queryFn: async () => {
         const token = Cookies.get("token");
         const res = await fetch(`http://localhost:8000/api/profile`, {
            headers: token ? { Authorization: `Bearer ${token}` } : {},
         });
         if (!res.ok) {
            throw new Error("Failed to fetch profile");
         }
         return res.json();
      },
      staleTime: 5 * 60_000,
      refetchOnWindowFocus: false,
   });
};


