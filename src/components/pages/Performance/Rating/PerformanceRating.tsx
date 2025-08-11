import { Form } from "@/components/shared/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";
import { validation } from "./validation";
import { useForm } from "react-hook-form";

const PerformanceRating = () => {
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
               label="سمت سازمانی"
               name="position"
               required
            >
               <Form.SelectItem value="1">item 1</Form.SelectItem>
               <Form.SelectItem value="2">item 2</Form.SelectItem>
            </Form.Select>
         </Form>
      </div>
   );
};
export default PerformanceRating;
