import { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import Table from "./Table";
import { FaMinus } from "react-icons/fa6";

    
const StaffList: React.FC = () => {
    const title = "پرسنل";
    useEffect(() => {
    document.title = title;
    }, []);

    const [accordion, setAccordion] = useState(false);
    const [fileName, setFileName] = useState(" انتخاب فایل...")
    
    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        } else {
            setFileName("انتخاب فایل ...");
        }
    }

    return (
        <>
            <div className={`accordion  ${accordion? "h-200 mb-10 show": "h-0 hidden"}`}>
                <div className="h-full">
                    <form action="" className="grid grid-cols-6 gap-5  h-full">
                        <div className="col-span-4 shadow-md bg-bgBack">
                            <div className="flex justify-between items-center py-2 px-5 border-b-2 border-red-500 min-h-13">
                                <h2>ثبت جدید کارمند</h2>
                                <button onClick={(e) => { setAccordion(!accordion); e.preventDefault() }} className="cart-header-btn flex bg-greenDark text-white items-center py-1 px-2 gap-2 rounded-sm cursor-pointer">
                                    <FaMinus className="w-5 h-5" />
                                    مخفی
                                </button>
                            </div> 
                        </div>
                        <div className="col-span-2 shadow-md bg-bgBack">
                            <div className="flex justify-between items-center py-2 px-5 border-b-2 border-red-500 min-h-13!" >
                                <h2>تصویر پروفایل</h2>
                            </div>
                            <div className="py-2 px-5 ">
                                <div className="">
                                    <label htmlFor="fileInput" className="file-input cursor-pointer flex items-center gap-2 rounded-sm overflow-hidden border-1 border-border">
                                        {fileName}
                                    </label>
                                    <input id="fileInput" className="hidden " onChange={handleFileChange} type="file" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="card bg-bgBack ">
                <div className="flex justify-between p-2 px-5 border-b-2 border-red-500 items-center">
                    <h2>لیست همه سطح دسترسی ها</h2>
                    <button onClick={()=>setAccordion(!accordion)} className="cart-header-btn flex bg-greenDark text-white items-center p-2 gap-2 rounded-sm cursor-pointer">
                        <GoPlus className="w-5 h-5" />
                        ثبت جدید
                    </button>
                </div>
                <div>
                    <Table/>
                </div>
            </div>
        </>
    );
}
 
export default StaffList;