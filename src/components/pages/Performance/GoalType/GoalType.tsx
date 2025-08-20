import { Form } from "@/components/shared/Form";
import { useForm } from "react-hook-form";
import type z from "zod";
import { validation } from "./validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { columns } from "./column";
import { DataTable } from "@/components/shared/data-table";
import { goalType } from "./const";

const GoalType = () => {
   const OnSubmit = (data) => {
      console.log(data);
   };

   const form = useForm<z.infer<typeof validation>>({
      resolver: zodResolver(validation),
      defaultValues: {
         purposeType: "",
      },
   });
   return (
      <div className="flex w-full gap-y-4 gap-x-5 justify-between flex-col md:flex-row">
         <div className="flex h-fit flex-col w-full md:w-150 gap-y-5 bg-white shadow-xs py-4">
            <div className="border-b border-b-red-500 p-4">
               <h2 className="text-xl">ثبت جدید انواع اهداف</h2>
            </div>

            <Form
               formProp={form}
               onSubmit={OnSubmit}
               className="px-4 py-2 space-y-4"
            >
               <Form.Input
                  name="purposeType"
                  label="انواع اهداف"
                  placeholder="انواع اهداف"
                  required
               />
               <Button className="text-lg p-5">ذخیره</Button>
            </Form>
         </div>
         <div className="flex flex-col gap-y-5 w-full bg-white shadow-xs py-4">
            <div className="border-b border-b-red-500 p-4">
               <h2 className="text-xl">لیست همه اهداف</h2>
            </div>

            <DataTable
               columns={columns}
               data={goalType}
               searchableKeys={["purposeType"]}
            />
         </div>
      </div>
   );
};
export default GoalType;
