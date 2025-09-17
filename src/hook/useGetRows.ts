export const useGetRows = async (url: string): Promise<{ data: any[] }> => {
   const res = await fetch(`http://localhost:8000/api/${url}`);
   if (!res.ok) {
     throw new Error("Failed to fetch data");
   }
   return res.json();
};
 