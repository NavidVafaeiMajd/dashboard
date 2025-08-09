// import { HiCalendarDateRange } from "react-icons/hi2";
// import { useBankColumns } from "../AccountBank/columns";
// import { DataTable } from "@/components/shared/data-table";
// import { BANK_ACCOUNTS } from "../AccountBank/const";
// import { Form } from "@/components/ui/form";
// import { useState } from "react";

// export default function AmmountMain() {
//     const [open, setOpen] = useState(false);
//     let changeVisibiliti = () => {
//         setOpen(!open)
//     }
//     const { columns, modal } = useBankColumns();

//     return (
//         <div className="flex flex-col gap-6 px-4">
//             {/* Top Section */}
//             <div className="flex flex-col lg:flex-row gap-6">
//                 {/* Form Section */}
//                 <div className="w-full lg:w-2/3 bg-[#F9F9FB] shadow-2xl rounded-md">
//                     <div className="flex items-center justify-between p-4 bg-[#FFF7FA] border-b-2 border-red-700">
//                         <span>ثبت جدید سپرده</span>
//                         <button onClick={changeVisibiliti} className="w-[90px] h-[32px] rounded bg-green-300">مخفی</button>
//                     </div>
//                     {open && 
//                         <div className="p-4">
//                             <Form>
//                                 <div className="flex flex-col gap-10">
//                                     {/* Row 1 */}
//                                     <div className="flex flex-col md:flex-row md:justify-between gap-4">
//                                         <div className="flex flex-col gap-2 w-full md:w-1/2">
//                                             <span>شماره حساب *</span>
//                                             <div className="flex w-full">
//                                                 <div className="w-[56px] h-[46px] flex justify-center items-center bg-[#F0F2F8] text-sm">
//                                                     IRR
//                                                 </div>
//                                                 <input className="h-[45px] w-full border rounded-l-none" />
//                                             </div>
//                                         </div>
//                                         <div className="flex flex-col gap-2 w-full md:w-1/2">
//                                             <span>نوع حساب بانکی *</span>
//                                             <select className="h-[45px] border rounded">
//                                                 <option value="">Hi</option>
//                                             </select>
//                                         </div>
//                                     </div>

//                                     {/* Row 2 */}
//                                     <div className="flex flex-col md:flex-row md:justify-between gap-4">
//                                         <div className="flex flex-col gap-2 w-full md:w-1/2">
//                                             <span>تاریخ افتتاح *</span>
//                                             <div className="flex w-full">
//                                                 <div className="w-[56px] h-[46px] flex justify-center items-center bg-[#F0F2F8] text-sm">
//                                                     <HiCalendarDateRange className="w-[19px] h-[19px]" />
//                                                 </div>
//                                                 <input className="h-[45px] w-full border rounded-l-none" />
//                                             </div>
//                                         </div>
//                                         <div className="flex flex-col gap-2 w-full md:w-1/2">
//                                             <span>دسته‌بندی *</span>
//                                             <select className="h-[45px] border rounded">
//                                                 <option value="">Hi</option>
//                                             </select>
//                                         </div>
//                                     </div>

//                                     {/* Row 3 */}
//                                     <div className="flex flex-col lg:flex-row justify-between gap-4">
//                                         <div className="w-full lg:w-1/3 flex flex-col gap-2">
//                                             <span>دسته‌بندی *</span>
//                                             <select className="h-[45px] border rounded">
//                                                 <option value="">Hi</option>
//                                             </select>
//                                         </div>
//                                         <div className="w-full lg:w-1/3 flex flex-col gap-2">
//                                             <span>دسته‌بندی *</span>
//                                             <select className="h-[45px] border rounded">
//                                                 <option value="">Hi</option>
//                                             </select>
//                                         </div>
//                                         <div className="w-full lg:w-1/3 flex flex-col gap-2">
//                                             <span>دسته‌بندی *</span>
//                                             <input type="text" className="h-[45px] border rounded" />
//                                         </div>
//                                     </div>

