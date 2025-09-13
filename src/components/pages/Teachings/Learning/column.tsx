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
    header: "تعداد دانشجو",
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
            title="ویرایش  "
            triggerLabel="ویرایش"
            fields={
              <>
                <Form.Select name="infoTecher" label=" مهارت آموزشی" required>
                  <Form.SelectItem value="1">مهارت آموزشی 1</Form.SelectItem>
                  <Form.SelectItem value="2">مهارت آموزشی 2</Form.SelectItem>
                </Form.Select>
                <Form.Select name="skillslearn" label=" مشخصات مدرس" required>
                  <Form.SelectItem value="1">مشخصات مدرس 1</Form.SelectItem>
                  <Form.SelectItem value="2">مشخصات مدرس 2</Form.SelectItem>
                </Form.Select>
                <Form.Input name="priceLearn" label=" هزینه آموزش " required />
                <Form.MultiSelect
                    label="پرسنل"
                    name="personnel"
                    options={[
                      { label: "پرسنل 1", value: "1" },
                      { label: "پرسنل 2", value: "2" },
                    ]}
                    required
                />
                                    <Form.Date name="startDate" label=" تاریخ شروع  " />
                                    <Form.Date name="finishtDate" label=" تاریخ پایان " />

                <Form.Select name="goalsRelated" label=" اهداف مرتبط" required>
                  <Form.SelectItem value="1">اهداف مرتبط 1</Form.SelectItem>
                  <Form.SelectItem value="2">اهداف مرتبط 2</Form.SelectItem>
                </Form.Select>
                <Form.RichText name="text" label=" شرح "  required />

              </>
            }
            defaultValues={{
              infoTecher: "",
              skillslearn: "",
              priceLearn: "",
              status: "",
              startDate: new Date(),
              finishtDate: new Date(),
              text: "",
              goalsRelated: "",
              personnel: "",
            }}
            onSave={(data) => {
              console.log(data);
            }}
            schema={z.object({

              infoTecher: z.string().min(1, "مشخصات مدرس الزامی است"),
              skillslearn: z.string().min(1, "مهارت آموزشی الزامی است"),
              priceLearn: z.string().min(1, "هزینه آموزش الزامی است"),
              status: z.string().min(1, "پرسنل الزامی است"),
              startDate: z.date( { error: "تاریخ شروع الزامی است" }),
              finishtDate: z.date( { error: "تاریخ پایان الزامی است" }),
              text: z.string().min(1, "شرح الزامی است"),
              goalsRelated: z.string().min(1, "اهداف مرتبط الزامی است"),
              personnel: z.string().min(1, "پرسنل الزامی است"),
            })}
          />
          <DeleteDialog onConfirm={() => {}} />
        </div>
      );
    },
  },
];
