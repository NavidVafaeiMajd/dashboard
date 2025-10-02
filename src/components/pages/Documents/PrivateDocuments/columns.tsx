import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { LuArrowUpDown } from "react-icons/lu";
import { EditDialog } from "@/components/shared/EditDialog";
import { DeleteDialog } from "@/components/shared/DeleteDialog";
import { Form } from "@/components/shared/Form";
import { useDeleteRows } from "@/hook/useDeleteRows";
import { useUpdateRows } from "@/hook/useUpdateRows";
import { z } from "zod";

const validation = z.object({
  license_name: z.string().min(1, "نام مجوز الزامی است").max(255, "نام مجوز نباید بیشتر از 255 کاراکتر باشد"),
  document_type: z.string().min(1, "نوع سند الزامی است").max(255, "نوع سند نباید بیشتر از 255 کاراکتر باشد"),
  license_number: z.string().min(1, "شماره مجوز الزامی است").max(255, "شماره مجوز نباید بیشتر از 255 کاراکتر باشد"),
  expiry_date: z.string().min(1, "تاریخ انقضا الزامی است"),
  file: z.any().optional(),
});
import PostLoad from "@/components/ui/postLoad";

const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "";

export interface LicenseFile {
  id: number;
  license_name: string;
  document_type: string;
  license_number: string;
  expiry_date: string; // ISO string
  file: string;

  [key: string]: string | number;
}

export const disciplinaryColumns: ColumnDef<LicenseFile>[] = [
  {
    accessorKey: "license_name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <LuArrowUpDown className="ml-2 h-4 w-4" />
        نام مجوز
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
    accessorKey: "license_number",
    header: "شماره مجوز",
  },
  {
    accessorKey: "expiry_date",
    header: "تاریخ انقضا",
    cell: ({ row }) => new Date(row.original.expiry_date).toLocaleDateString(),
  },
  {
    accessorKey: "	file_path",
    header: "فایل",
    cell: ({ row }) => {
      const file = row.original.file_path;
      if (!file) return "-";
      return (
        <a
          href={`${BASE_URL}${file}`}
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
        url: "official-documents",
        queryKey: ["official-documents"],
      });
      const { mutation } = useUpdateRows(
        `official-documents/${r.id}`,
        ["official-documents"],
        validation,
        "مجوز"
      );

      return (
        <div className="flex items-center gap-2">
          <EditDialog
            title="ویرایش مجوز"
            triggerLabel="ویرایش"
            fields={
              <div className="relative">
                {mutation.isPending && <PostLoad />}
                <Form.Input
                  label="نام مجوز"
                  name="license_name"
                  placeholder="نام مجوز"
                  required
                />
                <Form.Input
                  label="شماره مجوز"
                  name="license_number"
                  placeholder="شماره مجوز"
                  required
                />
                <Form.Input
                  label="نوع سند"
                  name="document_type"
                  placeholder="نوع سند"
                  required
                />
                <Form.Date label="تاریخ انقضا" name="expiry_date"  />
                <Form.Image label="فایل" name="file" />
              </div>
            }
            defaultValues={{
              license_name: String(r.license_name || ""),
              document_type: String(r.document_type || ""),
              license_number: String(r.license_number || ""),
              expiry_date: r.expiry_date ? new Date(r.expiry_date).toISOString().slice(0, 19) : "",
            }}
            onSave={(data) => {
              const formData = new FormData();
              formData.append("license_name", data.license_name);
              formData.append("document_type", data.document_type);
              formData.append("license_number", data.license_number);
              formData.append("expiry_date", data.expiry_date);
              
              // Handle file upload if provided
              if (data.file && data.file.length > 0) {
                formData.append("file", data.file[0]);
              }
              
              mutation.mutate(formData);
            }}
            schema={validation}
          />
          <DeleteDialog onConfirm={() => deleteRow.mutate(r.id as any)} />
        </div>
      );
    },
  },
];
