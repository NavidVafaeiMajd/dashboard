import { Input } from "@/components/ui/input";
import { FiSearch } from "react-icons/fi";
import { useEffect, useMemo, useState } from "react";

type SearchInputProps<T extends Record<string, any>> = {
   data: T[];
   onFilter: (filtered: T[]) => void;
   searchableKeys?: (keyof T)[];
};

export function SearchInput<T extends Record<string, any>>({
   data,
   onFilter,
   searchableKeys,
}: SearchInputProps<T>) {
   const [query, setQuery] = useState("");

   const filteredData = useMemo(() => {
      if (!query) return data;

      const lowerQuery = query.toLowerCase();

      return data.filter((item) =>
         (searchableKeys ?? Object.keys(item)).some((key) => {
            const value = item[key as keyof T];
            return (
               typeof value === "string" &&
               value.toLowerCase().includes(lowerQuery)
            );
         })
      );
   }, [query, data, searchableKeys]);

   useEffect(() => {
      onFilter(filteredData);
   }, [filteredData, onFilter]);

   return (
      <div className="relative w-full max-w-sm">
         {/* Icon */}
         <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />

         {/* Input */}
         <Input
            type="text"
            placeholder="جستجو..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="indent-4 text-right"
         />
      </div>
   );
}
