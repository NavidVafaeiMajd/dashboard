import { HiCalendarDateRange } from "react-icons/hi2";
import { useBankColumns } from "../AccountBank/columns";
import { DataTable } from "@/components/shared/data-table";
import { BANK_ACCOUNTS } from "../AccountBank/const";
import { Form } from "@/components/ui/form";
import { useState } from "react";
import CuDatePicker from "@/components/shared/DatePicker";
export default function MainList() {
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState<Date | null>(null);
    const { columns, modal } = useBankColumns();
    let changeVisibility = () => {
        setOpen(prev => !prev)
    }
    return (
        <div className="flex flex-col gap-6 px-4">
            {/* Top Section */}
            {open &&
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Form Section */}
                    <div className="w-full lg:w-2/3 bg-[#F9F9FB] shadow-2xl rounded-md overflow-hidden">
                        <div className="flex items-center justify-between p-4 bg-[#FFF7FA] border-b-2 border-red-700">
                            <span>ثبت جدید سپرده</span>
                            <button onClick={changeVisibility} className="w-[90px] h-[32px] text-[#ffff] rounded bg-greenDark">مخفی</button>
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
                                                <CuDatePicker
                                                    value={date}
                                                    onChange={setDate}
                                                    placeholder="تاریخ افتتاح   "
                                                />
                                                {/* <input className="h-[45px] w-full border rounded-l-none" /> */}
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
                                        <button className="w-[90px] h-[32px] rounded text-[#ffff] bg-[#1E824C]">بازنشانی</button>
                                        <button className="w-[90px] h-[32px] rounded text-[#ffff] bg-[#1E824C]">ذخیره</button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>

                    {/* Attachment Section */}
                    <div className="w-full lg:w-1/3 bg-[#F9F9FB]  rounded-md overflow-hidden">
                        <div className="flex items-center justify-between p-4 bg-[#FFF7FA] border-b-2 border-red-700">
                            <span>پیوست فایل</span>
                        </div>
                        <div className="p-6 flex flex-col gap-4">
                            <span>پیوست *</span>
                            <div className="flex items-center gap-4">
                                <div className="w-[100%]  h-[42px] rounded-[9px] bg-zinc-600 flex items-center justify-center">
                                    <span className="text-white">Browse</span>
                                </div>
                                <input className="w-[100%]" type="file" />
                            </div>
                            <span className="text-sm text-gray-500">فقط فایل‌های تصویر قابل بارگذاری هستند</span>
                        </div>
                    </div>
                </div>
            }

            <div className="bg-white rounded shadow mt-4">

                <div className="w-[100%]  bg-[#F9F9FB]  rounded-md overflow-hidden">
                    <div className="flex items-center justify-between p-[0.5rem] w-[100%] bg-[#FFF7FA] border-b-2 border-red-700">
                        <span>لیست همه هزینه ها</span>
                        <div className="flex flex-wrap gap-4 ">
                            <button onClick={changeVisibility} className="w-[90px] h-[32px] rounded text-[#ffff] bg-greenDark">{open ? "مخفی" : "ثبت جدید"}</button>
                        </div>
                    </div>
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
