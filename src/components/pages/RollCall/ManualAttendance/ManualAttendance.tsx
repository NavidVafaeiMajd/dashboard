// itsEhsanMM
import { useForm } from "react-hook-form";
import type z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/shared/data-table";
import { useEffect } from "react";
import { validation } from "./validation";
import { columns } from "./column";
import { MANUAL_ATTENDANCE } from "./const";

const ManualAttendance = () => {
   useEffect(() => {
      document.title = "ثبت تردد دستی پرسنل";
   }, []);

   const form = useForm<z.infer<typeof validation>>({
      resolver: zodResolver(validation),
      defaultValues: {
         date: new Date(),
         emplyee: "",
      },
   });

   const onSubmit = (data: z.infer<typeof validation>) => {
      console.log(data);
   };

   return (
      <div className="flex flex-col md:flex-row gap-x-10 justify-between gap-y-10">
         <div className="flex flex-col w-full md:w-1/3 rounded-md overflow-hidden shadow-md h-full">
            <div className="flex bg-bgBack justify-between p-2 px-5 border-b-2 border-red-500 items-center">
               <h2>فیلتر کردن حضور و غیاب</h2>
            </div>
            <Form {...form}>
               <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex flex-col"
               >
                  <div className="bg-bgBack space-y-4 p-5">
                     <FormField
                        control={form.control}
                        name="date"
                        render={() => (
                           <FormItem className="w-full space-y-2">
                              <FormLabel className="text-base">تاریخ</FormLabel>
                              <FormControl>
                                 <h2>با کامپوننت دیت جایگزین شود</h2>
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        control={form.control}
                        name="emplyee"
                        render={({ field }) => (
                           <FormItem className="w-full space-y-2">
                              <FormLabel className="text-base">
                                 کارمند
                                 <span className="text-red-500">*</span>
                              </FormLabel>
                              <FormControl>
                                 <Select
                                    value={field.value}
                                    onValueChange={field.onChange}
                                    dir="rtl"
                                 >
                                    <SelectTrigger className="w-full min-h-12">
                                       <SelectValue placeholder="کارمند" />
                                    </SelectTrigger>

                                    <SelectContent>
                                       {/* Options would be dynamically generated here */}
                                       <SelectItem value="employee1">
                                          کارمند 1
                                       </SelectItem>
                                       <SelectItem value="employee2">
                                          کارمند 2
                                       </SelectItem>
                                       <SelectItem value="employee3">
                                          کارمند 3
                                       </SelectItem>
                                    </SelectContent>
                                 </Select>
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />
                  </div>
                  <div className="w-full bg-white p-5">
                     <Button className="min-h-12 w-30 text-lg">
                        فیلتر کردن
                     </Button>
                  </div>
               </form>
            </Form>
         </div>

         <div className="flex flex-col w-full md:w-2/3 bg-bgBack rounded-md overflow-hidden shadow-md h-full mb-1">
            <div className="flex bg-bgBack w-full p-2 px-5 border-b-2 border-red-500 items-center">
               <h2>نمایش حضور و غیاب</h2>
            </div>

            <DataTable
               columns={columns}
               data={MANUAL_ATTENDANCE}
               searchableKeys={["name", "unitBoss"]}
            />
         </div>
      </div>
   );
};

export default ManualAttendance;
