import type { ColumnDef } from "@tanstack/react-table";
import type { TecherInfoType } from "./const";
import { DeleteDialog } from "@/components/shared/DeleteDialog";
import { EditDialog } from "@/components/shared/EditDialog";
import { Form } from "@/components/shared/Form";
import { z } from "zod";

export const TecherInfoColumns: ColumnDef<TecherInfoType>[] = [
  {
    accessorKey: "name",
    header: "مشخصات مدرس",
    cell: ({ row }) => <div className="text-center">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "lname",
    header: "نام خانوادگی",
    cell: ({ row }) => <div className="text-center">{row.getValue("lname")}</div>,
  },
  {
    accessorKey: "phone",
    header: "شماره تماس",
    cell: ({ row }) => <div className="text-center">{row.getValue("phone")}</div>,
  },
  {
    accessorKey: "email",
    header: "ایمیل",
    cell: ({ row }) => <div className="text-center">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "skills",
    header: "تخصص",
    cell: ({ row }) => <div className="text-center">{row.getValue("skills")}</div>,
  },
  {
    accessorKey: "mark",
    header: "اضافه شده توسط",
    cell: ({ row }) => <div className="text-center">{row.getValue("mark")}</div>,
  },
  {
    id: "actions",
    header: "عملیات",
    cell: () => {
      return (
        <div className="flex items-center gap-2">
          <EditDialog
            title="ویرایش  "
            triggerLabel="ویرایش"
            fields={
              <>
                <Form.Input name="name" label="نام" required />
                <Form.Input name="lname" label="نام خانوادگی" required />
                <Form.Input name="phone" label="شماره تماس" required />
                <Form.Input name="email" label="ایمیل" required />
                <Form.Textarea name="skills" label="تخصص" required />
                <Form.Textarea name="location" label="نشانی"  />
              </>
            }
            defaultValues={{
              name: "",
              lname: "",
              phone: "",
              email: "",
              skills: "",
              location: "",
            }}
            onSave={(data) => {
              console.log(data);
            }}
            schema={z.object({

              name: z.string().min(1, "نام الزامی است"),
              lname: z.string().min(1, "نام خانوادگی الزامی است"),
              phone: z.string().min(1, "شماره تماس الزامی است"),
              email: z.string().min(1, "ایمیل الزامی است"),
              skills: z.string().min(1, "تخصص الزامی است"),
              location: z.string().optional(),
            })}

          />
          <DeleteDialog onConfirm={() => {}} />
        </div>
      );
    },
  },
];
