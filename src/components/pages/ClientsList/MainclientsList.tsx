import  { useState } from 'react'
import { DataTable } from '@/components/shared/data-table'
import { BANK_ACCOUNTS } from './const'
import { columns } from './columns'
import { Button } from '@/components/ui/button'
import { ImageUploadInput } from "@/components/shared/ImageUploadInput";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField } from "@/components/ui/form";


export default function MainclientsList() {

  const [isOpen, setOpen] = useState(false)
  const toggleForm = () => setOpen(!isOpen)
  const formSchema = z.object({
    image: z.string().min(1, "لطفا یک عکس آپلود کنید"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      image: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="flex flex-col gap-10 px-4 py-6">
      {isOpen && (
        <div className="flex flex-col lg:flex-row gap-6 w-full">
          {/* فرم اطلاعات */}
          <div className="w-full lg:w-2/3 bg-[#F9F9FB] shadow-2xl rounded-md">
            <div className="flex items-center justify-between p-4 bg-[#FFF7FA] border-b-2 border-red-700">
              <span>ثبت جدید مشتری</span>
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
          <div className="w-[29%] bg-[#F9F9FB] rounded-md overflow-hidden">
            <div className="flex items-center justify-between p-4 bg-[#FFF7FA] border-b-2 border-red-700">
              <span>پیوست فایل</span>
            </div>
            <div className="p-6 flex flex-col gap-4">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => <ImageUploadInput field={field} />}
                  />

                  <Button type="submit">ذخیره</Button>
                </form>
              </Form>

            </div>
          </div>
        </div>
      )}

      {/* لیست معامله‌ها */}
      <div className="w-full bg-[#F9F9FB] shadow-2xl rounded-md">
        <div className="flex justify-between items-center p-4 bg-[#FFF7FA] border-b-2 border-[#FF3A86]">
          <span className="text-[17px]">لیست همه ارباب رجوع </span>
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
