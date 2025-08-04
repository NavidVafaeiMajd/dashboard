// import React, { useState } from 'react'
// import { DataTable } from '@/components/shared/data-table'
// import { BANK_ACCOUNTS } from './const'
// import { useBankColumns } from './columns'
// import { HiCalendarDateRange } from 'react-icons/hi2'
// import { iso } from 'zod'
// export default function MainclientsList() {
//     const { columns, modal } = useBankColumns();
//     const [isopen , Setopen] = useState(false)

//     let changeVisibiliti = () => {
//         Setopen(!isopen)
//     }
//     return (
//         <>
//             <div className='flex tra flex-wrap flex-col  gap-[2.5rem]'>
//                 {isopen &&
//                 <div className="flex flex-wrap justify-between">
//                     <div className="lg:w-[1016px] w-[100%] gap-[2.5rem]  bg-[#F9F9FB] shadow-2xl">
//                         <div className="w-[100%] flex items-center p-[0.5rem] bg-[#FFF7FA] justify-between border-b-2 border-red-700">
//                             <span>ثبت جدید سپرده</span>
//                             <button className="w-[90px] rounded-[5px] h-[32px] bg-green-300">
//                                 مخفی
//                             </button>
//                         </div>
//                         <div className="p-[0.5rem] ">
//                             <div className="flex flex-col gap-[2.5rem] flex-wrap">
//                                 <div className="flex justify-between ">
//                                     <div className="flex flex-col gap-[0.75rem]">
//                                         <span>نام *</span>
//                                         <div className="flex  w-full">
//                                             <div className="w-[56px] h-[46px] flex justify-center items-center bg-[#F0F2F8] text-sm">
//                                                 IRR
//                                             </div>
//                                             <input className="h-[45px] w-[400px] rounded-l-none " />
//                                         </div>
//                                     </div>
//                                     <div className="flex flex-col gap-[0.75rem]">
//                                         <span>نام خانوادگی  *</span>
//                                         <div className="flex  w-full">
//                                             <div className="w-[56px] h-[46px] flex justify-center items-center bg-[#F0F2F8] text-sm">
//                                                 IRR
//                                             </div>
//                                             <input className="h-[45px] w-[400px] rounded-l-none " />
//                                         </div>
//                                     </div>

//                                 </div>



//                                 <div className="flex justify-between items-center">
//                                     <div className="flex h-[35px] flex-col gap-[0.5rem]">
//                                         <span>رمز عبور  *</span>
//                                         <input type="text" className="w-[300px] " />
//                                     </div>
//                                     <div className="flex h-[35px] flex-col gap-[0.5rem]">
//                                         <span>شماره تماس *</span>
//                                         <input type="text" className="w-[300px] " />
//                                     </div>
//                                     <div className="h-[45px] flex flex-col w-[300px] gap-[0.5rem]">
//                                         <span>دسته بندی *</span>
//                                         <select name="" id="">
//                                             <option value="">اقا</option>
//                                             <option value="">خانم</option>
//                                         </select>
//                                     </div>

//                                 </div>
//                                 <div className="flex justify-between ">
//                                     <div className="flex flex-col gap-[0.75rem]">
//                                         <span>نام *</span>
//                                         <div className="flex  w-full">
//                                             <div className="w-[56px] h-[46px] flex justify-center items-center bg-[#F0F2F8] text-sm">
//                                                 IRR
//                                             </div>
//                                             <input className="h-[45px] w-[400px] rounded-l-none " />
//                                         </div>
//                                     </div>
//                                     <div className="flex flex-col gap-[0.75rem]">
//                                         <span>نام خانوادگی  *</span>
//                                         <div className="flex  w-full">
//                                             <div className="w-[56px] h-[46px] flex justify-center items-center bg-[#F0F2F8] text-sm">
//                                                 IRR
//                                             </div>
//                                             <input className="h-[45px] w-[400px] rounded-l-none " />
//                                         </div>
//                                     </div>

//                                 </div>

//                                 <div>
//                                     <div className="flex gap-[1.5rem]">
//                                         <button className="w-[90px] rounded-[5px] h-[32px] bg-green-300" >باز نشانی</button>
//                                         <button className="w-[90px] rounded-[5px] h-[32px] bg-green-300" >دخیره</button>
//                                     </div>
//                                 </div>


//                             </div>
//                         </div>
//                     </div>
//                     <div className="w-[440px] h-fit bg-[#F9F9FB]">
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
//                 }