//                                     {/* شرح */}
//                                     <div className="flex flex-col gap-2">
//                                         <span>شرح</span>
//                                         <textarea className="w-full min-h-[90px] border rounded" />
//                                     </div>

//                                     {/* Buttons */}
//                                     <div className="flex gap-4">
//                                         <button className="w-[90px] h-[32px] rounded bg-green-300">بازنشانی</button>
//                                         <button className="w-[90px] h-[32px] rounded bg-green-300">ذخیره</button>
//                                     </div>
//                                 </div>
//                             </Form>
//                         </div>
//                     }
//                 </div>

//                 {/* Attachment Section */}
//                 <div className="w-full lg:w-1/3 bg-[#F9F9FB] rounded-md">
//                     <div className="flex items-center justify-between p-4 bg-[#FFF7FA] border-b-2 border-red-700">
//                         <span>پیوست فایل</span>
//                     </div>
//                     <div className="p-6 flex flex-col gap-4">
//                         <span>پیوست *</span>
//                         <div className="flex items-center gap-4">
//                             <div className="w-[74px] h-[42px] rounded-[9px] bg-zinc-600 flex items-center justify-center">
//                                 <span className="text-white">Browse</span>
//                             </div>
//                             <input type="file" />
//                         </div>
//                         <span className="text-sm text-gray-500">فقط فایل‌های تصویر قابل بارگذاری هستند</span>
//                     </div>
//                 </div>
//             </div>

//             {/* DataTable Section */}
//             <div className="bg-white rounded shadow mt-4">
//                 <div className="flex flex-wrap gap-4 p-4">
//                     <button className="w-[90px] h-[32px] rounded bg-green-300">مخفی</button>
//                     <button className="w-[90px] h-[32px] rounded bg-green-300">مخفی</button>
//                 </div>

//                 <DataTable
//                     columns={columns}
//                     data={BANK_ACCOUNTS}
//                     searchableKeys={["accountNumber", "accountType"]}
//                 />
//                 {modal}
//             </div>
//         </div>
//     );
// }

// import { HiCalendarDateRange } from "react-icons/hi2";
// import { useBankColumns } from "../AccountBank/columns";
// import { DataTable } from "@/components/shared/data-table";
// import { BANK_ACCOUNTS } from "../AccountBank/const";
// import { Form } from "@/components/ui/form";
// import { useState } from "react";

// export default function AmmountMain() {
//   const [open, setOpen] = useState(false);
//   const { columns, modal } = useBankColumns();

//   const toggleForm = () => {
//     setOpen(prev => !prev);
//   };

//   return (
//     <div className="flex flex-col gap-6 px-4">
//       {/* Top Section */}
//       <div className="flex flex-col lg:flex-row gap-6">
//         {/* Form Section */}
//         <div className="w-full lg:w-2/3 bg-[#F9F9FB] shadow-2xl rounded-md">
//           <div className="flex items-center justify-between p-4 bg-[#FFF7FA] border-b-2 border-red-700">
//             <span>ثبت جدید سپرده</span>
//             <button onClick={toggleForm} className="w-[90px] h-[32px] rounded bg-green-300">
//               {open ? "مخفی" : "نمایش"}
//             </button>
//           </div>

//           {open && (
//             <div className="p-4">
//               <Form>
//                 <div className="flex flex-col gap-10">
//                   {/* Row 1 */}
//                   <div className="flex flex-col md:flex-row md:justify-between gap-4">
//                     <div className="flex flex-col gap-2 w-full md:w-1/2">
//                       <span>شماره حساب *</span>
//                       <div className="flex w-full">
//                         <div className="w-[56px] h-[46px] flex justify-center items-center bg-[#F0F2F8] text-sm">IRR</div>
//                         <input className="h-[45px] w-full border rounded-l-none" />
//                       </div>
//                     </div>
//                     <div className="flex flex-col gap-2 w-full md:w-1/2">
//                       <span>نوع حساب بانکی *</span>
//                       <select className="h-[45px] border rounded">
//                         <option value="">Hi</option>
//                       </select>
//                     </div>
//                   </div>

