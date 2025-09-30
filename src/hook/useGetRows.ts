import Cookies from "js-cookie";

export const useGetRowsToTable = async (url: string): Promise<{ data: any[] }> => {
   try {
    const token = Cookies.get("token");
    const res = await fetch(`http://localhost:8000/api/${url}`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
     
     if (!res.ok) {
       throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
     }
     
     const result = await res.json();
     
     // Ensure we always return { data: array } structure
     return {
       data: Array.isArray(result?.data) ? result.data : (Array.isArray(result) ? result : [])
     };
   } catch (error) {
     return { data: [] };
   }
};
 