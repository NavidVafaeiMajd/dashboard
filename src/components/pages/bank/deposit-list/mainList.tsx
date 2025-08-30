import { HiCalendarDateRange } from "react-icons/hi2";
import { useBankColumns } from "../AccountBank/columns";
import { DataTable } from "@/components/shared/data-table";
import { BANK_ACCOUNTS } from "../AccountBank/const";
// import { Form } from "@/components/ui/form";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import CuDatePicker from "@/components/shared/DatePicker";
import { ImageUploadInput } from "@/components/shared/ImageUploadInput";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/shared/Form";
// import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
// import { Button } from "@/components/ui/button";

export default function MainList() {
    const formSchema = z.object({
        image: z.string().min(1, "لطفا یک عکس آپلود کنید"),
    });
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState<Date | null>(null);
    const { columns, modal } = useBankColumns();
    let changeVisibility = () => {
        setOpen(prev => !prev)
    }

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

        <div className="flex flex-col gap-6 px-4">
            {/* Top Section */}
            {open &&
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Form Section */}
                    <div className="w-full lg:w-2/3 bg-[#F9F9FB] shadow-2xl rounded-md overflow-hidden">
                        <div className="flex items-center justify-between p-4 bg-[#FFF7FA] border-b-2 border-red-700">
                            <span>ثبت جدید هزینه ها</span>
                            <Button onClick={changeVisibility}>
                                مخفی
                            </Button>
                        </div>

                        <div className="p-4">
                            <Form
                                formProp={form}
                                accordion
                                accordionTitle=""
                                onSubmit={onSubmit}
                                className="flex flex-col gap-5"
                            >
                                <div className="flex flex-col gap-10">
                                    {/* Row 1 */}
                                    <div className="flex flex-col md:flex-row md:justify-between gap-4">
                                        <div className="flex flex-col gap-2 w-full md:w-1/2">
                                            {/* <span>شماره حساب *</span> */}
                                            <div className="flex items-centerw-full">
                                                {/* <div className="w-[56px] h-[46px] flex justify-center items-center bg-[#F0F2F8] text-sm">
                                                    IRR
                                                </div> */}
                                                {/* <input className="h-[45px] w-full border rounded-l-none" /> */}
                                                <Form.Input
                                                    label="شماره حساب "
                                                    name="infoTecher"
                                                    placeholder="  شماره حساب  "
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2 w-full md:w-1/2">
                                            <Form.Select
                                                label="نوع حساب بانکی "
                                                name="gender"
                                                placeholder=" نوع حساب بانکی "
                                                required
                                            >
                                                <Form.SelectItem value="1">231</Form.SelectItem>
                                                <Form.SelectItem value="2">231</Form.SelectItem>
                                            </Form.Select>

                                        </div>
                                    </div>

                                    {/* Row 2 */}
                                    <div className="flex flex-col md:flex-row md:justify-between gap-4">
                                        <div className="flex flex-col gap-2 w-full md:w-1/2">
                                            {/* <span>تاریخ افتتاح *</span> */}
                                            <div className="flex items-end w-full">
                                                <div className="w-[56px] h-[46px] flex justify-center items-center bg-[#F0F2F8] text-sm">
                                                    <HiCalendarDateRange className="w-[19px] h-[19px]" />
                                                </div>
                                                <Form.Date
                                                    label="تاریخ افتتاح "
                                                    name="gender"
                                                />
                                                {/* <CuDatePicker
                                                    value={date}
                                                    onChange={setDate}
                                                    placeholder="تاریخ افتتاح   "
                                                /> */}
                                                {/* <input className="h-[45px] w-full border rounded-l-none" /> */}
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2 w-full md:w-1/2">
                                          
                                              <Form.Select
                                                label=" دسته‌بندی  "
                                                name="gender"
                                                placeholder=" دسته‌بندی   "
                                                required
                                            >
                                                <Form.SelectItem value="1">IT</Form.SelectItem>
                                                <Form.SelectItem value="2">IT</Form.SelectItem>
                                            </Form.Select>
                                        </div>
                                    </div>

                                    {/* Row 3 */}
                                    <div className="flex flex-col lg:flex-row justify-between gap-4">
                                        <div className="w-full lg:w-1/3 flex flex-col gap-2">
                                            <span>دریافت کننده وجه *</span>
                                            <select className="h-[45px] border rounded">
                                                <option value="">Akbar</option>
                                                <option value="">Amir</option>
                                            </select>
                                        </div>
                                        <div className="w-full lg:w-1/3 flex flex-col gap-2">
                                            <span>  روش پرداخت *</span>
                                            <select className="h-[45px] border rounded">
                                                <option value="">PayPal</option>
                                                <option value="">Cash</option>
                                                <option value="">Bank</option>
                                                <option value="">Strip</option>
                                                <option value="">Paystack</option>
                                            </select>
                                        </div>
                                        <div className="w-full lg:w-1/3 flex flex-col gap-2">
                                            <span>مرجع *</span>
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
                                        <Button>
                                            بازنشانی
                                        </Button>
                                        <Button>
                                            ذخیره
                                        </Button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>


                    <div className="w-[29%] bg-[#F9F9FB] rounded-md overflow-hidden">
                        <div className="flex items-center justify-between p-4 bg-[#FFF7FA] border-b-2 border-red-700">
                            <span>پیوست فایل</span>
                        </div>
                        <div className="p-6 flex flex-col gap-4">
                            {/*                             
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                    <FormField
                                        control={form.control}
                                        name="image"
                                        render={({ field }) => <ImageUploadInput field={field} />}
                                    />
                                    <Form.Image 
                                    
                                    />
                                    <Button type="submit">ذخیره</Button>
                                </form>
                            </Form> */}


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