//                   {/* Row 2 */}
//                   <div className="flex flex-col md:flex-row md:justify-between gap-4">
//                     <div className="flex flex-col gap-2 w-full md:w-1/2">
//                       <span>تاریخ افتتاح *</span>
//                       <div className="flex w-full">
//                         <div className="w-[56px] h-[46px] flex justify-center items-center bg-[#F0F2F8] text-sm">
//                           <HiCalendarDateRange className="w-[19px] h-[19px]" />
//                         </div>
//                         <input className="h-[45px] w-full border rounded-l-none" />
//                       </div>
//                     </div>
//                     <div className="flex flex-col gap-2 w-full md:w-1/2">
//                       <span>دسته‌بندی *</span>
//                       <select className="h-[45px] border rounded">
//                         <option value="">Hi</option>
//                       </select>
//                     </div>
//                   </div>

//                   <div className="flex flex-col lg:flex-row justify-between gap-4">
//                     <div className="w-full lg:w-1/3 flex flex-col gap-2">
//                       <span>دسته‌بندی *</span>
//                       <select className="h-[45px] border rounded">
//                         <option value="">Hi</option>
//                       </select>
//                     </div>
//                     <div className="w-full lg:w-1/3 flex flex-col gap-2">
//                       <span>دسته‌بندی *</span>
//                       <select className="h-[45px] border rounded">
//                         <option value="">Hi</option>
//                       </select>
//                     </div>
//                     <div className="w-full lg:w-1/3 flex flex-col gap-2">
//                       <span>دسته‌بندی *</span>
//                       <input type="text" className="h-[45px] border rounded" />
//                     </div>
//                   </div>

//                   {/* Description */}
//                   <div className="flex flex-col gap-2">
//                     <span>شرح</span>
//                     <textarea className="w-full min-h-[90px] border rounded" />
//                   </div>

//                   {/* Buttons */}
//                   <div className="flex gap-4">
//                     <button className="w-[90px] h-[32px] rounded bg-green-300">بازنشانی</button>
//                     <button className="w-[90px] h-[32px] rounded bg-green-300">ذخیره</button>
//                   </div>
//                 </div>
//               </Form>
//             </div>
//           )}
//         </div>

//         {/* Attachment Section */}
//         <div className="w-full lg:w-1/3 bg-[#F9F9FB] rounded-md">
//           <div className="flex items-center justify-between p-4 bg-[#FFF7FA] border-b-2 border-red-700">
//             <span>پیوست فایل</span>
//           </div>
//           <div className="p-6 flex flex-col gap-4">
//             <span>پیوست *</span>
//             <div className="flex items-center gap-4">
//               <div className="w-[74px] h-[42px] rounded-[9px] bg-zinc-600 flex items-center justify-center">
//                 <span className="text-white">Browse</span>
//               </div>
//               <input type="file" />
//             </div>
//             <span className="text-sm text-gray-500">فقط فایل‌های تصویر قابل بارگذاری هستند</span>
//           </div>
//         </div>
//       </div>

//       {/* DataTable Section */}
//       <div className="bg-white rounded shadow mt-4">
//         <div className="flex flex-wrap gap-4 p-4">
//           <button className="w-[90px] h-[32px] rounded bg-green-300">مخفی</button>
//           <button className="w-[90px] h-[32px] rounded bg-green-300">مخفی</button>
//         </div>

//         <DataTable
//           columns={columns}
//           data={BANK_ACCOUNTS}
//           searchableKeys={["accountNumber", "accountType"]}
//         />
//         {modal}
//       </div>
//     </div>
//   );
// }


import { HiCalendarDateRange } from "react-icons/hi2";
import { useBankColumns } from "../AccountBank/columns";
import { DataTable } from "@/components/shared/data-table";
import { BANK_ACCOUNTS } from "../AccountBank/const";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type BankForm = {
  accountType: string;
  initialBalance: string;
  accountNumber: string;
  branchCode: string;
  branchName: string;
};

