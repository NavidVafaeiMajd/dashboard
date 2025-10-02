import type { ColumnDef } from "@tanstack/react-table";
import { DeleteDialog } from "@/components/shared/DeleteDialog";
import { EditDialog } from "@/components/shared/EditDialog";
import { Form } from "@/components/shared/Form";
import { useDeleteRows } from "@/hook/useDeleteRows";
import { useUpdateRows } from "@/hook/useUpdateRows";
import { validation } from "./validation";

export interface TecherInfoType {
  name: string;
  lname: string;
  phone: string;
  email: string;
  skills: string;
  mark: string;
  [key: string]: string | number;
}

export const TecherInfoColumns: ColumnDef<TecherInfoType>[] = [
  {
    accessorKey: "first_name",
    header: "نام ",
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("first_name")}</div>
    ),
  },
  {
    accessorKey: "last_name",
    header: "نام خانوادگی",
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("last_name")}</div>
    ),
  },
  {
    accessorKey: "phone",
    header: "شماره تماس",
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("phone")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: "ایمیل",
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("email")}</div>
    ),
  },
  {
    accessorKey: "specialty",
    header: "تخصص",
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("specialty")}</div>
    ),
  },
  {
    id: "actions",
    header: "عملیات",
    cell: ({ row }) => {
      const r = row.original;
      const deleteRow = useDeleteRows({
        url: "teachers",
        queryKey: ["teachers"],
      });
      const { mutation } = useUpdateRows(
        `teachers/${r.id}`,
        ["teachers"],
        validation,
        "نوع تخلف "
      );
      return (
        <div className="flex items-center gap-2">
          <EditDialog
            title="ویرایش  "
            triggerLabel="ویرایش"
            fields={
              <>
                <Form.Input name="first_name" label="نام" required />
                <Form.Input name="last_name" label="نام خانوادگی" required />
                <Form.Input name="phone" label="شماره تماس" required />
                <Form.Input name="email" label="ایمیل" required />
                <Form.Textarea name="specialty" label="تخصص" required />
                <Form.Textarea name="address" label="نشانی" />
              </>
            }
            defaultValues={{
              first_name: String(r.first_name || ""),
              last_name: String(r.last_name || ""),
              phone: String(r.phone || ""),
              email: String(r.email || ""),
              specialty: String(r.specialty || ""),
              address: String(r.address || ""),
            }}
            onSave={(data) => {
              console.log(data);
              mutation.mutate(data)
            }}
            schema={validation}
          />
          <DeleteDialog
            onConfirm={() => {
              deleteRow.mutate(Number(r.id));
            }}
          />
        </div>
      );
    },
  },
];
