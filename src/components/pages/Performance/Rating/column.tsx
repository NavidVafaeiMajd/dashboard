import StarRating from "@/components/shared/StarRating";
import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { LuArrowUpDown } from "react-icons/lu";

export interface performanceRating {
  id: number;
  title: string;       // از name میاد
  position: string;    // از type میاد
  totalRating: number; // از average_score میاد
  addedBy: string;
   createdAt: Date;
   
   [key : string] : string | Date | number
}

// ستون‌ها
export const columns: ColumnDef<performanceRating>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() =>
          column.toggleSorting(column.getIsSorted() === "asc")
        }
      >
        <LuArrowUpDown className="ml-2 h-4 w-4" />
        عنوان
      </Button>
    ),
    cell: ({ row }) => row.original.title,
  },
  {
    accessorKey: "position",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() =>
          column.toggleSorting(column.getIsSorted() === "asc")
        }
      >
        <LuArrowUpDown className="ml-2 h-4 w-4" />
        سمت سازمانی
      </Button>
    ),
    cell: ({ row }) => row.original.position,
  },
  {
    accessorKey: "totalRating",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() =>
          column.toggleSorting(column.getIsSorted() === "asc")
        }
      >
        <LuArrowUpDown className="ml-2 h-4 w-4" />
        امتیاز کلی
      </Button>
    ),
    cell: (props) => (
      <StarRating readonly star={props.getValue() as number} />
    ),
  },
  {
    accessorKey: "addedBy",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() =>
          column.toggleSorting(column.getIsSorted() === "asc")
        }
      >
        <LuArrowUpDown className="ml-2 h-4 w-4" />
        اضافه شده توسط
      </Button>
    ),
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() =>
          column.toggleSorting(column.getIsSorted() === "asc")
        }
      >
        <LuArrowUpDown className="ml-2 h-4 w-4" />
        تاریخ ایجاد
      </Button>
    ),
    cell: ({ row }) => {
      const date = new Date(row.original.createdAt);
      return date.toLocaleDateString("fa-IR");
    },
  },

];

export function transformTechnicalData(
  technical: Record<string, { id: number; name: string; type: string; average_score: string }>
): performanceRating[] {
  return Object.values(technical).map((item) => ({
    id: item.id,
    title: item.name,
    position: item.type,
    totalRating: parseFloat(item.average_score),
    addedBy: "سیستم", // می‌تونی از API هم بیاری
    createdAt: new Date(), // یا تاریخ واقعی از API
  }));
}
