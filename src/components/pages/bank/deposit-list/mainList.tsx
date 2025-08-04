// import { HiCalendarDateRange } from "react-icons/hi2";
// import { useBankColumns } from "../AccountBank/columns";
// import { DataTable } from "@/components/shared/data-table";
// import { BANK_ACCOUNTS } from "../AccountBank/const";
// import {
//     Form,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormControl,
//     FormMessage,
// } from "@/components/ui/form";
// import { useState } from "react";
// export default function MainList() {
//     const [open , Setopen] = useState(false)
//     const { columns, modal } = useBankColumns();
//     return (
//         <>
//             <div className="flex flex-col  gap-[1.5rem]">
//                 <div className="flex flex-wrap justify-between">
//                     <div className="w-fit  bg-[#F9F9FB] shadow-2xl">
//                         <div className="w-[100%] flex items-center p-[0.5rem] bg-[#FFF7FA] justify-between border-b-2 border-red-700">
//                             <span>ثبت جدید سپرده</span>
//                             <button className="w-[90px] rounded-[5px] h-[32px] bg-green-300">
//                                 مخفی
//                             </button>
//                         </div>
//                         <div className="p-[0.5rem] flex flex-col flex-wrap">
//                             <Form>
//                                 <div className="flex flex-wrap flex-col gap-[2.5rem]">
//                                     <div className="flex justify-between flex-row-reverse">

//                                         <div className="flex flex-col gap-[0.75rem]">
//                                             <span>نوع حساب بانکی *</span>
//                                             <div className="flex  w-full">
//                                                 <div className="w-[56px] h-[46px] flex justify-center items-center bg-[#F0F2F8] text-sm">
//                                                     IRR
//                                                 </div>
//                                                 <input className="h-[45px] w-[400px] rounded-l-none " />
//                                             </div>
//                                         </div>
//                                         <div className="h-[45px] flex flex-col w-[470px] gap-[0.5rem]">
//                                             <span>نوع حساب بانکی *</span>
//                                             <select name="" id="">
//                                                 <option value="">Hi</option>
//                                             </select>
//                                         </div>
//                                     </div>

//                                     <div className="flex justify-between ">
//                                         <div className="flex flex-col gap-[0.75rem]">
//                                             <span>نوع حساب بانکی *</span>
//                                             <div className="flex flex-row-reverse w-full">
//                                                 <div className="w-[56px] h-[46px] flex justify-center items-center bg-[#F0F2F8] text-sm">
//                                                     <HiCalendarDateRange className="w-[19px] h-[19px]" />
//                                                 </div>
//                                                 <input className="h-[45px] w-[420px] rounded-l-none " />
//                                             </div>
//                                         </div>
//                                         <div className="h-[45px] flex flex-col w-[460px] gap-[0.5rem]">
//                                             <span>دسته بندی *</span>
//                                             <select name="" id="">
//                                                 <option value="">Hi</option>
//                                             </select>
//                                         </div>
//                                     </div>

//                                     <div className="flex justify-between items-center">
//                                         <div className="h-[45px] flex flex-col w-[300px] gap-[0.5rem]">
//                                             <span>دسته بندی *</span>
//                                             <select name="" id="">
//                                                 <option value="">Hi</option>
//                                             </select>
//                                         </div>
//                                         <div className="h-[45px] flex flex-col w-[300px] gap-[0.5rem]">
//                                             <span>دسته بندی *</span>
//                                             <select name="" id="">
//                                                 <option value="">Hi</option>
//                                             </select>
//                                         </div>
//                                         <div className="flex h-[35px] flex-col gap-[0.5rem]">
//                                             <span>دسته بندی *</span>
//                                             <input type="text" className="w-[300px] " />
//                                         </div>
//                                     </div>
//                                     <div>
//                                         <span>شرح</span>
//                                         <textarea name="postContent" className="w-full min-h-[90px]!" />
//                                     </div>
//                                     <div>
//                                         <div className="flex gap-[1.5rem]">
//                                             <button className="w-[90px] rounded-[5px] h-[32px] bg-green-300" >باز نشانی</button>
//                                             <button className="w-[90px] rounded-[5px] h-[32px] bg-green-300" >دخیره</button>
//                                         </div>
//                                     </div>
//                                 </div>
                            
//                             </Form>
//                         </div>
//                     </div>
//                     <div className="w-fit h-fit bg-[#F9F9FB]">
//                         <div className="w-[100%] flex items-center p-[0.5rem] bg-[#FFF7FA] justify-between border-b-2 border-red-700">
//                             <span>ثبت جدید سپرده</span>