export default function AmmountMain() {
  const [open, setOpen] = useState(false);
  const { columns, modal } = useBankColumns();

  const form = useForm<BankForm>({
    defaultValues: {
      accountType: "",
      initialBalance: "",
      accountNumber: "",
      branchCode: "",
      branchName: "",
    },
  });

  const onSubmit = (data: BankForm) => {
    console.log("Form Data:", data);
    // handle submit
  };

  return (
    <div className="flex flex-col gap-6 px-4">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Form Section */}
        {open &&
          <>
            <div className="w-full lg:w-2/3 bg-[#F9F9FB] shadow-2xl rounded-md">
              <div className="flex items-center justify-between p-4 bg-[#FFF7FA] border-b-2 border-red-700">
                <span>ثبت جدید سپرده</span>
                <button
                  onClick={() => setOpen(!open)}
                  className="w-[90px] h-[32px] rounded text-[#ffff] rounded bg-[#1E824C]"
                >
                  {open ? "مخفی" : "نمایش"}
                </button>
              </div>

              <div className="p-4">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col gap-6"
                  >
                    {/* Row 1 */}
                    <FormField
                      control={form.control}
                      name="accountNumber"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel>شماره حساب *</FormLabel>
                          <FormControl>
                            <div className="flex">
                              <div className="w-[56px] h-[46px] flex justify-center items-center bg-[#F0F2F8] text-sm">
                                IRR
                              </div>
                              <Input
                                {...field}
                                className="w-full h-[45px] rounded-l-none"
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Row 2 */}
                    <FormField
                      control={form.control}
                      name="accountType"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel>نوع حساب بانکی *</FormLabel>
                          <FormControl>
                            <Input {...field} className="w-full h-[45px]" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="initialBalance"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel>تراز اولیه *</FormLabel>
                          <FormControl>
                            <div className="flex w-full">
                              <div className="w-[56px] h-[46px] flex justify-center items-center bg-[#F0F2F8] text-sm">
                                IRR
                              </div>
                              <Input
                                {...field}
                                className="w-full rounded-l-none h-[45px]"
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="branchCode"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel>کد شعبه *</FormLabel>
                          <FormControl>
                            <Input {...field} className="w-full h-[45px]" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="branchName"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel>شعبه بانک *</FormLabel>
                          <FormControl>
                            <Textarea {...field} className="w-full min-h-[90px]" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex gap-4">
                      <button
                        // type="reset"
                        className="w-[90px] h-[32px] rounded text-[#ffff] rounded bg-[#1E824C]"
                      >
                        بازنشانی
                      </button>
                      <button
                        // type="submit"
                        className="w-[90px] h-[32px] rounded text-[#ffff] rounded bg-[#1E824C]"
                      >
                        ذخیره
                      </button>
                    </div>
                  </form>
                </Form>
              </div>

            </div>


            <div className="w-full lg:w-1/3 bg-[#F9F9FB] rounded-md">
              <div className="flex items-center justify-between p-4 bg-[#FFF7FA] border-b-2 border-red-700">
                <span>پیوست فایل</span>
              </div>
              <div className="p-6 flex flex-col gap-4">
                <span>پیوست *</span>
                <div className="flex items-center gap-4">
                  <div className="w-[74px] h-[42px] rounded-[9px] bg-zinc-600 flex items-center justify-center">
                    <span className="text-white">Browse</span>
                  </div>
                  <input className="w-[100%]" type="file" accept="image/*" />
                </div>
                <span className="text-sm text-gray-500">
                  فقط فایل‌های تصویر قابل بارگذاری هستند
                </span>
              </div>
            </div>
          </>
        }
      </div>

      {/* DataTable Section */}
      <div className="bg-white rounded shadow mt-4">
        <div className="flex flex-wrap gap-4 p-4">
          <button onClick={() => setOpen(!open)} className="w-[90px] h-[32px] rounded text-[#ffff] rounded bg-[#1E824C]">  {open ? "مخفی" : "نمایش"}</button>
        </div>

        <DataTable
          columns={columns}
          data={BANK_ACCOUNTS}
          searchableKeys={["accountNumber", "accountType"]}
        />
        {modal}
      </div>
    </div>
  );
}
