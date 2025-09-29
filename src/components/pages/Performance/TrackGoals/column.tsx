import { DeleteDialog } from "@/components/shared/DeleteDialog";
import { EditDialog } from "@/components/shared/EditDialog";
import { Form } from "@/components/shared/Form";
import ProgressBar from "@/components/shared/ProgressBar";
import StarRating from "@/components/shared/StarRating";
import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { LuArrowUpDown } from "react-icons/lu";
import { z } from "zod";

export interface trackGoals extends Record<string, unknown> {
   id: number;
   typeOfGoal: string;
   title: string;
   startDate: Date;
   endDate: Date;
   totalRating: number;
   progress: string;
}

export const columns: ColumnDef<trackGoals>[] = [
   {
      accessorKey: "goal_types_id",
      header: ({ column }) => {
         return (
            <Button
               variant="ghost"
               onClick={() =>
                  column.toggleSorting(column.getIsSorted() === "asc")
               }
            >
               <LuArrowUpDown className="ml-2 h-4 w-4" />
               نوع هدف
            </Button>
         );
      },
   },
   {
      accessorKey: "title",
      header: ({ column }) => {
         return (
            <Button
               variant="ghost"
               onClick={() =>
                  column.toggleSorting(column.getIsSorted() === "asc")
               }
            >
               <LuArrowUpDown className="ml-2 h-4 w-4" />
               موضوع
            </Button>
         );
      },
   },
   {
      accessorKey: "start_date",
      header: ({ column }) => {
         return (
            <Button
               variant="ghost"
               onClick={() =>
                  column.toggleSorting(column.getIsSorted() === "asc")
               }
            >
               <LuArrowUpDown className="ml-2 h-4 w-4" />
               تاریخ شروع
            </Button>
         );
      },
      cell: ({ row }) => {
         const date = new Date(row.getValue("start_date"));
         return date.toLocaleDateString("fa-IR");
      },
   },
   {
      accessorKey: "end_date",
      header: ({ column }) => {
         return (
            <Button
               variant="ghost"
               onClick={() =>
                  column.toggleSorting(column.getIsSorted() === "asc")
               }
            >
               <LuArrowUpDown className="ml-2 h-4 w-4" />
               تاریخ پایان
            </Button>
         );
      },
      cell: ({ row }) => {
         const date = new Date(row.getValue("end_date"));
         return date.toLocaleDateString("fa-IR");
      },
   },
   {
      accessorKey: "goal_rating",
      header: ({ column }) => {
         return (
            <Button
               variant="ghost"
               onClick={() =>
                  column.toggleSorting(column.getIsSorted() === "asc")
               }
            >
               <LuArrowUpDown className="ml-2 h-4 w-4" />
               امتیاز کلی
            </Button>
         );
      },

      cell(props) {
         return (
            <StarRating
               readonly
               star={props.getValue() as number}
            />
         );
      },
   },
   {
      accessorKey: "goal_progress",
      header: ({ column }) => {
         return (
            <Button
               variant="ghost"
               onClick={() =>
                  column.toggleSorting(column.getIsSorted() === "asc")
               }
            >
               <LuArrowUpDown className="ml-2 h-4 w-4" />
               پیشرفت
            </Button>
         );
      },

      cell(props) {
         return <ProgressBar value={props.getValue() as number} />;
      },
   },

   {
      id: "actions",
      accessorKey: "id",
      header: "عملیات",
      cell: () => {
         return (
            <div className="flex items-center gap-2">
               <EditDialog
                  triggerLabel="ویرایش"
                  defaultValues={{
                     typeOfGoal: "",
                     title: "",
                     startDate: new Date(),
                     endDate: new Date(),
                     totalRating: 0,
                  }}
                  fields={
                     <>
                        <Form.Input name="typeOfGoal" label="نوع هدف" required />
                        <Form.Input name="title" label="موضوع" required />
                        <Form.Date name="startDate" label="تاریخ شروع"  />
                        <Form.Date name="endDate" label="تاریخ پایان"  />
                        <Form.Input name="totalRating" label=" دستیابی به هدف " required />
                     </>

                  }
                  onSave={() => { }}
                  schema={z.object({
                     typeOfGoal: z.string().min(1, "نوع هدف الزامی است"),
                     title: z.string().min(1, "موضوع الزامی است"),
                     startDate: z.date(),
                     endDate: z.date(),
                     totalRating: z.number().min(1, "دستیابی به هدف الزامی است"),
                  })}

               />
               <DeleteDialog onConfirm={() => { }} />
               
               
            </div>
         );
      },
   },
];
