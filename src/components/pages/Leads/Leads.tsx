import Breadcrumb from "@/components/shared/breadcrumb";
import { GoPlus } from "react-icons/go";
import { useBankColumns } from "./columns";
import { BANK_ACCOUNTS } from "./const";
import { DataTable } from "@/components/shared/data-table";
import { Form } from "@/components/ui/form";
const Leads = () => {
   const { columns } = useBankColumns();

   return (
      <div>
         <Breadcrumb>رهبران</Breadcrumb>
         <div className="flex">
            <div className="w-full  lg:w-2/3 bg-[#F9F9FB] shadow-2xl rounded-md overflow-hidden">
               <div className="flex items-center justify-between p-4 bg-[#FFF7FA] border-b-2 border-red-700">
                  <span>ثبت جدید سپرده</span>
                  <button className="w-[90px] h-[32px] text-[#ffff] rounded bg-[#1E824C]">مخفی</button>
               </div>

               <div className="p-4  ">
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

                       
                        {/* Buttons */}
                        <div className="flex gap-4">
                           <button className="w-[90px] h-[32px] rounded text-[#ffff] bg-[#1E824C]">بازنشانی</button>
                           <button className="w-[90px] h-[32px] rounded text-[#ffff] bg-[#1E824C]">ذخیره</button>
                        </div>
                     </div>
                  </Form>
               </div>
            </div>
            <div className="w-full lg:w-1/3 bg-[#F9F9FB]  rounded-md overflow-hidden">
               <div className=" flex items-center justify-between p-4 bg-[#FFF7FA] border-b-2 border-red-700">
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
         <div className="flex flex-col w-full mt-5 rounded-md overflow-hidden shadow-md h-full">
            <div className="flex bg-bgBack justify-between p-2 px-5 border-b-2 border-red-500 items-center">
               <h2>لیست همه رهبران</h2>
               <button className="cart-header-btn flex bg-greenDark text-white items-center p-2 gap-2 rounded-sm cursor-pointer">
                  <GoPlus className="w-5 h-5" />
                  ثبت جدید
               </button>
            </div>

            <div>
               <DataTable
                  columns={columns}
                  data={BANK_ACCOUNTS}
                  searchableKeys={["name", "phone", "status"]}
               />
            </div>
         </div>
      </div>
   );
};

export default Leads;
