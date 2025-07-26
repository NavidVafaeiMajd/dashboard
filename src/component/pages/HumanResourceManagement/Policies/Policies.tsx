import { useEffect } from "react";
import { useForm } from "react-hook-form";
import type z from "zod";
import { validation } from "./validation";
import { zodResolver } from "@hookform/resolvers/zod";
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ImageUploadInput } from "@/component/shared/ImageUploadInput";
import { DataTable } from "@/component/shared/data-table";
import { columns } from "./columns";
import { POLICY_CONST } from "./const";

const Policies = () => {
   useEffect(() => {
      document.title = "خط مشی ها";
   }, []);

   const form = useForm<z.infer<typeof validation>>({
      resolver: zodResolver(validation),
      defaultValues: {
         name: "",
         description: "",
         image: null,
      },
   });

   const onSubmit = (data: z.infer<typeof validation>) => {
      console.log(data);
   };

   return (
      <div className="flex flex-col md:flex-row gap-x-20 justify-between gap-y-10">
         <div className="flex flex-col w-full md:w-1/3 rounded-md overflow-hidden shadow-md h-full">
            <div className="flex bg-bgBack justify-between p-2 px-5 border-b-2 border-red-500 items-center">
               <h2>ثبت جدید خط مشی</h2>
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
                              <FormLabel className="text-xl">عنوان</FormLabel>
                              <FormControl>
                                 <Input
                                    placeholder="عنوان"
                                    className="min-h-12"
                                    {...field}
                                 />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel className="text-xl">شرح</FormLabel>
                              <FormControl>
                                 <Textarea
                                    {...field}
                                    placeholder="شرح"
                                    className="placeholder:text-lg min-h-20!"
                                 />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        control={form.control}
                        name="image"
                        render={({ field }) => (
                           <ImageUploadInput field={field} />
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
               <h2> لیست همه خط مشی ها</h2>
            </div>

            <DataTable
               columns={columns}
               data={POLICY_CONST}
               searchableKeys={["name", "createdBy"]}
            />
         </div>
      </div>
   );
};
export default Policies;
