import { FaMinus } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

interface Props {
    accordion: boolean,
    setAccordion : React.Dispatch<React.SetStateAction<boolean>>
}
const Form = ({ accordion , setAccordion} : Props) => {

    return (
        <>
                        <div className={`accordion  ${accordion? " mb-10 show": "h-0 hidden"}`}>
                <div className="">
                    <form action="" className="gap-5 h-full">
                        <div className="col-span-4 shadow-md bg-bgBack">
                            <div className="flex justify-between items-center py-2 px-5 border-b-2 border-red-500 min-h-13">
                                <h2> ثبت جدید سطح دسترسی </h2>
                                <button onClick={(e) => { setAccordion(!accordion); e.preventDefault() }} className="cart-header-btn flex bg-greenDark text-white items-center py-1 px-2 gap-2 rounded-sm cursor-pointer">
                                    <FaMinus className="w-5 h-5" />
                                    مخفی
                                </button>
                            </div> 
                            <div className="p-5 flex flex-col gap-5">
                                <div className="grid grid-cols-2 gap-10">
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
                                        <label htmlFor="">نام
                                            <span className="text-red-500">*</span>
                                            <div className="flex my-2">
                                                <FaUser className="bg-[#F0F2F8] text-[#495057] p-4 h-13 w-13"/>
                                                <input type="text" className="w-full" placeholder="نام خانوداگی" />
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-10">
                                    <div>
                                        <label htmlFor="">نام
                                            <span className="text-red-500">*</span>
                                            <div className="flex my-2">
                                                <input type="text" className="w-full" placeholder="نام خانوداگی" />
                                            </div>
                                        </label>
                                    </div>
                                    <div>
                                        <label htmlFor="">نام
                                            <span className="text-red-500">*</span>
                                            <div className="flex my-2">
                                                <input type="text" className="w-full" placeholder="نام خانوداگی" />
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
                                <div className="grid grid-cols-2 gap-10">
                                    <div>
                                        <label htmlFor="">ایمیل
                                            <span className="text-red-500">*</span>
                                            <div className="flex my-2">
                                                <input type="text" className="w-full" placeholder="نام خانوداگی" />
                                            </div>
                                        </label>
                                    </div>
                                    <div>
                                        <label htmlFor="">نام کاربری
                                            <span className="text-red-500">*</span>
                                            <div className="flex my-2">
                                                <input type="text" className="w-full" placeholder="نام خانوداگی" />
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-10">
                                    <div>
                                        <label htmlFor="">نام
                                            <span className="text-red-500">*</span>
                                            <div className="flex my-2">
                                                <input type="text" className="w-full" placeholder="نام خانوداگی" />
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
                                <div className="grid grid-cols-2 gap-10">
                                  <div>
                                        <label htmlFor="">
                                            جنسیت 
                                            <select name="" id="" className="">
                                                <option value="">اقا</option>
                                                <option value="hh">خانم</option>
                                            </select>
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
                                <div className="grid grid-cols-3 gap-10">
                                    <div>
                                        <label htmlFor="">نام
                                            <span className="text-red-500">*</span>
                                            <div className="flex my-2">
                                                <input type="text" className="w-full" placeholder="نام خانوداگی" />
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
                            </div>
                            <div className="border-t-1 border-border bg-white p-5 flex gap-3">
                                <button type="reset">بازنشانی</button>
                                <button type="submit">ذخیره</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
 
export default Form;