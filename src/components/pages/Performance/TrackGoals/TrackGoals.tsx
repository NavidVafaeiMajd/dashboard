import { DataTable } from "@/components/shared/data-table";
import { columns } from "./column";
import { goalsData } from "./const";
import { Form } from "@/components/shared/Form";
import { useForm } from "react-hook-form";
import type z from "zod";
import { validation } from "./validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

const TrackGoals = () => {
   const form = useForm<z.infer<typeof validation>>({
      resolver: zodResolver(validation),
      defaultValues: {
         description: "",
         endDate: new Date(),
         startDate: new Date(),
         purpose: "",
         purposeType: "",
         subject: "",
      },
   });

   const onSubmit = () => {};

   return (
      <div className="flex flex-col gap-y-5">
         <Form
            formProp={form}
            onSubmit={onSubmit}
            className="space-y-4"
            accordion
            accordionTitle="ثبت جدید"
         >
            <div className="flex justify-between items-center gap-x-5">
               <Form.Select
                  label="انواع هدف"
                  name="purposeType"
                  placeholder="انواع هدف"
                  required
               >
                  <Form.SelectItem value="purpose 1">هدف 1</Form.SelectItem>
                  <Form.SelectItem value="purpose 2">هدف 2</Form.SelectItem>
               </Form.Select>

               <Form.Input
                  label="موضوع"
                  name="subject"
                  required
                  placeholder="موضوع"
               />

               <Form.Input
                  label="دستیابی به هدف"
                  name="purpose"
                  placeholder="دستیابی به هدف"
                  required
               />
            </div>
            <div className="flex items-center gap-x-5">
               <Form.Date
                  label="تاریخ شروع"
                  name="startDate"
                  className="w-100"
               />
               <Form.Date
                  label="تاریخ پایان"
                  name="endDate"
                  className="w-100"
               />
            </div>

            <Form.RichText
               label="شرح"
               name="description"
            />

            <Button className="w-30 text-lg">ذخیره</Button>
         </Form>
         <DataTable
            columns={columns}
            data={goalsData}
            searchableKeys={[
               "typeOfGoal",
               "title",
               "startDate",
               "endDate",
               "totalRating",
               "progress",
            ]}
         />
      </div>
   );
};
export default TrackGoals;