//                 <div className="shadow-2xl w-[100%] rounded-[5px] h-fit bg-[#F9F9FB]">
//                     <div className="w-full h-[45px] flex justify-between p-2 items-center rounded-t-[9px] bg-[#FFF7FA] border-b-2 border-[#FF3A86]">
//                         <span className="text-[17px]">لیست معامله ها</span>
//                         <button className="w-[90px] hover:bg-blue-700 transition duration-300 ease-in-out rounded-[5px] h-[32px] bg-green-300" onClick={changeVisibiliti} >جدید</button>
//                     </div>
//                     <div>
//                         <DataTable
//                             columns={columns}
//                             data={BANK_ACCOUNTS}
//                             searchableKeys={["accountNumber", "accountType"]}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

import React, { useState } from 'react'
import { DataTable } from '@/components/shared/data-table'
import { BANK_ACCOUNTS } from './const'
import { useBankColumns } from './columns'

export default function MainclientsList() {
  const { columns } = useBankColumns()
  const [isOpen, setOpen] = useState(false)

  const toggleForm = () => setOpen(!isOpen)

  return (
    <div className="flex flex-col gap-10 px-4 py-6">
      {isOpen && (
        <div className="flex flex-col lg:flex-row gap-6 w-full">
          {/* فرم اطلاعات */}
          <div className="w-full lg:w-2/3 bg-[#F9F9FB] shadow-2xl rounded-md">
            <div className="flex items-center justify-between p-4 bg-[#FFF7FA] border-b-2 border-red-700">
              <span>ثبت جدید سپرده</span>
              <button onClick={toggleForm} className="w-[90px] h-[32px] bg-green-300 rounded-md">مخفی</button>
            </div>
            <div className="p-4 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label>نام *</label>
                  <div className="flex">
                    <div className="w-[56px] h-[46px] flex items-center justify-center bg-[#F0F2F8] text-sm">IRR</div>
                    <input className="h-[45px] w-full rounded-l-none border border-gray-300" />
                  </div>
                </div>
                <div>
                  <label>نام خانوادگی *</label>
                  <div className="flex">
                    <div className="w-[56px] h-[46px] flex items-center justify-center bg-[#F0F2F8] text-sm">IRR</div>
                    <input className="h-[45px] w-full rounded-l-none border border-gray-300" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label>رمز عبور *</label>
                  <input type="text" className="h-[45px] w-full border border-gray-300" />
                </div>
                <div>
                  <label>شماره تماس *</label>
                  <input type="text" className="h-[45px] w-full border border-gray-300" />
                </div>
                <div>
                  <label>دسته‌بندی *</label>
                  <select className="h-[45px] w-full border border-gray-300">
                    <option>آقا</option>
                    <option>خانم</option>
                  </select>
                </div>
              </div>

              {/* تکراری ولی نگه‌داشتم برای تطابق با کد شما */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label>نام *</label>
                  <div className="flex">
                    <div className="w-[56px] h-[46px] flex items-center justify-center bg-[#F0F2F8] text-sm">IRR</div>
                    <input className="h-[45px] w-full rounded-l-none border border-gray-300" />
                  </div>
                </div>
                <div>
                  <label>نام خانوادگی *</label>
                  <div className="flex">
                    <div className="w-[56px] h-[46px] flex items-center justify-center bg-[#F0F2F8] text-sm">IRR</div>
                    <input className="h-[45px] w-full rounded-l-none border border-gray-300" />
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="w-[90px] h-[40px] rounded-md bg-green-300">بازنشانی</button>
                <button className="w-[90px] h-[40px] rounded-md bg-green-300">ذخیره</button>
              </div>
            </div>
          </div>

          {/* بخش پیوست */}
          <div className="w-full lg:w-1/3 bg-[#F9F9FB] shadow-2xl rounded-md">
            <div className="flex items-center justify-between p-4 bg-[#FFF7FA] border-b-2 border-red-700">
              <span>پیوست فایل</span>
            </div>
            <div className="p-6 space-y-4">
              <span>پیوست *</span>
              <div className="flex items-center gap-2">
                <label className="w-[74px] h-[42px] bg-zinc-600 text-white flex items-center justify-center rounded-[9px] cursor-pointer">
                  Browse
                </label>
                <input type="file" accept="image/*" className="text-sm" />
              </div>
              <span className="text-sm text-gray-600">فقط فایل‌های تصویر قابل بارگذاری هستند</span>
            </div>
          </div>
        </div>
      )}

      {/* لیست معامله‌ها */}
      <div className="w-full bg-[#F9F9FB] shadow-2xl rounded-md">
        <div className="flex justify-between items-center p-4 bg-[#FFF7FA] border-b-2 border-[#FF3A86]">
          <span className="text-[17px]">لیست معامله‌ها</span>
          <button onClick={toggleForm} className="w-[90px] h-[32px] bg-green-300 rounded-md hover:bg-blue-700 transition">جدید</button>
        </div>
        <div className="overflow-x-auto">
          <DataTable
            columns={columns}
            data={BANK_ACCOUNTS}
            searchableKeys={["accountNumber", "accountType"]}
          />
        </div>
      </div>
    </div>
  )
}
