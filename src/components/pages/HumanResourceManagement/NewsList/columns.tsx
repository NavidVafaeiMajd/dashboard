import ActionsCell from "@/components/shared/ActionsCell";
import { DeleteDialog } from "@/components/shared/DeleteDialog";
import { EditDialog } from "@/components/shared/EditDialog";
import { Form } from "@/components/shared/Form";
import { Button } from "@/components/ui/button";
import { useDeleteRows } from "@/hook/useDeleteRows";
import { useDepartments } from "@/hook/useDepartments";
import { useUpdateRows } from "@/hook/useUpdateRows";
import type { ColumnDef } from "@tanstack/react-table";
import { LuArrowUpDown } from "react-icons/lu";
import { z } from "zod";

export interface PolicyColumnProps extends Record<string, unknown> {
  id: string;
  title: string;
  publish_date: Date;
  end_date: Date;
  department_id: string;
  summary: string;
  content: string;
}

const validation = z.object({
  title: z.string().min(1, "عنوان الزامی است"),
  publish_date: z.date(),
  end_date: z.date(),
  department_id: z.string(),
  summary: z.string(),
  content: z.string(),
});

export const columns: ColumnDef<PolicyColumnProps>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <LuArrowUpDown className="ml-2 h-4 w-4" />
          عنوان
        </Button>
      );
    },
  },
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
    accessorKey: "publish_date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <LuArrowUpDown className="ml-2 h-4 w-4" />
          تاریخ شروع
        </Button>
      );
    },
    cell: ({ row }) => {
      const rawDate = row.getValue("publish_date") as string | null;

      if (!rawDate) return "-";

      const date = new Date(rawDate.replace(" ", "T"));
      return date.toLocaleDateString("fa-IR");
    },
  },
  {
    accessorKey: "end_date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <LuArrowUpDown className="ml-2 h-4 w-4" />
          تاریخ پایان
        </Button>
      );
    },
    cell: ({ row }) => {
      const rawDate = row.getValue("end_date") as string | null;

      if (!rawDate) return "-";

      const date = new Date(rawDate.replace(" ", "T"));
      return date.toLocaleDateString("fa-IR");
    },
  },

  {
    id: "actions",
    header: "عملیات",
    cell: ({ row }) => {
      const news = row.original;
      const deleteRow = useDeleteRows({
        url: "hr-news",
        queryKey: ["hr-news"],
      });
      const { mutation } = useUpdateRows(
        `hr-news/${news.id}`,
        ["hr-news"],
        validation,
        " ابلاغیه "
      );
      const { data: departments } = useDepartments();

      return (
        <div className="flex items-center gap-2">
          <EditDialog
            title="ویرایش  "
            triggerLabel="ویرایش"
            fields={
              <>
                <div className="flex flex-col gap-5">
                  <Form.Input name="title" label=" موضوع ابلاغیه " required />
                  <Form.Date name="publish_date" label=" تاریخ شروع  " />
                  <Form.Date name="end_date" label=" تاریخ پایان " />
                </div>
                <div>
                  <Form.Select
                    name="department_id"
                    label="واحد سازمانی"
                    required
                    placeholder="انتخاب واحد سازمانی"
                  >
                    {departments?.data?.map((dept, index) => (
                      <Form.SelectItem key={index} value={String(dept.id)}>
                        {dept.name || dept.title || dept.department_name}
                      </Form.SelectItem>
                    ))}
                  </Form.Select>
                </div>
                <div>
                  <Form.Input name="summary" label="اختصاری" />
                </div>
                <div>
                  <Form.RichText name="content" label="متن ابلاغیه" required />
                </div>
              </>
            }
            defaultValues={{
              title: news.title,
              publish_date: news.publish_date,
              end_date: news.end_date,
              department_id: news.department_id,
              summary: news.summary,
              content: news.content,
            }}
            onSave={(data) => {
              const payload = {
                ...data,
                publish_date:
                  data.publish_date instanceof Date
                    ? data.publish_date
                        .toISOString()
                        .slice(0, 19)
                        .replace("T", " ")
                    : (data.publish_date as string)
                        .slice(0, 19)
                        .replace("T", " "),
                end_date:
                  data.end_date instanceof Date
                    ? data.end_date.toISOString().slice(0, 19).replace("T", " ")
                    : (data.end_date as string).slice(0, 19).replace("T", " "),
              };

              mutation.mutate(payload);
            }}
            schema={validation}
          />
          <DeleteDialog
            onConfirm={() => {
              deleteRow.mutate(news.id as any);
            }}
          />
          <ActionsCell
            actions={[{ label: "نمایش جزییات", path: `/news-list/${news.id}` }]}
          />
        </div>
      );
    },
  },
];
