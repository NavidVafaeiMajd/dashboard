import { Form } from "@/components/shared/Form";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import type z from "zod";
import { validation } from "./validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { DataTable } from "@/components/shared/data-table";
import { columns } from "./column";
import { setupIndicatorData } from "./const";

const SetupIndicator = () => {
   const OnSubmit = (data) => {
      console.log(data);
   };

   const form = useForm<z.infer<typeof validation>>({
      resolver: zodResolver(validation),
      defaultValues: {
         sorting: "",
      },
   });

   return (
      <div className="space-y-4 w-full">
         <div className="flex flex-col gap-y-5 bg-white shadow-xs py-4">
            <div className="border-b border-b-red-500 p-4">
               <h2 className="text-xl">تنظیم اندیکاتور</h2>
            </div>
            <div className="flex gap-x-4 px-4">
               <Button className="px-4 py-6 text-lg">صلاحیت های فنی</Button>
               <Button className="px-4 py-6 text-lg">رفتار سازمانی</Button>
            </div>
         </div>

         <div className="flex w-full gap-y-4 gap-x-5 justify-between flex-col md:flex-row">
            <div className="flex h-fit flex-col w-full md:w-150 gap-y-5 bg-white shadow-xs py-4">
               <div className="border-b border-b-red-500 p-4">
                  <h2 className="text-xl">ثبت جدید دسته بندی سازمانی</h2>
               </div>

               <Form
                  formProp={form}
                  onSubmit={OnSubmit}
                  className="px-4 py-2 space-y-4"
               >
                  <Form.Input
                     name="sorting"
                     label="دسته بندی"
                     placeholder="دسته بندی"
                     required
                  />
                  <Button className="text-lg p-5">ذخیره</Button>
               </Form>
            </div>
            <div className="flex flex-col gap-y-5 w-full bg-white shadow-xs py-4">
               <div className="border-b border-b-red-500 p-4">
                  <h2 className="text-xl">لیست همه دسته بندی ها</h2>
               </div>

               <DataTable
                  columns={columns}
                  data={setupIndicatorData}
                  searchableKeys={["sorting"]}
               />
            </div>
         </div>
      </div>
   );
};
export default SetupIndicator;
