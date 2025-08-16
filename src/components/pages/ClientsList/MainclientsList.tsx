import React, { useState } from 'react'
import { DataTable } from '@/components/shared/data-table'
import { BANK_ACCOUNTS } from './const'
import { useBankColumns } from './columns'
import { Button } from '@/components/ui/button'
export default function MainclientsList() {
  const { columns } = useBankColumns()
  const [isOpen, setOpen] = useState(false)
  let namesaved = "زخیره"
  const toggleForm = () => setOpen(!isOpen)

  return (
    <div className="flex flex-col gap-10 px-4 py-6">
      {isOpen && (
        <div className="flex flex-col lg:flex-row gap-6 w-full">
          {/* فرم اطلاعات */}
          <div className="w-full lg:w-2/3 bg-[#F9F9FB] shadow-2xl rounded-md">
            <div className="flex items-center justify-between p-4 bg-[#FFF7FA] border-b-2 border-red-700">
              <span>ثبت جدید سپرده</span>
              {/* <button className="w-[90px] h-[32px] bg-primary text-[#ffff] rounded-md"></button> */}
              <Button onClick={toggleForm} >
                مخفی
              </Button>
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
                  <label>جنسیت *</label>
                  <select className="h-[45px] w-full border border-gray-300">
                    <option>آقا</option>
                    <option>خانم</option>
                  </select>
                </div>
              </div>

              {/* تکراری ولی نگه‌داشتم برای تطابق با کد شما */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label>ایمیل  *</label>
                  <div className="flex">
                    <div className="w-[56px] h-[46px] flex items-center justify-center bg-[#F0F2F8] text-sm">IRR</div>
                    <input className="h-[45px] w-full rounded-l-none border border-gray-300" />
                  </div>
                </div>
                <div>
                  <label>
                    نام کاربری  *</label>
                  <div className="flex">
                    <div className="w-[56px] h-[46px] flex items-center justify-center bg-[#F0F2F8] text-sm">IRR</div>
                    <input className="h-[45px] w-full rounded-l-none border border-gray-300" />
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                {/* <button className="w-[90px] h-[40px] rounded-md bg-green-300"></button> */}
                <Button>
                  بازنشانی
                </Button>
                {/* <button className="w-[90px] h-[40px] rounded-md bg-green-300">ذخیره</button> */}
                {/* <Button {...namesaved} /> */}
                <Button>
                  دخیره
                </Button>
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
                <input type="file" accept="image/*" className="w-[100%] text-sm" />
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
          {/* <button className="w-[90px] h-[32px] bg-green-300 rounded-md hover:bg-blue-700 transition"></button> */}
          <Button onClick={toggleForm}>
            جدید
          </Button>
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
