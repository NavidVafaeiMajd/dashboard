import {
  type ColumnDef,
  type SortingState,
  type ColumnFiltersState,
  flexRender,
  getSortedRowModel,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  getFilteredRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { SearchInput } from "./SearchInput";
import { PageSizeSelector } from "./PageSizeSelector";

interface DataTableProps<TData extends Record<string, unknown>, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  searchableKeys?: (keyof TData)[];
}

export function DataTable<TData extends Record<string, unknown>, TValue>({
  columns,
   data,
  searchableKeys
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [filteredData, setFilteredData] = useState<TData[]>(data);
  const [pageSize, setPageSize] = useState(10);

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  const pageCount = table.getPageCount();
  const currentPage = table.getState().pagination.pageIndex;
  return (
    <div dir="rtl" className="m-4">
      <div className="flex items-center justify-between gap-2 px-4 pb-2">
        <PageSizeSelector
          value={table.getState().pagination.pageSize}
          onChange={(size) => {
            table.setPageSize(size);
            setPageSize(size);
          }}
        />
        <SearchInput<TData>
          data={data}
          onFilter={setFilteredData}
          searchableKeys={searchableKeys}
        />
      </div>

      <Table className="min-w-full rounded-md! my-5 border-5 border-blue-100">
        <TableHeader className="bg-[#F9FBE4]">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className="text-right whitespace-nowrap px-4 py-2"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => {
              return (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="text-center whitespace-nowrap px-4 py-2"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                بدون نتیجه
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="flex items-center justify-between gap-2 py-4 px-2 rtl:space-x-reverse">
        <div>
          <span className="text-sm text-muted-foreground">
            صفحه {table.getState().pagination.pageIndex + 1} از{" "}
            {table.getPageCount()}
          </span>
        </div>
        <div>
          <Button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            variant="outline"
          >
            قبلی
          </Button>

          {Array.from({ length: pageCount }).map((_, index) => (
            <Button
              key={index}
              variant={index === currentPage ? "paginationNumber" : "paginationNumberDis"}
              size="sm"
              onClick={() => table.setPageIndex(index)}
            >
              {index + 1}
            </Button>
          ))}
              
          <Button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            variant="outline"
          >
            بعدی
          </Button>
        </div>
      </div>
    </div>
  );
}
