import type { ColumnDef } from "@tanstack/react-table";
import type { User } from "./Table";
import { Button } from "@/components/ui/button";
import { LuArrowUpDown } from "react-icons/lu";
import { DeleteDialog } from "@/components/shared/DeleteDialog";
import { EditDialog } from "@/components/shared/EditDialog";
import { useDeleteRows } from "@/hook/useDeleteRows";
import { useUpdateRows } from "@/hook/useUpdateRows";
import { Form } from "@/components/shared/Form";
import { validation } from "./validation";
import ActionsCell from "@/components/shared/ActionsCell";

export const userColumns: ColumnDef<User>[] = [
  {
    accessorKey: "first_name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <LuArrowUpDown className="ml-2 h-4 w-4" />
          نام
        </Button>
      );
    },
  },
  {
    accessorKey: "last_name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <LuArrowUpDown className="ml-2 h-4 w-4" />
          نام خانوادگی
        </Button>
      );
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <LuArrowUpDown className="ml-2 h-4 w-4" />
          ایمیل
        </Button>
      );
    },
  },
  {
    accessorKey: "phone",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <LuArrowUpDown className="ml-2 h-4 w-4" />
          شماره تلفن
        </Button>
      );
    },
  },
  {
    accessorKey: "address",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <LuArrowUpDown className="ml-2 h-4 w-4" />
          آدرس
        </Button>
      );
    },
    cell(props) {
      const address = props.getValue() as string;
      return (
        <span className="max-w-xs truncate">
          {address || "ثبت نشده"}
        </span>
      );
    },
  },
  {
    id: "actions",
    accessorKey: "id",
    cell: ({ row }) => {
      const user = row.original;

      const deleteRow = useDeleteRows({
        url: "marketing-staff",
        queryKey: ["marketing-staff"],
      });
      const updateRow = useUpdateRows( `marketing-staff/${user.id}`, ["marketing-staff"], {}, "پرسنل بازاریابی");
      
      return (
        <div className="flex items-center gap-2">
          <ActionsCell
            actions={[{ label: "نمایش جزییات", path: `/marketing-staff/${user.id}` }]}
          />
          <EditDialog
            title="ویرایش پرسنل بازاریابی"
            defaultValues={{
              first_name: user.first_name,
              last_name: user.last_name,
              email: user.email,
              phone: user.phone,
              address: user.address || "",
            }}
            onSave={(data) => {
              console.log(data);
              updateRow.mutation.mutate({ id: user.id, ...data });
            }}
            schema={validation}
            fields={<>
              <Form.Input name="first_name" label="نام" required placeholder="نام" />
              <Form.Input name="last_name" label="نام خانوادگی" required placeholder="نام خانوادگی" />
              <Form.Input name="email" label="ایمیل" required placeholder="ایمیل" />
              <Form.Input name="phone" label="شماره تلفن" required placeholder="شماره تلفن" />
              <Form.Input name="address" label="آدرس" placeholder="آدرس (اختیاری)" />
              </>}
          />
          
          <DeleteDialog
            title="حذف پرسنل بازاریابی"
            description="آیا از حذف این پرسنل بازاریابی اطمینان دارید؟"
            onConfirm={() => {
              deleteRow.mutate(user.id);
            }}
          />
        </div>
      );
    },
    header: () => {
      return <span className="font-normal">عملیات</span>;
    },
  },
];