//                         </div>
//                         <div className="p-[1.5rem] flex flex-col gap-[1.5rem]">
//                             <span>پیوست *</span>
//                             <div className="flex">
//                                 <div className="w-[74px] h-[42px]  rounded-[9px] bg-zinc-600 flex items-center justify-center">
//                                     <span className="text-amber-50 flex items-center justify-center">
//                                         Browse
//                                     </span>
//                                 </div>
//                                 <input type="file" name="" id="" />
//                             </div>
//                             <span>فقط فایل های تصویر قابل بارگزاری هستن</span>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="bg-[#fff]">
//                     <div className="w-[100%] h-[60px] flex p-[1.5rem] gap-[1.5rem] ">
//                         <button className="w-[90px] rounded-[5px] h-[32px] bg-green-300">
//                             مخفی
//                         </button>
//                         <button className="w-[90px] rounded-[5px] h-[32px] bg-green-300">
//                             مخفی
//                         </button>
//                     </div>
//                     <DataTable
//                         columns={columns}
//                         data={BANK_ACCOUNTS}
//                         searchableKeys={["accountNumber", "accountType"]}
//                     />
//                     {modal}
//                 </div>
//             </div>
//         </>
//     )
// }

import { HiCalendarDateRange } from "react-icons/hi2";
import { useBankColumns } from "../AccountBank/columns";
import { DataTable } from "@/components/shared/data-table";
import { BANK_ACCOUNTS } from "../AccountBank/const";
import { Form } from "@/components/ui/form";
import { useState } from "react";

export default function MainList() {
    const [open, setOpen] = useState(false);
    const { columns, modal } = useBankColumns();

    return (
        <div className="flex flex-col gap-6 px-4">
            {/* Top Section */}
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Form Section */}
                <div className="w-full lg:w-2/3 bg-[#F9F9FB] shadow-2xl rounded-md overflow-hidden">
                    <div className="flex items-center justify-between p-4 bg-[#FFF7FA] border-b-2 border-red-700">
                        <span>ثبت جدید سپرده</span>
                        <button className="w-[90px] h-[32px] rounded bg-green-300">مخفی</button>
                    </div>

                    <div className="p-4">
                        <Form>
                            <div className="flex flex-col gap-10">
                                {/* Row 1 */}
                                <div className="flex flex-col md:flex-row md:justify-between gap-4">
                                    <div className="flex flex-col gap-2 w-full md:w-1/2">
                                        <span>شماره حساب *</span>
                                        <div className="flex w-full">
                                            <div className="w-[56px] h-[46px] flex justify-center items-center bg-[#F0F2F8] text-sm">
                                                IRR
                                            </div>
                                            <input className="h-[45px] w-full border rounded-l-none" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 w-full md:w-1/2">
                                        <span>نوع حساب بانکی *</span>
                                        <select className="h-[45px] border rounded">
                                            <option value="">Hi</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Row 2 */}
                                <div className="flex flex-col md:flex-row md:justify-between gap-4">
                                    <div className="flex flex-col gap-2 w-full md:w-1/2">
                                        <span>تاریخ افتتاح *</span>
                                        <div className="flex w-full">
                                            <div className="w-[56px] h-[46px] flex justify-center items-center bg-[#F0F2F8] text-sm">
                                                <HiCalendarDateRange className="w-[19px] h-[19px]" />
                                            </div>
                                            <input className="h-[45px] w-full border rounded-l-none" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 w-full md:w-1/2">
                                        <span>دسته‌بندی *</span>
                                        <select className="h-[45px] border rounded">
                                            <option value="">Hi</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Row 3 */}
                                <div className="flex flex-col lg:flex-row justify-between gap-4">
                                    <div className="w-full lg:w-1/3 flex flex-col gap-2">
                                        <span>دسته‌بندی *</span>
                                        <select className="h-[45px] border rounded">
                                            <option value="">Hi</option>
                                        </select>
                                    </div>
                                    <div className="w-full lg:w-1/3 flex flex-col gap-2">
                                        <span>دسته‌بندی *</span>
                                        <select className="h-[45px] border rounded">
                                            <option value="">Hi</option>
                                        </select>
                                    </div>
                                    <div className="w-full lg:w-1/3 flex flex-col gap-2">
                                        <span>دسته‌بندی *</span>
                                        <input type="text" className="h-[45px] border rounded" />
                                    </div>
                                </div>

                                {/* شرح */}
                                <div className="flex flex-col gap-2">
                                    <span>شرح</span>
                                    <textarea className="w-full min-h-[90px] border rounded" />
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-4">
                                    <button className="w-[90px] h-[32px] rounded bg-green-300">بازنشانی</button>
                                    <button className="w-[90px] h-[32px] rounded bg-green-300">ذخیره</button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>

                {/* Attachment Section */}
                <div className="w-full lg:w-1/3 bg-[#F9F9FB] rounded-md overflow-hidden">
                    <div className="flex items-center justify-between p-4 bg-[#FFF7FA] border-b-2 border-red-700">
                        <span>پیوست فایل</span>
                    </div>
                    <div className="p-6 flex flex-col gap-4">
                        <span>پیوست *</span>
                        <div className="flex items-center gap-4">
                            <div className="w-[74px] h-[42px] rounded-[9px] bg-zinc-600 flex items-center justify-center">
                                <span className="text-white">Browse</span>
                            </div>
                            <input type="file" />
                        </div>
                        <span className="text-sm text-gray-500">فقط فایل‌های تصویر قابل بارگذاری هستند</span>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded shadow mt-4">
                <div className="flex flex-wrap gap-4 p-4">
                    <button className="w-[90px] h-[32px] rounded bg-green-300">مخفی</button>
                    <button className="w-[90px] h-[32px] rounded bg-green-300">مخفی</button>
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
