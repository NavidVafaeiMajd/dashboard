import { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

interface User {
    id: number;
    role: string;
    permission: string;
    date: string;
};
    
const Table: React.FC = () => {
    
    const [data, setData] = useState<User[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage , setItemsPerPage] = useState<number>(10)
    const [searchTerm, setSearchTerm] = useState<string>("")

        const handleDelete = async (id: number) => {
        try {
            setData(prev => prev.filter(user => user.id !== id));
        } catch (error) {
            console.error("Error deleting user:", error);
        }
        };

    const tableHead = ["نام سطح دسترسی", " مجوز منو ", "تاریخ ایجاد"]
    
    useEffect(() => {
        const fetchData = async () => {
            const response: User[] = [
                {
                    id: 1,
                    role: "اداری",
                    permission: "دسترسی به منو سفارشی",
                    date: "1400-12-10"
                },
                {
                    id: 2,
                    role: "تست",
                    permission: "دسترسی به منو سفارشی",
                    date: "1400-12-10"
                },
                {
                    id: 3,
                    role: "دسترسی عمومی کارکنان",
                    permission: "دسترسی به منو سفارشی",
                    date: "1403-6-29"
                },
            ];

            setData(response);
        };
        fetchData();
    }, []);

    const filteredData = data.filter((item) =>
        item.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    return (
        <>
                <div className="py-5 p-2 md:p-10">
                    <div>
                        <div className="grid md:grid-cols-2 items-center justify-center">
                            <div>
                                <label>
                                    نمایش ورودی های
                                    <select value={itemsPerPage} onChange={(e)=>{ setItemsPerPage(Number(e.target.value));setCurrentPage(1);}} name="table-lenght" id="table-lenght" className="border-1 bg-white border-black/10 p-2! py-1! outline-none! rounded-sm m-1 cursor-pointer w-auto!">
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
                                        <tr className="bg-[#F9FBE4] w-full border-spacing-1 text-right border-b-3 border-border">
                                        {tableHead.map((item , index) => (
                                            <th key={index}>{ item}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        {currentItems.map((item) => (
                                            <tr key={item.id}>
                                                <td className="py-4 relative flex ">
                                                        {item.role}
                                                        <div className="overlay-edit absolute w-full h-full top-0 right-0 bg-[#FCFBFF] flex justify-center items-center gap-3"> 
                                                            <FaArrowRightLong className="w-10 h-10 bg-greenDark text-blue-600 hover:text-white p-3 rounded-sm cursor-pointer" />
                                                            <FaRegTrashAlt onClick={()=> handleDelete(item.id)} className="w-10 h-10 bg-greenDark text-red-600 hover:text-white p-3 rounded-sm cursor-pointer"/>
                                                        </div>
                                                    </td>
                                                    <td>{item.permission}</td>
                                                    <td>{item.date}</td>
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
        </>
    );
}
 
export default Table;