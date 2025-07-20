import { FaMinus } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa";

interface Props {
    accordion: boolean,
    setAccordion : React.Dispatch<React.SetStateAction<boolean>>
}
const Form = ({ accordion , setAccordion} : Props) => {
    const [fileName, setFileName] = useState(" انتخاب فایل...")
    
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files;
        if (file && file.length > 0) {
            setFileName(file[0].name);
        } else {
            setFileName("انتخاب فایل ...");
        }
    }
    return (
        <>
                        <div className={`accordion  ${accordion? " mb-10 show": "h-0 hidden"}`}>
                <div className="">
                    <form action="" className="grid md:grid-cols-6 gap-5  h-full">
                        <div className="col-span-4 shadow-md bg-bgBack">
                            <div className="flex justify-between items-center py-2 px-5 border-b-2 border-red-500 min-h-13">
                                <h2>ثبت جدید کارمند</h2>
                                <button onClick={(e) => { setAccordion(!accordion); e.preventDefault() }} className="cart-header-btn flex bg-greenDark text-white items-center py-1 px-2 gap-2 rounded-sm cursor-pointer">
                                    <FaMinus className="w-5 h-5" />
                                    مخفی
                                </button>
                            </div> 
                            <div className="p-5 flex flex-col gap-5">
                                <div className="grid md:grid-cols-2 gap-10">
                                    <div>
                                        <label htmlFor="">نام 
                                            <span className="text-red-500">*</span>
                                            <div className="flex my-2">
                                                <FaUser className="bg-[#F0F2F8] text-[#495057] p-4 h-13 w-13"/>
                                                <input type="text" className="w-full" placeholder="نام"/>
                                            </div>
                                        </label>
                                    </div>
                                    <div>
                                        <label htmlFor="">نام خانوداگی
                                            <span className="text-red-500">*</span>
                                            <div className="flex my-2">
                                                <FaUser className="bg-[#F0F2F8] text-[#495057] p-4 h-13 w-13"/>
                                                <input type="text" className="w-full" placeholder="نام خانوداگی" />
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-3 gap-10">
                                    <div>
                                        <label htmlFor="">کد پرسنلی
                                            <span className="text-red-500">*</span>
                                            <div className="flex my-2">
                                                <input type="text" className="w-full" placeholder="کد پرسنلی" />
                                            </div>
                                        </label>
                                    </div>
                                    <div>
                                        <label htmlFor="">شماره تماس
                                            <span className="text-red-500">*</span>
                                            <div className="flex my-2">
                                                <input type="text" className="w-full" placeholder="شماره تماس" />
                                            </div>
                                        </label>
                                    </div>
                                    <div>
                                        <label htmlFor="">
                                            جنسیت 
                                            <select name="" id="" className="">
                                                <option value="">اقا</option>
                                                <option value="hh">خانم</option>
                                            </select>
                                        </label>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-10">
                                    <div>
                                        <label htmlFor="">ایمیل
                                            <span className="text-red-500">*</span>
                                            <div className="flex my-2">
                                                <MdEmail className="bg-[#F0F2F8] text-[#495057] p-4 h-13 w-13"/>
                                                <input type="text" className="w-full" placeholder="ایمیل" />
                                            </div>
                                        </label>
                                    </div>
                                    <div>
                                        <label htmlFor="">نام کاربری
                                            <span className="text-red-500">*</span>
                                            <div className="flex my-2">
                                                <FaUser className="bg-[#F0F2F8] text-[#495057] p-4 h-13 w-13"/>
                                                <input type="text" className="w-full" placeholder="نام کاربری" />
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-3 gap-10">
                                    <div>
                                        <label htmlFor="">رمز عبور
                                            <span className="text-red-500">*</span>
                                            <div className="flex my-2">
                                                <FaEyeSlash className="bg-[#F0F2F8] text-[#495057] p-4 h-13 w-13"/>
                                                <input type="text" className="w-full" placeholder="رمز عبور" />
                                            </div>
                                        </label>
                                    </div>
                                  <div>
                                        <label htmlFor="">
                                            شیفت اداره 
                                            <select name="" id="" className="">
                                                <option value="">اداری</option>
                                                <option value="hh">ستادی</option>
                                            </select>
                                        </label>
                                    </div>
                                    <div>
                                        <label htmlFor="">
                                            سطح دسترسی 
                                            <select name="" id="" className="">
                                                <option value="">مدیر</option>
                                                <option value="hh">کارمند</option>
                                            </select>
                                        </label>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-10">
                                  <div>
                                        <label htmlFor="">
                                            واحد سازمانی 
                                            <select name="" id="" className="">
                                                <option value="">فناوری اطلاعات</option>
                                                <option value="hh">مالی و اقتصادی</option>
                                            </select>
                                        </label>
                                    </div>
                                    <div>
                                        <label htmlFor="">
                                            سمت سازمانی 
                                            <select name="" id="" className="">
                                                <option value="">اقا</option>
                                                <option value="hh">خانم</option>
                                            </select>
                                        </label>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-3 gap-10">
                                    <div>
                                        <label htmlFor="">دستمزد ماهیانه 
                                            <span className="text-red-500">*</span>
                                            <div className="flex my-2">
                                                <input type="text" className="w-full" placeholder="دستمزد ماهیانه " />
                                            </div>
                                        </label>
                                    </div>
                                    <div>
                                        <label htmlFor="">دستمزد روزانه 
                                            <span className="text-red-500">*</span>
                                            <div className="flex my-2">
                                                <input type="text" className="w-full" placeholder="دستمزد روزانه " />
                                            </div>
                                        </label>
                                    </div>
                                    <div>
                                        <label htmlFor="">
                                            نوع فیش حقوقی 
                                            <select name="" id="" className="">
                                                <option value="">هر ماه</option>
                                            </select>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="border-t-1 border-border bg-white p-5 flex gap-3">
                                <button type="reset">بازنشانی</button>
                                <button type="submit">ذخیره</button>
                            </div>
                        </div>
                        <div className="col-span-2 max-h-max shadow-md bg-bgBack">
                            <div className="flex justify-between items-center py-2 px-5 border-b-2 border-red-500 min-h-13!" >
                                <h2>تصویر پروفایل</h2>
                            </div>
                            <div className="py-2 px-5 ">
                                <div className="">
                                    <div>
                                        <label htmlFor="fileInput">
                                            تصویر پروفایل 
                                            <span className="text-red-500">*</span>
                                        </label>
                                    </div>
                                    <label htmlFor="fileInput" className="file-input my-3 cursor-pointer flex items-center gap-2 rounded-sm overflow-hidden border-1 border-border">
                                        {fileName}
                                    </label>
                                    <input id="fileInput" className="hidden " onChange={handleFileChange} type="file" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
 
export default Form;