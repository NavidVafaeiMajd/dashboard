import { useEffect } from "react";
import { GoPlus } from "react-icons/go";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const StaffList = () => {
    const title = "پرسنل";
    useEffect(() => {
    document.title = title;
  }, []);

    return (
        <>
            <div className="card bg-[#FFF7FA] ">
                <div className="flex justify-between p-2 px-5 border-b-2 border-red-500 items-center">
                    <h2>لیست همه سطح دسترسی ها</h2>
                    <button className="flex bg-greenDark text-white items-center p-2 gap-2 rounded-sm cursor-pointer">
                        <GoPlus className="w-5 h-5" />
                        ثبت جدید
                    </button>
                </div>
                <div className="py-5 p-10">
                    <div>
                        <div className="grid grid-cols-2 items-center justify-center">
                            <div>
                                <label>
                                    نمایش ورودی های
                                    <select name="table-lenght" id="table-lenght" className="border-1 bg-white border-black/10 p-2 py-1 rounded-sm m-1 cursor-pointer">
                                        <option value="10">10</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                    </select>
                                </label>
                            </div>
                            <div>
                                <label>
                                    جستجو
                                    <input type="search" className="bg-white rounded-sm border-dashed border-1 border-black/10 focus:border-1! h-10 p-2 mr-3 focus:border-cupurple focus:outline-none!"/>
                                </label>
                            </div>
                        </div>

                        <div className="bg-blue-50 my-5 rounded-sm p-2" >
                            <div className="bg-white h-full! w-full">
                                <table className="w-full">
                                    <thead className=" ">
                                        <tr className="bg-[#F9FBE4] border-spacing-1 text-right border-b-3 border-[#DBDBDB]">
                                            <th >نام</th>
                                            <th> سمت سازمانی </th>
                                            <th> شماره تماس </th> 
                                            <th> جنسیت </th>
                                            <th> کشور </th>
                                            <th> سطح دسترسی </th>
                                            <th> وضعیت</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="py-4 relative flex ">
                                                gbgfdfgbfdhbgxb
                                                <div className="overlay-edit absolute w-full h-full top-0 right-0 bg-white flex justify-center items-center gap-3"> 
                                                    <FaArrowRightLong className="w-10 h-10 bg-greenDark text-blue-600 hover:text-white p-3 rounded-sm cursor-pointer" />
                                                    <FaRegTrashAlt  className="w-10 h-10 bg-greenDark text-red-600 hover:text-white p-3 rounded-sm cursor-pointer"/>
                                                </div>
                                            </td>
                                            <td>fgdf</td>
                                            <td>fdgfdgfgff</td>
                                            <td>hgfhgfb</td>
                                            <td>fdcvf</td>
                                            <td>gfdgffhgfhgfhnbghb</td>
                                            <td>gdffgbfg</td>
                                        </tr>
                                                                                <tr>
                                            <td className="py-4 relative flex ">
                                                gbgfdfgbfdhbgxb
                                                <div className="overlay-edit absolute w-full h-full top-0 right-0 bg-white flex justify-center items-center gap-3"> 
                                                    <FaArrowRightLong className="w-10 h-10 bg-greenDark text-blue-600 hover:text-white p-3 rounded-sm cursor-pointer" />
                                                    <FaRegTrashAlt  className="w-10 h-10 bg-greenDark text-red-600 hover:text-white p-3 rounded-sm cursor-pointer"/>
                                                </div>
                                            </td>
                                            <td>fgdf</td>
                                            <td>fdgfdgfgff</td>
                                            <td>hgfhgfb</td>
                                            <td>fdcvf</td>
                                            <td>gfdgffhgfhgfhnbghb</td>
                                            <td>gdffgbfg</td>
                                        </tr>
                                                                                <tr>
                                            <td className="py-4">gbgfdfgbfdhbgxb</td>
                                            <td>fgdf</td>
                                            <td>fdgfdgfgff</td>
                                            <td>hgfhgfb</td>
                                            <td>fdcvf</td>
                                            <td>gfdgffhgfhgfhnbghb</td>
                                            <td>gdffgbfg</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div>
                            <div>
                                نمایش <span>1</span> تا <span>2</span> از <span>2</span> رکورد
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default StaffList;