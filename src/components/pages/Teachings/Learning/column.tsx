import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import { EditDialog } from "@/components/shared/EditDialog";
import { Form } from "@/components/shared/Form";
import { z } from "zod";
import { DeleteDialog } from "@/components/shared/DeleteDialog";
import { useGetData } from "@/hook/useGetData";
import type { Skill, Teacher } from "./mainLearing";

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
    accessorKey: "cost",
    header: "هزینه آموزش",
    cell: ({ row }) => {
      const cost = row.getValue("cost") as number | string;
      return (
        <div className="text-center">
          {new Intl.NumberFormat("fa-IR").format(Number(cost))} تومان
        </div>
      );
    },
  },  
  {
    accessorKey: "personnel",
    header: "تعداد دانشجو",
    cell: ({ row }) => <div className="text-center">{row.getValue("personnel")}</div>,
  },
  {
    accessorKey: "start_date",
    header: "تاریخ شروع",
    cell: ({ row }) => {
      return <div className="text-center">{new Date(row.getValue("start_date")).toLocaleDateString("fa-IR")}</div>;
    },
  },
  {
    accessorKey: "end_date",
    header: "تاریخ پایان",
    cell: ({ row }) => {
      return <div className="text-center">{new Date(row.getValue("end_date")).toLocaleDateString("fa-IR")}</div>;
    },
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

      const { data : skills } = useGetData<Skill[]>("skills")
  
      const skillsMapped = skills?.map((item) => ({
        value: String(item.id),
        label: item.name ,
      }));
    
      const { data : teachers } = useGetData<Teacher[]>("teachers")
      
      const teachersMapped = teachers?.map((item) => ({
        value: String(item.id),
        label: item.first_name + " " + item.last_name,
      }));
    
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
        <Form.Select
          label="مشخصات مدرس "
          name="teacher_id"
          placeholder=" مشخصات مدرس "
          required
          options={teachersMapped || []}
        />

        <Form.Select
          label="مهارت آموزشی "
          name="skill_id"
          placeholder="مهارت آموزشی "
          required
          options={skillsMapped || []}
        />
                <Form.Input name="priceLearn" label=" هزینه آموزش " required />
                <Form.Input
          label="تعداد دانشجو"
          name="personnel"
          placeholder="تعداد دانشجو"
          required
        />
                                    <Form.Date name="startDate" label=" تاریخ شروع  " />
                                    <Form.Date name="finishtDate" label=" تاریخ پایان " />

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
