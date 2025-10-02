import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { LuArrowUpDown } from "react-icons/lu";
import { EditDialog } from "@/components/shared/EditDialog";
import { DeleteDialog } from "@/components/shared/DeleteDialog";
import { Form } from "@/components/shared/Form";
import { z } from "zod";
import { useDeleteRows } from "@/hook/useDeleteRows";
import { useUpdateRows } from "@/hook/useUpdateRows";
import { useEmployees } from "@/hook/useEmployees";
import { useGetData } from "@/hook/useGetData";

export interface DisciplinaryFile {
  id: number;
  employee_id: number;
  title: string;
  description: string;
  disciplinary_type_id: number;
  case_date: string;
  created_at: string;
  updated_at: string;
  employee: {
    id: number;
    firstName: string;
    lastName: string;
    image: string | null;
    phoneNumber: string;
    gender: string;
    personeliCode: string;
    birthDate: string | null;
    position: string;
    shift_id: number;
    maritalStatus: string | null;
    designation_id: number;
    department_id: number;
    province: string | null;
    city: string | null;
    postalCode: string | null;
    religion: string | null;
    bloodGroup: string | null;
    nationality: string | null;
    citizenship: string | null;
    address1: string | null;
    address2: string | null;
    created_at: string;
    updated_at: string;
  };
  disciplinary_type: {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
  };
}

export const disciplinaryColumns: ColumnDef<DisciplinaryFile>[] = [
  {
    accessorKey: "employee_id",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <LuArrowUpDown className="ml-2 h-4 w-4" />
        کارمند
      </Button>
    ),
    cell: ({ row }) => {
      const employee = row.original.employee;
      return employee ? `${employee.firstName} ${employee.lastName}` : "-";
    },
  },
  {
    accessorKey: "disciplinary_type",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <LuArrowUpDown className="ml-2 h-4 w-4" />
        نوع پرونده
      </Button>
    ),
    cell: ({ row }) => {
      const disciplinaryType = row.original.disciplinary_type;
      return disciplinaryType ? disciplinaryType.name : "-";
    },
  },
  {
    accessorKey: "case_date",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <LuArrowUpDown className="ml-2 h-4 w-4" />
        تاریخ پرونده
      </Button>
    ),
    cell: ({ row }) => {
      const rawDate = row.getValue("case_date") as string | null;
      if (!rawDate) return "-";
      const date = new Date(rawDate);
      return date.toLocaleDateString("fa-IR");
    },
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <LuArrowUpDown className="ml-2 h-4 w-4" />
        موضوع
      </Button>
    ),
    cell: ({ row }) => {
      return row.getValue("title");
    },
  },
  {
    accessorKey: "id",
    id: "actions",
    header: "عملیات",
    cell: ({ row }) => {
       const r = row.original;
       const deleteRow = useDeleteRows({
         url: "disciplinary-cases",
         queryKey: ["disciplinary-cases"],
       });

       const validation = z.object({
         employee_id: z.string().min(1, "انتخاب کارمند الزامی است"),
         title: z.string().min(1, "موضوع الزامی است").max(255, "موضوع نباید بیشتر از 255 کاراکتر باشد"),
         description: z.string().optional(),
         disciplinary_type_id: z.string().optional(),
         case_date: z.string().optional(),
       });

       const { mutation } = useUpdateRows(
         `disciplinary-cases/${r.id}`,
         ["disciplinary-cases"],
         validation,
         "پرونده انضباطی"
       );

       // Get employees and disciplinary types data
       const { data: employees } = useEmployees();
       const { data: disciplinaryTypes } = useGetData("disciplinary-types");

       const employeesMapped = employees?.data?.map((item) => ({
         value: String(item.id),
         label: item.fullName,
       }));

       const disciplinaryTypesMapped = Array.isArray(disciplinaryTypes) ? disciplinaryTypes.map((item) => ({
         value: String(item.id),
         label: item.name,
       })) : [];
      return (
        <div className="flex items-center gap-2">
          <EditDialog
            title="ویرایش پرونده انضباطی"
            triggerLabel="ویرایش"
            defaultValues={{
              employee_id: String(r.employee_id || ""),
              title: String(r.title || ""),
              description: String(r.description || ""),
              disciplinary_type_id: String(r.disciplinary_type_id || ""),
              case_date: r.case_date ? new Date(r.case_date).toISOString().slice(0, 19) : "",
            }}
            schema={z.object({
              employee_id: z.string().min(1, "انتخاب کارمند الزامی است"),
              title: z.string().min(1, "موضوع الزامی است").max(255, "موضوع نباید بیشتر از 255 کاراکتر باشد"),
              description: z.string().optional(),
              disciplinary_type_id: z.string().optional(),
              case_date: z.string().optional(),
            })}
            onSave={(data) => {
              mutation.mutate(data);
            }}
            fields={
              <>
                <Form.Select
                  label="کارمند"
                  name="employee_id"
                  placeholder="انتخاب کارمند"
                  required
                  options={employeesMapped || []}
                />
                <Form.Input 
                  name="title" 
                  label="موضوع" 
                  required 
                />
                <Form.Textarea 
                  name="description" 
                  label="شرح" 
                />
                <Form.Select
                  label="نوع پرونده انضباطی"
                  name="disciplinary_type_id"
                  placeholder="انتخاب نوع پرونده"
                  options={disciplinaryTypesMapped || []}
                />
                <Form.Date 
                  name="case_date" 
                  label="تاریخ پرونده" 
                />
              </>
            }
          />
          <DeleteDialog
            onConfirm={() => {
              deleteRow.mutate(r.id);
            }}
          />{" "}
        </div>
      );
    },
  },
];
