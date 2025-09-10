import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import { EditDialog } from "@/components/shared/EditDialog";
import { Form } from "@/components/shared/Form";
import { z } from "zod";
import { DeleteDialog } from "@/components/shared/DeleteDialog";

export interface LearningRecordType {
  id: string;
  infoTecher: string;
  skillslearn: string;
  priceLearn: string;
  status: string;
  "entry-time": string;
  "exit-time": string;
  text: string;
  [key: string]: string | number;
}

export const LearningRecordColumns: ColumnDef<LearningRecordType>[] = [
  {
    accessorKey: "infoTecher",
    header: "مشخصات مدرس",
    cell: ({ row }) => <div className="text-center">{row.getValue("infoTecher")}</div>,
  },
  {
    accessorKey: "skillslearn",
    header: "مهارت آموزشی",
    cell: ({ row }) => <div className="text-center">{row.getValue("skillslearn")}</div>,
  },
  {
    accessorKey: "priceLearn",
    header: "هزینه آموزش",
    cell: ({ row }) => <div className="text-center">{row.getValue("priceLearn")}</div>,
  },
  {
    accessorKey: "status",
    header: "پرسنل",
    cell: ({ row }) => <div className="text-center">{row.getValue("status")}</div>,
  },
  {
    accessorKey: "entry-time",
    header: "تاریخ شروع",
    cell: ({ row }) => <div className="text-center">{row.getValue("entry-time")}</div>,
  },
  {
    accessorKey: "exit-time",
    header: "تاریخ پایان",
    cell: ({ row }) => <div className="text-center">{row.getValue("exit-time")}</div>,
  },
  {
    accessorKey: "text",
    header: "شرح",
    cell: ({ row }) => <div className="text-center">{row.getValue("text")}</div>,
  },
  {
    id: "actions",
    header: "عملیات",
    cell: ({ row }) => {
      const r = row.original;
      const query = new URLSearchParams({
        infoTecher: String(r.infoTecher),
        skillslearn: String(r.skillslearn),
        priceLearn: String(r.priceLearn),
        status: String(r.status),
        entry: String(r["entry-time"]),
        exit: String(r["exit-time"]),
        text: String(r.text),
        created: new Date().toLocaleDateString("fa-IR"),
      }).toString();
      return (
        <div className="flex items-center gap-2">
          <Link to={`/learning/details/${r.id}?${query}`}>
            <Button size="sm">نمایش جزییات</Button>
          </Link>
          <EditDialog
            fields={<>
              <Form.Textarea name="notes" label="ملاحظات" />
              <Form.Textarea name="reason" label="دلایل" />
            </>}
            defaultValues={{
              notes: "",
              reason: "",
            }}
            onSave={() => {}}
            schema={z.object({
              notes: z.string().min(1, "ملاحظات الزامی است"),
              reason: z.string().min(1, "دلایل الزامی است"),
            })}
          />
          <DeleteDialog onConfirm={() => {}} />
        </div>
      );
    },
  },
];
