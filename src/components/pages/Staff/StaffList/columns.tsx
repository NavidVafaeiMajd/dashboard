import type { ColumnDef } from "@tanstack/react-table";
import type { User } from "./Table";
import { Button } from "@/components/ui/button";
import { LuArrowUpDown } from "react-icons/lu";
import { cn } from "@/lib/utils";
import ActionsCell from "@/components/shared/ActionsCell";
import { DeleteDialog } from "@/components/shared/DeleteDialog";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

const UserActionsCell: React.FC<{ user: User }> = ({ user }) => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const res = await fetch(`http://localhost:8000/api/employees/${id}` , {
        method: "DELETE",
      });
      if (!res.ok) {
        let message = "حذف ناموفق بود";
        try {
          const data = await res.json();
          message = data?.message || message;
        } catch {}
        throw new Error(message);
      }
      return true;
    },
    onSuccess: () => {
      toast.success("با موفقیت حذف شد");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error: any) => {
      toast.error(error?.message || "خطا در حذف آیتم");
    },
  });

  return (
    <div className="flex items-center gap-2">
      <ActionsCell actions={[{ label: "نمایش جزییات", path: `/users/${user.id}` }]} />
      <DeleteDialog
        onConfirm={() => {
          deleteMutation.mutate(user.id);
        }}
      />
    </div>
  );
};


export const userColumns: ColumnDef<User>[] = [
  
  {
    accessorKey: "fullName",
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
    accessorKey: "department",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <LuArrowUpDown className="ml-2 h-4 w-4" />
          سمت سازمانی
        </Button>
      );
    },
  },
  {
    accessorKey: "phoneNumber",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <LuArrowUpDown className="ml-2 h-4 w-4" />
          شماره تماس
        </Button>
      );
    },
  },
  {
    accessorKey: "gender",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <LuArrowUpDown className="ml-2 h-4 w-4" />
          جنسیت
        </Button>
      );
    },
    cell(props) {
      return <span>{props.getValue() === "male" ? "مذکر" : "مونث"}</span>;
    },
  },
  {
    accessorKey: "status",
    cell(props) {
      const status = props.getValue() as string;
      return (
        <span
          className={cn(
            status === "active"
              ? "bg-green-100 text-green-500"
              : status === "inactive"
              ? "bg-red-100 text-red-500"
              : status === "pending"
              ? "bg-yellow-100 text-yellow-500"
              : "",
            "p-2 rounded-sm"
          )}
        >
          {status === "active"
            ? "فعال"
            : status === "inactive"
            ? "غیرفعال"
            : "در حال بررسی"}
        </span>
      );
    },
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <LuArrowUpDown className="ml-2 h-4 w-4" />
          وضعیت
        </Button>
      );
    },
  },
  {
    id: "actions",
    accessorKey: "id",
    cell: ({ row }) => {
      const user = row.original;
      return <UserActionsCell user={user} />;
    },
    header: () => {
      return <span className="font-normal">عملیات</span>;
    },
  },
];
