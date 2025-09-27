import type { ColumnDef } from "@tanstack/react-table";
import type { User } from "./Table";
import { Button } from "@/components/ui/button";
import { LuArrowUpDown } from "react-icons/lu";
import { EditDialog } from "@/components/shared/EditDialog";
import { Form } from "@/components/shared/Form";
import { DeleteDialog } from "@/components/shared/DeleteDialog";
import { useDeleteRows } from "@/hook/useDeleteRows";
import { useUpdateRows } from "@/hook/useUpdateRows";
import { useEmployees } from "@/hook/useEmployees";
import { useSeparationTypes } from "@/hook/useSeparationTypes";
import { validation } from "./validation";

const defaultValues = {
  employee_id: "",
  separation_date: new Date(),
  separation_letter: "",
  separation_type_id: "",
  contract_file: null,
};

export const userColumns: ColumnDef<User>[] = [
  {
    accessorKey: "employee",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <LuArrowUpDown className="ml-2 h-4 w-4" />
          کارمند
        </Button>
      );
    },
    cell: ({ row }) => {
      const employee = row.original.employee;
      const fullName = `${employee.firstName} ${employee.lastName}`;
      const personeliCode = employee.personeliCode;
       
      return (
        <div className="flex gap-3 items-center">
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
            {employee.image ? (
              <img 
                className="w-12 h-12 rounded-full object-cover" 
                src={employee.image} 
                alt={fullName} 
              />
            ) : (
              <span className="text-gray-500 text-sm">
                {employee.firstName.charAt(0)}
              </span>
            )}
          </div>
          <div>
            <h3 className="font-medium">{fullName}</h3>
            <p className="text-sm text-gray-500">{personeliCode}</p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "separation_type",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <LuArrowUpDown className="ml-2 h-4 w-4" />
          نوع انفصال
        </Button>
      );
    },
    cell: ({ row }) => {
      const separationType = row.original.separation_type.name;
      return (
        <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-sm">
          {separationType}
        </span>
      );
    },
  },
  {
    accessorKey: "separation_date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <LuArrowUpDown className="ml-2 h-4 w-4" />
          تاریخ انفصال
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("separation_date"));
      return (
        <span className="text-sm">
          {date.toLocaleDateString("fa-IR")}
        </span>
      );
    },
  },
  {
    accessorKey: "disciplinary_committee",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <LuArrowUpDown className="ml-2 h-4 w-4" />
          جلسه کمیته
        </Button>
      );
    },
    cell: ({ row }) => {
      const committee = row.getValue("disciplinary_committee") as number;
      return (
        <span className={`px-2 py-1 rounded-full text-sm ${
          committee ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
        }`}>
          {committee ? "بله" : "خیر"}
        </span>
      );
    },
  },
  {
    accessorKey: "deactivate_account",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <LuArrowUpDown className="ml-2 h-4 w-4" />
          غیرفعال اکانت
        </Button>
      );
    },
    cell: ({ row }) => {
      const deactivate = row.getValue("deactivate_account") as number;
      return (
        <span className={`px-2 py-1 rounded-full text-sm ${
          deactivate ? "bg-red-100 text-red-800" : "bg-gray-100 text-gray-800"
        }`}>
          {deactivate ? "بله" : "خیر"}
        </span>
      );
    },
  },
  {
    accessorKey: "id",
    id: "actions",
    header: "عملیات",
    cell: ({ row }) => {
      const rowInf = row.original;
      const { data: employees } = useEmployees();
      const { data: separationTypes } = useSeparationTypes();
      
      const deleteRow = useDeleteRows({
        url: "employee-separations",
        queryKey: ["employee-separations"],
      });
      
      const { mutation } = useUpdateRows(
        `employee-separations/${rowInf.id}`,
        ["employee-separations"],
        validation,
        "انفصال از خدمت"
      );

      const employeesMapped = employees?.data?.map((item) => ({
        value: String(item.id),
        label: item.fullName,
      }));

      const separationTypesMapped = separationTypes?.data?.map((item) => ({
        value: String(item.id),
        label: item.name || item.title,
      }));

      return (
        <div className="flex items-center gap-2">
          <EditDialog
            title="ویرایش انفصال از خدمت"
            triggerLabel="ویرایش"
            fields={
              <>
                <Form.Select
                  name="employee_id"
                  label="کارمند"
                  placeholder="انتخاب کارمند"
                  options={employeesMapped || []}
                  required
                />
                <Form.Date
                  name="separation_date"
                  label="تاریخ انفصال"
                />
                <Form.Select
                  name="separation_type_id"
                  label="نوع انفصال"
                  placeholder="انتخاب نوع انفصال"
                  options={separationTypesMapped || []}
                  required
                />
                <Form.Textarea
                  name="separation_letter"
                  label="متن نامه (اختیاری)"
                  placeholder="متن نامه انفصال را اینجا وارد کنید..."
                />
              </>
            }
            defaultValues={defaultValues}
            onSave={(data) => {
              const formData = new FormData();
              
              formData.append("employee_id", data.employee_id);
              formData.append("separation_date", data.separation_date.toISOString().slice(0, 19));
              formData.append("separation_type_id", data.separation_type_id);
              formData.append("separation_letter", data.separation_letter || "");
              
              if (data.contract_file) {
                formData.append("contract_file", data.contract_file);
              }
              
              mutation.mutate(formData);
            }}
            schema={validation}
          />
          <DeleteDialog
            onConfirm={() => {
              deleteRow.mutate(rowInf.id as number);
            }}
          />
        </div>
      );
    },
  },
];