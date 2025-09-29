import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { LuArrowUpDown } from "react-icons/lu";
import { EditDialog } from "@/components/shared/EditDialog";
import { DeleteDialog } from "@/components/shared/DeleteDialog";
import { Form } from "@/components/shared/Form";
import { useDeleteRows } from "@/hook/useDeleteRows";
import { useDepartments } from "@/hook/useDepartments";
import { useUpdateRows } from "@/hook/useUpdateRows";
import { validation } from "./PublicDocuments";
import PostLoad from "@/components/ui/postLoad";
const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "";

export interface DisciplinaryFile {
  id: number;
  employee_id: string;
  type: string;
  case_date: Date;
  subject: string;
  filedBy: string;

  [key: string]: Date | number | string;
}

export const disciplinaryColumns: ColumnDef<DisciplinaryFile>[] = [
  {
    accessorKey: "department_id",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <LuArrowUpDown className="ml-2 h-4 w-4" />
        واحد سازمانی
      </Button>
    ),
    cell: ({ row }) => {
      const { data: departments } = useDepartments();
      const rowData = row.original;
      const department = departments?.data?.find(
        (item) => item?.id === rowData.department_id
      );

      return department ? department.name : "-";
    },
  },
  {
    accessorKey: "document_name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <LuArrowUpDown className="ml-2 h-4 w-4" />
        نام سند
      </Button>
    ),
  },
  {
    accessorKey: "document_type",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <LuArrowUpDown className="ml-2 h-4 w-4" />
        نوع سند
      </Button>
    ),
  },
  {
    accessorKey: "file_path",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <LuArrowUpDown className="ml-2 h-4 w-4" />
        فایل سند
      </Button>
    ),
    cell: ({ row }) => {
      const filePath = row.original.file_path;
      if (!filePath) return "-";

      const baseURL = BASE_URL; 
      const fileURL = `${baseURL}${filePath}`;

      return (
        <a
          href={fileURL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          دانلود
        </a>
      );
    },
  },

  {
    accessorKey: "id",
    id: "actions",
    header: "عملیات",
    cell: ({ row }) => {
      const r = row.original;
      const deleteRow = useDeleteRows({
        url: "hr-news",
        queryKey: ["hr-news"],
      });
      const { mutation } = useUpdateRows(
        `hr-news/${r.id}`,
        ["hr-news"],
        validation,
        " ابلاغیه "
      );
      
      const { data: departments } = useDepartments();
      const departmentsMapped = departments?.data?.map((item) => ({
        value: String(item.id),
        label: item.name,
      }));
      return (
        <div className="flex items-center gap-2">
          <EditDialog
            title="ویرایش  "
            triggerLabel="ویرایش"
            fields={
              <div className="relative">
              {mutation.isPending && <PostLoad />}
              <div className="flex gap-5">
                <Form.Select
                  label="واحد سازمانی"
                  name="department_id"
                  placeholder="واحد سازمانی"
                  options={departmentsMapped || []}
                  required
                />
  
                <Form.Input
                  label="نام سند "
                  name="document_name"
                  placeholder="نام سند  "
                  required
                />
              </div>
              <div className="flex gap-5">
                <Form.Input
                  label="نوع سند"
                  name="document_type"
                  placeholder="نوع سند"
                  required
                />
                <Form.Image label="تاریخ پرونده" name="file" />
              </div>
            </div>
            }
            defaultValues={  {
              department_id: String(r.department_id),
              document_type: String(r.document_type),
              document_name: String(r.document_name),
              file: r.file,
            }}
            onSave={(data) => {
              const formData = new FormData();
              formData.append("department_id", String(data.department_id));
              formData.append("document_type", String(data.document_type));
              formData.append("document_name", String(data.document_name));
              
              // فایل را به FormData اضافه می‌کنیم
              if (data.file instanceof File) {
                formData.append("file", data.file);
              }
            
              mutation.mutate(formData);
            }}
            schema={validation}
          />
          <DeleteDialog
            onConfirm={() => {
              deleteRow.mutate(r.id as any);
            }}
          />
        </div>
      );
    },
  },
];
