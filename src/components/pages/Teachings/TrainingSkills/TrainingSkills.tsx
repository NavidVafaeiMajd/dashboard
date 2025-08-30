import { DataTable } from "@/components/shared/data-table";
import { useState } from "react";
import { Form } from "@/components/shared/Form";
import { z } from "zod";

import { validation } from "./validation";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { columns } from "./column";
import { SKILLS_CREAT } from "./const";


export default function TraningSkills() {
  const [open, setOpen] = useState(false);


  const form = useForm<z.infer<typeof validation>>({
    resolver: zodResolver(validation),
    defaultValues: {
      skillsteching: "",
    },



  });

  const onSubmit = (data: z.infer<typeof validation>) => {
    console.log(data);
  };
  return (
    <div className="flex justify-between  px-4">
      {/* Top Section */}
      <div className="w-[30%] flex flex-col lg:flex-row gap-6">
        {/* Form Section */}

        < >
          <div className="bg-[#F9F9FB] h-fit shadow-2xl rounded-md w-[100%]">

            <div className="flex items-center justify-between p-4 bg-[#FFF7FA] border-b-2 border-red-700">
              <span>  ثبت جدید مهارت آموزشی</span>
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

                accordionTitle=""
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-5"
              >
                <div className="flex gap-5">
                  <Form.Input
                    label=" مهارت آموزشی "
                    name="skillsteching"
                    placeholder="  مهارت آموزشی "
                    required
                  />
                </div>

                <div className="flex gap-x-2 mt-5">
                  <Button>دخیره </Button>
                </div>
              </Form>
            </div>

          </div>


        </>

      </div>

      {/* DataTable Section */}
      <div className="bg-white rounded shadow w-[60%]">
        <div className="w-[100%]  bg-[#F9F9FB]  rounded-md overflow-hidden">
          <div className="flex items-center justify-between p-3 w-[100%] bg-[#FFF7FA] border-b-2 border-red-700">
            <span>   لیست همه آموزش</span>

          </div>
        </div>


        <DataTable
          columns={columns}          // آرایه ستون‌ها
          data={SKILLS_CREAT}      // داده‌ها
          searchableKeys={["skillsType", "creatDate"]} // فیلدهای موجود در داده‌ها
        />


      </div>
    </div>
  );
}
