import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import { EditDialog } from "@/components/shared/EditDialog";
import { Form } from "@/components/shared/Form";
import { z } from "zod";
import { DeleteDialog } from "@/components/shared/DeleteDialog";
import { useGetData } from "@/hook/useGetData";
import type { Skill, Teacher } from "./mainLearing";
import { useUpdateRows } from "@/hook/useUpdateRows";

export interface LearningRecordType {
  id: number;
  teacher_id: number;
  skill_id: number;
  cost: number;
  personnel: number;
  start_date: string;
  end_date: string;
  description: string;
  created_at: string;
  updated_at: string;
  teacher: {
    id: number;
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    specialty: string;
    address: string;
    created_at: string;
    updated_at: string;
  };
  skill: {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
  };
}

export const LearningRecordColumns: ColumnDef<LearningRecordType>[] = [
  {
    accessorKey: "teacher",
    header: "مشخصات مدرس",
    cell: ({ row }) => {
      const teacher = row.original.teacher;
      return (
        <div className="text-center">
          {teacher ? `${teacher.first_name} ${teacher.last_name}` : ""}
        </div>
      );
    },
  },
  {
    accessorKey: "skill",
    header: "مهارت آموزشی",
    cell: ({ row }) => {
      const skill = row.original.skill;
      return <div className="text-center">{skill ? skill.name : ""}</div>;
    },
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
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("personnel")}</div>
    ),
  },
  {
    accessorKey: "start_date",
    header: "تاریخ شروع",
    cell: ({ row }) => {
      const date = row.getValue("start_date") as string;
      return (
        <div className="text-center">
          {new Date(date).toLocaleDateString("fa-IR")}
        </div>
      );
    },
  },
  {
    accessorKey: "end_date",
    header: "تاریخ پایان",
    cell: ({ row }) => {
      const date = row.getValue("end_date") as string;
      return (
        <div className="text-center">
          {new Date(date).toLocaleDateString("fa-IR")}
        </div>
      );
    },
  },
  {
    id: "actions",
    header: "عملیات",
    cell: ({ row }) => {
      const r = row.original;
      const query = new URLSearchParams({
        teacher: r.teacher
          ? `${r.teacher.first_name} ${r.teacher.last_name}`
          : "",
        skill: r.skill ? r.skill.name : "",
        cost: String(r.cost),
        personnel: String(r.personnel),
        start_date: r.start_date,
        end_date: r.end_date,
        description: r.description,
        created: new Date().toLocaleDateString("fa-IR"),
      }).toString();

      const { data: skills } = useGetData<Skill[]>("skills");

      const skillsMapped = skills?.map((item) => ({
        value: String(item.id),
        label: item.name,
      }));

      const { data: teachers } = useGetData<Teacher[]>("teachers");

      const teachersMapped = teachers?.map((item) => ({
        value: String(item.id),
        label: item.first_name + " " + item.last_name,
      }));

       const validation = z.object({
         teacher_id: z.string().min(1, "مشخصات مدرس الزامی است"),
         skill_id: z.string().min(1, "مهارت آموزشی الزامی است"),
         cost: z.string().optional(),
         personnel: z.string().optional(),
         start_date: z.string().min(1, "تاریخ شروع الزامی است"),
         end_date: z.string().optional(),
         description: z.string().optional(),
       });

      const { mutation } = useUpdateRows(
        `trainings/${r.id}`,
        ["trainings"],
        validation,
        "اموزش"
      );

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
                 <Form.Input 
                   name="cost" 
                   label=" هزینه آموزش " 
                 />
                 <Form.Input
                   label="تعداد دانشجو"
                   name="personnel"
                   placeholder="تعداد دانشجو"
                 />
                 <Form.Date name="start_date" label=" تاریخ شروع  " />
                 <Form.Date name="end_date" label=" تاریخ پایان " />

                 <Form.RichText name="description" label=" شرح " />
              </>
            }
            defaultValues={{
              teacher_id: String(r.teacher_id || ""),
              skill_id: String(r.skill_id || ""),
              cost: String(r.cost || ""),
              personnel: String(r.personnel || ""),
              start_date: r.start_date ? new Date(r.start_date).toISOString().slice(0, 19) : "",
              end_date: r.end_date ? new Date(r.end_date).toISOString().slice(0, 19) : "",
              description: r.description || "",
            }}
            onSave={(data) => {
              const convertedData = {
                ...data,
                cost: data.cost ? Number(data.cost) : undefined,
                personnel: data.personnel ? Number(data.personnel) : undefined,
              };
              mutation.mutate(convertedData)
            }}
            schema={z.object({
              teacher_id: z.string().min(1, "مشخصات مدرس الزامی است"),
              skill_id: z.string().min(1, "مهارت آموزشی الزامی است"),
              cost: z.string().optional(),
              personnel: z.string().optional(),
              start_date: z.string().min(1, "تاریخ شروع الزامی است"),
              end_date: z.string().optional(),
              description: z.string().optional(),
            })}
          />
          <DeleteDialog onConfirm={() => {}} />
        </div>
      );
    },
  },
];
