import { Form } from "@/components/shared/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";
import { validation } from "./validation";
import { useForm } from "react-hook-form";
import StarRating from "@/components/shared/StarRating";
import { DataTable } from "@/components/shared/data-table";
import { columns } from "./column";
import { employeeData } from "./const";
import { Button } from "@/components/ui/button";

const EmployeeRating = () => {
   const form = useForm<z.infer<typeof validation>>({
      resolver: zodResolver(validation),
      defaultValues: {},
   });

   const onSubmit = (data) => {
      console.log(data);
   };
   return (
      <div>
         <Form
            formProp={form}
            accordion
            accordionTitle="تنظیم جدید شاخص عملکرد"
            onSubmit={onSubmit}
         >
            <Form.Input
               label="عنوان"
               name="name"
               required
            />
            <Form.Select
               label="کارمند"
               name="employee"
               required
            >
               <Form.SelectItem value="1">item 1</Form.SelectItem>
               <Form.SelectItem value="2">item 2</Form.SelectItem>
            </Form.Select>

            <div className="border text-2xl my-5 p-4 underline">
               <h1>انتخاب ماه اضاف شود</h1>
            </div>

            <div className="flex gap-x-5 flex-col md:flex-row md:justify-between">
               <div className="w-full">
                  <div className="bg-gray-300 font-medium w-full px-2 py-4">
                     <span className="text-lg">شایستگی های فنی</span>
                  </div>
                  <div className="bg-green-200 px-2 py-4 w-full flex justify-between">
                     <span className="w-full text-lg">نشانگر</span>
                     <span className="w-full text-lg">تنظیم اندیکاتور</span>
                  </div>

                  <div className="flex justify-between items-center border-b">
                     <span className="text-lg w-full">تست فنی 1</span>
                     <StarRating star={1} />
                  </div>
               </div>
               <div className="w-full">
                  <div className="bg-gray-300 font-medium w-full px-2 py-4">
                     <span className="text-lg">شایستگی های سازمانی</span>
                  </div>
                  <div className="bg-green-200 px-2 py-4 w-full flex justify-between">
                     <span className="w-full text-lg">نشانگر</span>
                     <span className="w-full text-lg">تنظیم اندیکاتور</span>
                  </div>

                  <div className="flex justify-between items-center border-b">
                     <span className="text-lg w-full">تست سازمانی 1</span>
                     <StarRating star={1} />
                  </div>
               </div>
            </div>

            <div className="flex gap-x-2 mt-5">
               <Button>ثبت</Button>
               <Button variant={"destructive"}>بازنشانی</Button>
            </div>
         </Form>

         <DataTable
            columns={columns}
            data={employeeData}
            searchableKeys={[
               "title",
               "position",
               "totalRating",
               "addedBy",
               "createdAt",
            ]}
         />
      </div>
   );
};
export default EmployeeRating;
