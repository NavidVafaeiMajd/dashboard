import { useBankColumns } from "./column";
import { DataTable } from "@/components/shared/data-table";
import { BANK_ACCOUNTS } from "./const";
import { useState } from "react";
import { Form } from "@/components/shared/Form";
import type z from "zod";
import { validation } from "./validation";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function LearningPage() {
  const [open, setOpen] = useState(false);
  const { columns, modal } = useBankColumns();


  const form = useForm<z.infer<typeof validation>>({
    resolver: zodResolver(validation),
    defaultValues: {
      techerLearning: "",
      skillsLearn: "",
      priceLearning: "",
      personel: "",
      statrtEntry: "1",     
      exitEntry: "2",    
      text: "IR",   
    },
  });

  const onSubmit = (data: z.infer<typeof validation>) => {
    console.log(data);
  };
  return (
    <div className="flex flex-col  px-4">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Form Section */}
        {open &&
          <>
            <div className="w-full  bg-[#F9F9FB] shadow-2xl rounded-md">

              <div className="flex items-center justify-between p-4 bg-[#FFF7FA] border-b-2 border-red-700">
                <span>ثبت جدید سپرده</span>
                <button
                  onClick={() => setOpen(!open)}
                  className="w-[90px] h-[32px] rounded text-[#ffff] bg-greenDark"
                >
                  {open ? "مخفی" : "ثبت جدید"}
                </button>
              </div>

              <div className="p-4">
                <Form
                  formProp={form}
                  accordion
                  accordionTitle=""
                  onSubmit={onSubmit}
                  className="flex flex-col gap-5"
                >
                  <div className="flex gap-5">
                    <Form.Select
                      label="مشخصات مدرس "
                      name="infoTecher"
                      placeholder=" مشخصات مدرس "
                      required
                    >
                      <Form.SelectItem value="1">تست 1</Form.SelectItem>
                      <Form.SelectItem value="2">تست 2</Form.SelectItem>
                    </Form.Select>

                    <Form.Select
                      label="مهارت آموزشی "
                      name="skillslearn"
                      placeholder="مهارت آموزشی "
                      required
                    >
                      <Form.SelectItem value="1">fronten 1</Form.SelectItem>
                      <Form.SelectItem value="2">backend 2</Form.SelectItem>
                    </Form.Select>

                    <Form.Input
                      label=" هزینه آموزش"
                      name="priceLearn"
                      placeholder=" هزینه آموزش"
                      required
                    />
                  </div>
                  <div className="flex gap-5">

                    <Form.Select
                      label="پرسنل"
                      name="status"
                      placeholder=" پرسنل"
                      required
                    >
                      <Form.SelectItem value="1">اکبر</Form.SelectItem>
                      <Form.SelectItem value="2">رضا</Form.SelectItem>
                    </Form.Select>
                    <Form.Date
                      label="تاریخ شروع"
                      name="entry-time"
                    />
                    <Form.Date
                      label="تاریخ پایان"
                      name="exit-time"
                    />
                  </div>
                  <div className="flex gap-5">
                    <Form.RichText
                      label="شرح"
                      name="text"
                      required
                    />

                  </div>

                  <div className="flex gap-x-2 mt-5">
                    <Button>دخیره </Button>
                    <Button>بازنشانی</Button>
                  </div>
                </Form>
              </div>

            </div>


          </>
        }
      </div>

      {/* DataTable Section */}
      <div className="bg-white rounded shadow mt-4">
        <div className="w-[100%]  bg-[#F9F9FB]  rounded-md overflow-hidden">
          <div className="flex items-center justify-between p-3 w-[100%] bg-[#FFF7FA] border-b-2 border-red-700">
            <span>لیست همه سپرده ها</span>
            <div className="flex flex-wrap gap-4 ">
              <button onClick={() => setOpen(!open)} className="w-[90px] h-[32px] rounded text-[#ffff]  bg-greenDark">  {open ? "مخفی" : "ثیت جدید"}</button>
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
