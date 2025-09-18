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
import { useMemo, useState } from "react";
import { SearchInput } from "./SearchInput";
import { PageSizeSelector } from "./PageSizeSelector";
import { useQuery } from "@tanstack/react-query";

interface DataTableProps<TData extends Record<string, unknown>, TValue> {
  columns: ColumnDef<TData, TValue>[];
  searchableKeys?: (keyof TData)[];
  queryKey: string[];
  queryFn: () => Promise<{ data: TData[] }>;
}

export function DataTable<TData extends Record<string, unknown>, TValue>({
  columns,
  searchableKeys,
  queryKey,
  queryFn,
}: DataTableProps<TData, TValue>) {

   //use query
  const {
    data: queryData,
    isLoading,
    isError,
    error,
  } = useQuery<{ data: TData[] }>({
    queryKey: queryKey,
    queryFn: queryFn,
  });

   const [sorting, setSorting] = useState<SortingState>([]);
   const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
   const rows = queryData?.data ?? [];
   const [filteredData, setFilteredData] = useState<TData[]>([]);

   const dataForTable = useMemo(
     () => (filteredData.length > 0 ? filteredData : rows).slice().reverse(),
     [filteredData, rows]
   );

  const table = useReactTable({
    data: dataForTable,
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

  if (isLoading)
    return (
      <div className="h-[200px]! flex justify-center items-center gap-3">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        در حال بارگذاری...{" "}
      </div>
    );

  if (isError)
    return (
      <div className="h-[200px]! flex justify-center items-center">
        خطا در دریافت دیتا: {(error as Error).message}
      </div>
    );

  return (
    <div dir="rtl" className="m-4">
      <div className="flex items-center justify-between gap-2 px-4 pb-2">
        <PageSizeSelector
          value={table.getState().pagination.pageSize}
          onChange={(size) => {
            table.setPageSize(size);
          }}
        />
        <SearchInput<TData>
          data={rows}
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

          {(() => {
            const windowSize = 5;
            const half = Math.floor(windowSize / 2);
            const start = Math.max(
              0,
              Math.min(currentPage - half, pageCount - windowSize)
            );
            const end = Math.min(pageCount - 1, start + windowSize - 1);

            const buttons: React.ReactNode[] = [];

            // First page shortcut
            if (start > 0) {
              buttons.push(
                <Button
                  key={0}
                  variant={
                    0 === currentPage
                      ? "paginationNumber"
                      : "paginationNumberDis"
                  }
                  size="sm"
                  onClick={() => table.setPageIndex(0)}
                >
                  1
                </Button>
              );
              if (start > 1) {
                buttons.push(
                  <Button
                    key="start-ellipsis"
                    variant="ghost"
                    size="sm"
                    disabled
                  >
                    ...
                  </Button>
                );
              }
            }

            for (let i = start; i <= end; i++) {
              buttons.push(
                <Button
                  key={i}
                  variant={
                    i === currentPage
                      ? "paginationNumber"
                      : "paginationNumberDis"
                  }
                  size="sm"
                  onClick={() => table.setPageIndex(i)}
                >
                  {i + 1}
                </Button>
              );
            }

            // Last page shortcut
            if (end < pageCount - 1) {
              if (end < pageCount - 2) {
                buttons.push(
                  <Button key="end-ellipsis" variant="ghost" size="sm" disabled>
                    ...
                  </Button>
                );
              }
              buttons.push(
                <Button
                  key={pageCount - 1}
                  variant={
                    pageCount - 1 === currentPage
                      ? "paginationNumber"
                      : "paginationNumberDis"
                  }
                  size="sm"
                  onClick={() => table.setPageIndex(pageCount - 1)}
                >
                  {pageCount}
                </Button>
              );
            }

            return buttons;
          })()}

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
