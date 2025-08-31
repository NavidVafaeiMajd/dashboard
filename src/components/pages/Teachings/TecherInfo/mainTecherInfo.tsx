import { DataTable } from "@/components/shared/data-table";
import { useState } from "react";
import { Form } from "@/components/shared/Form";
import { z } from "zod";

import { validation } from "./validation";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TecherInfoColumns } from "./column";
import { TecherInfo as TecherInfoData } from "./const";



export default function TecherInfo() {
    const [open, setOpen] = useState(false);


    const form = useForm<z.infer<typeof validation>>({
        resolver: zodResolver(validation),
        defaultValues: {
            name: "",
            lname: "",
            phone: "",
            email: "",
            skills: "",
            location: "",
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
                                <span>ثبت جدید آموزش</span>
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
                                    onSubmit={onSubmit}
                                    className="flex flex-col gap-5"
                                >
                                    <div className="w-[100%] gap-[2.5rem]  flex justify-between items-start!">
                                        <div className="flex  gap-[5px] flex-col w-[50%]">
                                            <div className="w-[100%] flex gap-[2.5rem] justify-between ">
                                                <Form.Input
                                                    label=" نام  "
                                                    name="name"
                                                    placeholder=" مشخصات مدرس "
                                                    required
                                                    className="w-[100%]"
                                                />
                                                <Form.Input
                                                    label="نام خانوادگی"
                                                    name="lname"
                                                    placeholder=" مشخصات مدرس "
                                                    required
                                                    className="w-[100%]"
                                                />
                                            </div>
                                            <div className="w-[100%] flex gap-[2.5rem] justify-between ">
                                                <Form.Input
                                                    label="شماره تماس "
                                                    name="phone"
                                                    placeholder=" مشخصات مدرس "
                                                    required
                                                    className="w-[100%]"
                                                />
                                                <Form.Input
                                                    label="ایمیل "
                                                    name="email"
                                                    placeholder=" مشخصات مدرس "
                                                    required
                                                    className="w-[100%]"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-[50%]">
                                            <Form.Textarea
                                                label="تخصص "
                                                name="skills"
                                                placeholder=" مشخصات مدرس "
                                                required
                                                textareaClassName="min-h-[130px]!"
                                                className="min-h-[50px]!"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <Form.Textarea
                                            label="نشانی"
                                            name="location"
                                            placeholder=" مشخصات مدرس "
                                            required

                                        />
                                    </div>
                                    <div className="flex gap-x-2 mt-5">
                                        <Button type="submit">دخیره </Button>
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
                        <span>لیست همه آموزش   ها</span>
                        <div className="flex flex-wrap gap-4 ">
                            <button onClick={() => setOpen(!open)} className="w-[90px] h-[32px] rounded text-[#ffff]  bg-greenDark">  {open ? "مخفی" : "ثیت جدید"}</button>
                        </div>
                    </div>
                </div>

                <DataTable
                    columns={TecherInfoColumns}  // ستون‌ها
                    data={TecherInfoData}            // داده‌ها
                    searchableKeys={["name", "lname", "skills"]}
                />


            </div>
        </div>
    );
}
