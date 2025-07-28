import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { validation } from "./validation";
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const MonthlyAttendance = () => {
   const form = useForm<z.infer<typeof validation>>({
      resolver: zodResolver(validation),
      defaultValues: {
         emplyee: "",
         date: new Date(),
      },
   });

   const onSubmit = (data: z.infer<typeof validation>) => {
      console.log(data);
   };

   return (
      <Form {...form}>
         <form
            className="bg-bgBack w-full"
            onSubmit={form.handleSubmit(onSubmit)}
         >
            <div className="flex gap-x-10 w-4/5 justify-between items-end p-5">
               <FormField
                  control={form.control}
                  name="emplyee"
                  render={({ field }) => (
                     <FormItem className="w-full h-20">
                        <FormLabel className="text-base">کارمند</FormLabel>
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

               <FormField
                  control={form.control}
                  name="date"
                  render={() => (
                     <FormItem className="w-full h-20">
                        <FormLabel className="text-base">انتخاب ماه</FormLabel>
                        <FormControl>
                           <Input className="min-h-12" />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <Button
                  className="min-h-11 w-20 text-lg"
                  type="submit"
               >
                  <Search />
               </Button>
            </div>
         </form>
      </Form>
   );
};
export default MonthlyAttendance;
