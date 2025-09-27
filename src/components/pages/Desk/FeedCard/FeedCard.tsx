import { FaUserTie, FaUsers } from "react-icons/fa6";

const FeedCart = ({total_employees} : {total_employees : number}) => {
    return (<>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10">
                    <div className="flex gap-3 items-center rounded-sm shadow-md overflow-hidden desk-cart">
                        <div className="desk-icon"><FaUserTie className="w-10 h-10  bg-[#58B368] text-white! hover:bg-green-200 hover:text-[#24C96F]! transition ease-in-out box-content p-7" /></div>
                        <div className="flex flex-col gap-3 ">
                            <span>{total_employees}</span>
                            <span className="text-[#58B368]">مجموع کارمندان</span>
                        </div>
                    </div>          
                    <div className="flex gap-3 items-center rounded-sm shadow-md overflow-hidden desk-cart">
                        <div className="desk-icon"><FaUsers className="w-10 h-10  bg-[#FF6680] text-white! hover:bg-[#F5C5C6] hover:text-[#FF6680]! transition ease-in-out box-content p-7" /></div>
                        <div className="flex flex-col gap-3">
                            <span>IRR 126,246,143,460</span>
                            <span className="text-[#FF6680]">حقوق و دستمزد</span>
                        </div>
                    </div> 
                </div>
    </>);
}
 
export default FeedCart;