import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { validation } from "./validation";
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/shared/data-table";
import { columns } from "./columns";
import { VIOLATION_TYPE_CONSTANTS } from "./const";

const ViolationType = () => {
   useEffect(() => {
      document.title = "نوع تخلف";
   }, []);
   
   const form = useForm<z.infer<typeof validation>>({
      resolver: zodResolver(validation),
      defaultValues: {
         name: "",
      },
   });

   const onSubmit = (data: z.infer<typeof validation>) => {
      console.log(data);
   };

   return (
      <div className="flex flex-col md:flex-row justify-between gap-x-10 gap-y-10">
         <div className="flex flex-col w-full md:w-1/3 rounded-md overflow-hidden shadow-md h-full">
            <div className="flex bg-bgBack justify-between p-2 px-5 border-b-2 border-red-500 items-center">
               <h2> ثبت جدید نوع تخلف</h2>
            </div>
            <Form {...form}>
               <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex flex-col"
               >
                  <div className="bg-bgBack space-y-4 p-5">
                     <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                           <FormItem className="w-full space-y-2">
                              <FormLabel className="text-base">
                                 نوع پرونده{" "}
                                 <span className="text-red-500">*</span>
                              </FormLabel>
                              <FormControl>
                                 <Input
                                    placeholder="نوع پرونده را وارد کنید"
                                    className="min-h-12 placeholder:text-lg"
                                    {...field}
                                 />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />
                  </div>
                  <div className="w-full bg-white p-5">
                     <Button className="min-h-12 w-30 text-lg">ذخیره</Button>
                  </div>
               </form>
            </Form>
         </div>
         <div className="flex flex-col w-full md:w-2/3 bg-bgBack rounded-md overflow-hidden shadow-md h-full mb-1">
            <div className="flex bg-bgBack w-full p-2 px-5 border-b-2 border-red-500 items-center">
               <h2> لیست همه انواع تخلف</h2>
            </div>

            <DataTable
               columns={columns}
               data={VIOLATION_TYPE_CONSTANTS}
               searchableKeys={["name"]}
            />
         </div>
      </div>
   );
};

export default ViolationType;
