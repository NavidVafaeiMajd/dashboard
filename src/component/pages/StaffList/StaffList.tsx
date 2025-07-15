import { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

    type User = {
    id: number;
    name: string;
    position: string;
    phone: string;
    gender: "male" | "female";
    country: string;
    accessLevel: "admin" | "user" | "guest";
    status: "active" | "inactive" | "pending";
};
    
const StaffList: React.FC = () => {
    const title = "پرسنل";
    useEffect(() => {
    document.title = title;
    }, []);
    
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage , setItemsPerPage] = useState(10)
    const [searchTerm, setSearchTerm] = useState("")



    useEffect(() => {
        const fetchData = async () => {
        const response: User[] = [
        { id: 1, name: "Navid Karimi", position: "مدیر فروش", phone: "+98 912 123 4567", gender: "male", country: "Iran", accessLevel: "admin", status: "active" },
        { id: 2, name: "Sara Ahmadi", position: "کارشناس پشتیبانی", phone: "+98 935 987 6543", gender: "female", country: "Iran", accessLevel: "user", status: "inactive" },
        { id: 3, name: "John Doe", position: "توسعه‌دهنده", phone: "+1 202 555 0123", gender: "male", country: "USA", accessLevel: "user", status: "active" },
        { id: 4, name: "Emma Brown", position: "مدیر محصول", phone: "+44 20 7946 0958", gender: "female", country: "UK", accessLevel: "admin", status: "pending" },
        { id: 5, name: "Ali Rezaei", position: "تحلیل‌گر داده", phone: "+98 912 555 7788", gender: "male", country: "Iran", accessLevel: "guest", status: "active" },
        { id: 6, name: "Fatemeh Mohammadi", position: "طراح رابط کاربری", phone: "+98 911 223 3344", gender: "female", country: "Iran", accessLevel: "user", status: "active" },
        { id: 7, name: "Michael Smith", position: "مدیر بازاریابی", phone: "+1 303 555 0199", gender: "male", country: "USA", accessLevel: "admin", status: "inactive" },
        { id: 8, name: "Leila Jafari", position: "توسعه‌دهنده بک‌اند", phone: "+98 937 456 7890", gender: "female", country: "Iran", accessLevel: "user", status: "active" },
        { id: 9, name: "David Johnson", position: "توسعه‌دهنده فرانت‌اند", phone: "+1 415 555 0133", gender: "male", country: "USA", accessLevel: "user", status: "pending" },
        { id: 10, name: "Maryam Shiri", position: "تحلیل‌گر کسب‌وکار", phone: "+98 935 678 9012", gender: "female", country: "Iran", accessLevel: "guest", status: "active" },
        { id: 11, name: "James Williams", position: "کارشناس سئو", phone: "+44 20 7946 2222", gender: "male", country: "UK", accessLevel: "user", status: "active" },
        { id: 12, name: "Parisa Ghasemi", position: "پشتیبانی مشتری", phone: "+98 936 789 0123", gender: "female", country: "Iran", accessLevel: "user", status: "inactive" },
        { id: 13, name: "Robert Wilson", position: "مدیر فنی", phone: "+1 212 555 0177", gender: "male", country: "USA", accessLevel: "admin", status: "active" },
        { id: 14, name: "Hanieh Kazemi", position: "کارشناس محتوا", phone: "+98 933 654 3210", gender: "female", country: "Iran", accessLevel: "user", status: "pending" },
        { id: 15, name: "Chris Lee", position: "طراح گرافیک", phone: "+44 20 7946 3333", gender: "male", country: "UK", accessLevel: "guest", status: "active" },
        ];
            setData(response);
        };
        fetchData();
    }, []);

    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

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
                                    <select value={itemsPerPage} onChange={(e)=>{ setItemsPerPage(Number(e.target.value));setCurrentPage(1);}} name="table-lenght" id="table-lenght" className="border-1 bg-white border-black/10 p-2 py-1 rounded-sm m-1 cursor-pointer">
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
                                    <input type="text" value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value)}} className="bg-white rounded-sm border-dashed border-1 border-black/10 focus:border-1! h-10 p-2 mr-3 focus:border-cupurple focus:outline-none!" />
                                </label>
                            </div>
                        </div>

                        <div className="bg-blue-50 my-5 rounded-sm p-2 overflow-auto w-full" >
                            <div className="bg-white h-full! w-full">
                                <table className="w-full">
                                    <thead className=" ">
                                        <tr className="bg-[#F9FBE4] w-full border-spacing-1 text-right border-b-3 border-[#DBDBDB]">
                                            <th >نام</th>
                                            <th> سمت سازمانی </th>
                                            <th> شماره تماس </th> 
                                            <th> جنسیت </th>
                                            <th> کشور </th>
                                            <th> سطح دسترسی </th>
                                            <th> وضعیت</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        {currentItems.map((item) => (
                                            <tr key={item.id}>
                                                <td className="py-4 relative flex ">
                                                        {item.name}
                                                        <div className="overlay-edit absolute w-full h-full top-0 right-0 bg-white flex justify-center items-center gap-3"> 
                                                            <FaArrowRightLong className="w-10 h-10 bg-greenDark text-blue-600 hover:text-white p-3 rounded-sm cursor-pointer" />
                                                            <FaRegTrashAlt  className="w-10 h-10 bg-greenDark text-red-600 hover:text-white p-3 rounded-sm cursor-pointer"/>
                                                        </div>
                                                    </td>
                                                    <td>{item.position}</td>
                                                    <td>{item.phone}</td>
                                                    <td>{item.gender}</td>
                                                    <td>{item.country}</td>
                                                    <td>{item.accessLevel}</td>
                                                    <td>{ item.status }</td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <div>
                                نمایش <span>{indexOfFirstItem + 1}</span> تا <span>{ indexOfLastItem}</span> از <span>{filteredData.length}</span> رکورد
                            </div>
                            <div>
                                <button className="p-2 border-1 border-black/10 rounded-tr-sm rounded-br- bg-white" disabled={currentPage === 1} onClick={() => { setCurrentPage((Prev) => Math.max(Prev - 1, 1)) }}>قبلی</button>
                                {
                                    Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                        <button className={`p-2 border-1 border-black/10 px-4 bg-white ${currentPage === page ? "bg-cupurple! text-white " : ""}`} key={page} onClick={() => setCurrentPage(page)}> { page}</button>                                       
                                    ))
                                }
                                <button className="p-2 border-1 border-black/10 rounded-tl-sm rounded-bl-sm bg-white" disabled={currentPage===totalPages} onClick={()=>{setCurrentPage((Prev)=>Math.min(Prev +1 , totalPages))}} >بعدی</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default StaffList;