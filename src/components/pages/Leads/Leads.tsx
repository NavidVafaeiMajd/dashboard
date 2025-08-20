import Breadcrumb from "@/components/shared/breadcrumb";
import { GoPlus } from "react-icons/go";
import { useBankColumns } from "./columns";
import { BANK_ACCOUNTS } from "./const";
import { DataTable } from "@/components/shared/data-table";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ImageUploadInput } from "@/components/shared/ImageUploadInput";
import { z } from "zod"
type FormValues = {
   accountNumber: string;
   lastName: string;
   gender: string;
   image: File | null;
};

const schema = z.object({
   lastName: z.string().min(1, "نام خانوادگی الزامی است"),
   firstName: z.string().min(1, "نام الزامی است"),
   gender: z.enum(["male", "female"], "لطفا جنسیت را انتخاب کنید"),
   accountNumber: z.string().min(1, "شماره تماس الزامی است"),
   email: z.string().email("فرمت ایمیل صحیح نیست"),
   image: z
      .instanceof(File)
      .nullable()
      .optional(),
});



const Leads = () => {
   const { columns } = useBankColumns();
   const [open, setOpen] = useState(false);

   const form = useForm<FormValues>({
      defaultValues: {
         accountNumber: "",
         lastName: "",
         gender: "",
         image: null,
      },
   });


   const changeVisibility = () => setOpen(prev => !prev);

   const onSubmit = (data: FormValues) => {
      console.log("Form data:", data);
   };

   

   return (
      <div>
         <Breadcrumb>رهبران</Breadcrumb>

         {open && (
            <div className="flex justify-between">
               <div className="w-[65%] bg-[#F9F9FB] shadow-2xl rounded-md overflow-hidden">
                  <div className="flex items-center justify-between p-4 bg-[#FFF7FA] border-b-2 border-red-700">
                     <span>ثبت جدید سپرده</span>
                     <button onClick={changeVisibility} className="w-[90px] h-[32px] text-[#ffff] rounded bg-[#1E824C]">
                        مخفی
                     </button>
                  </div>

                  <div className="p-4">
                     <Form {...form} onSubmit={form.handleSubmit(onSubmit)}>
                        <form  className="flex flex-col gap-10">
                           {/* Row 1 */}
                           <div className="flex flex-col justify-between gap-[1.5rem]">
                              <div className="flex justify-between gap-[1.5rem]">
                                 {/* نام */}
                                 <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                       <FormItem className="flex flex-col gap-2 w-full md:w-1/2">
                                          <FormLabel>نام *</FormLabel>
                                          <FormControl>
                                             <input
                                                {...field}
                                                className="h-[45px] w-full border rounded"
                                                placeholder="نام"
                                             />
                                          </FormControl>
                                          <FormMessage />
                                       </FormItem>
                                    )}
                                 />

                                 {/* نام خانوادگی */}
                                 <FormField
                                    control={form.control}
                                    name="lastName"
                                    render={({ field }) => (
                                       <FormItem className="flex flex-col gap-2 w-full md:w-1/2">
                                          <FormLabel>نام خانوادگی *</FormLabel>
                                          <FormControl>
                                             <input
                                                {...field}
                                                className="h-[45px] w-full border rounded"
                                                placeholder="نام خانوادگی"
                                             />
                                          </FormControl>
                                          <FormMessage />
                                       </FormItem>
                                    )}
                                 />

                                 {/* جنسیت */}
                                 <FormField
                                    control={form.control}
                                    name="gender"
                                    render={({ field }) => (
                                       <FormItem className="w-full lg:w-1/3 flex flex-col gap-2">
                                          <FormLabel>جنسیت *</FormLabel>
                                          <FormControl>
                                             <select {...field} className="h-[45px] border rounded">
                                                <option value="">انتخاب کنید</option>
                                                <option value="male">آقا</option>
                                                <option value="female">خانم</option>
                                             </select>
                                          </FormControl>
                                          <FormMessage />
                                       </FormItem>
                                    )}
                                 />
                              </div>

                              <div className="flex justify-between gap-[1.5rem]">
                                 {/* شماره تماس */}
                                 <FormField
                                    control={form.control}
                                    name="accountNumber"
                                    render={({ field }) => (
                                       <FormItem className="flex flex-col gap-2 w-full md:w-1/2">
                                          <FormLabel>شماره تماس *</FormLabel>
                                          <FormControl>
                                             <input
                                                {...field}
                                                className="h-[45px] w-full border rounded"
                                                placeholder="شماره تماس"
                                             />
                                          </FormControl>
                                          <FormMessage />
                                       </FormItem>
                                    )}
                                 />

                                 {/* ایمیل */}
                                 <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                       <FormItem className="flex flex-col gap-2 w-full md:w-1/2">
                                          <FormLabel>ایمیل *</FormLabel>
                                          <FormControl>
                                             <input
                                                {...field}
                                                type="email"
                                                className="h-[45px] w-full border rounded"
                                                placeholder="ایمیل"
                                             />
                                          </FormControl>
                                          <FormMessage />
                                       </FormItem>
                                    )}
                                 />
                              </div>
                           </div>

                           {/* Buttons */}
                           <div className="flex gap-4">
                              <button
                                 type="button"
                                 onClick={() => form.reset()}
                                 className="w-[90px] h-[32px] rounded text-[#ffff] bg-[#1E824C]"
                              >
                                 بازنشانی
                              </button>
                              <button
                                 className="w-[90px] h-[32px] rounded text-[#ffff] bg-[#1E824C]"
                              >
                                 ذخیره
                              </button>
                           </div>
                        </form>
                     </Form>

                  </div>
               </div>

               <div className="w-[29%] bg-[#F9F9FB] rounded-md overflow-hidden">
                  <div className="flex items-center justify-between p-4 bg-[#FFF7FA] border-b-2 border-red-700">
                     <span>پیوست فایل</span>
                  </div>
                  <div className="p-6 flex flex-col gap-4">
                     <Form {...form}>
                        <FormField
                           control={form.control}
                           name="image"
                           render={({ field }) => <ImageUploadInput field={field} />}
                        />
                     </Form>

                  </div>
               </div>
            </div>
         )}

         <div className="flex flex-col w-full mt-5 rounded-md overflow-hidden shadow-md h-full">
            <div className="flex bg-bgBack justify-between p-2 px-5 border-b-2 border-red-500 items-center">
               <h2>لیست همه رهبران</h2>
               <button
                  onClick={changeVisibility}
                  className="cart-header-btn flex bg-greenDark text-white items-center p-2 gap-2 rounded-sm cursor-pointer"
               >
                  <GoPlus className="w-5 h-5" />
                  ثبت جدید
               </button>
            </div>

            <div>
               <DataTable columns={columns} data={BANK_ACCOUNTS} searchableKeys={["name", "phone", "status"]} />
            </div>
         </div>
      </div>
   );
};

export default Leads;
