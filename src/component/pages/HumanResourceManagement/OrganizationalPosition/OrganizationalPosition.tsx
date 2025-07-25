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
import { Textarea } from "@/components/ui/textarea";
import { DataTable } from "@/component/shared/data-table";
import { columns } from "./columns";
import { DESIGNATION_CONSTANTS } from "./const";

const OrganizationalPosition = () => {
   useEffect(() => {
      document.title = "سمت سازمانی";
   }, []);
   const form = useForm<z.infer<typeof validation>>({
      resolver: zodResolver(validation),
      defaultValues: {
         name: "",
         description: "",
         organizationUnit: "",
      },
   });

   const onSubmit = (data: z.infer<typeof validation>) => {
      console.log(data);
   };

   return (
      <div className="flex flex-col md:flex-row justify-between gap-x-20 gap-y-10">
         <div className="flex flex-col w-full md:w-1/3 rounded-md overflow-hidden shadow-md h-full">
            <div className="flex bg-bgBack justify-between p-2 px-5 border-b-2 border-red-500 items-center">
               <h2> ثبت جدید سمت سازمانی</h2>
            </div>
            <Form {...form}>
               <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex flex-col"
               >
                  <div className="bg-bgBack space-y-4 p-5">
                     <FormField
                        control={form.control}
                        name="organizationUnit"
                        render={({ field }) => (
                           <FormItem className="w-full space-y-2">
                              <FormLabel className="text-xl">
                                 واحد سازمانی{" "}
                                 <span className="text-red-500">*</span>
                              </FormLabel>
                              <FormControl>
                                 <Select
                                    value={field.value}
                                    onValueChange={field.onChange}
                                    dir="rtl"
                                 >
                                    <SelectTrigger className="w-full min-h-12">
                                       <SelectValue
                                          className="placeholder:text-lg"
                                          placeholder="واحد سازمانی"
                                       />
                                    </SelectTrigger>

                                    <SelectContent>
                                       {/* Options would be dynamically generated here */}
                                       <SelectItem value="boss1">
                                          رئیس 1
                                       </SelectItem>
                                       <SelectItem value="boss2">
                                          رئیس 2
                                       </SelectItem>
                                       <SelectItem value="boss3">
                                          رئیس 3
                                       </SelectItem>
                                    </SelectContent>
                                 </Select>
                              </FormControl>
                           </FormItem>
                        )}
                     />

                     <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                           <FormItem className="w-full space-y-2">
                              <FormLabel className="text-xl">
                                 نام سمت سازمان{" "}
                                 <span className="text-red-500">*</span>
                              </FormLabel>
                              <FormControl>
                                 <Input
                                    placeholder="نام"
                                    className="min-h-12 placeholder:text-lg"
                                    {...field}
                                 />
                              </FormControl>
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
               <h2> لیست همه واحدها</h2>
            </div>

            <DataTable
               columns={columns}
               data={DESIGNATION_CONSTANTS}
               searchableKeys={["designation", "unit"]}
            />
         </div>
      </div>
   );
};

export default OrganizationalPosition;
