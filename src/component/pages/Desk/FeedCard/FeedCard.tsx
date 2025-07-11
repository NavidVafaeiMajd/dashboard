import { FaUserTie, FaUsers } from "react-icons/fa6";
import { LuMessageCircleMore, LuMessageCircleOff } from "react-icons/lu";

const FeedCart = () => {
    return (<>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="flex gap-3 items-center rounded-md shadow-md overflow-hidden desk-cart">
                        <div className="desk-icon"><FaUserTie className="w-10 h-10  bg-primary text-white! hover:bg-green-200 hover:text-primary! transition ease-in-out box-content p-5" /></div>
                        <div className="flex flex-col gap-3">
                            <span>2</span>
                            <span className="text-primary">مجموع کارمندان</span>
                        </div>
                    </div>         
                    <div className="flex gap-3 items-center rounded-md shadow-md overflow-hidden desk-cart">
                        <div className="desk-icon"><LuMessageCircleMore className="w-10 h-10  bg-blue-300 text-white! hover:bg-purple-300 hover:text-purple-600! transition ease-in-out box-content p-5" /></div>
                        <div className="flex flex-col gap-3">
                            <span>6</span>
                            <span className="text-primary">باز کردن (تیکت)</span>
                        </div>
                    </div>     
                    <div className="flex gap-3 items-center rounded-md shadow-md overflow-hidden desk-cart">
                        <div className="desk-icon"><LuMessageCircleOff className="w-10 h-10  bg-orange-400 text-white! hover:bg-orange-300 hover:text-orange-500! transition ease-in-out box-content p-5" /></div>
                        <div className="flex flex-col gap-3">
                            <span>0</span>
                            <span className="text-primary">بسته شده (تیکت)</span>
                        </div>
                    </div>     
                    <div className="flex gap-3 items-center rounded-md shadow-md overflow-hidden desk-cart">
                        <div className="desk-icon"><FaUsers className="w-10 h-10  bg-pink-500 text-white! hover:bg-pink-200 hover:text-pink-500! transition ease-in-out box-content p-5" /></div>
                        <div className="flex flex-col gap-3">
                            <span>2</span>
                            <span className="text-primary">حقوق و دستمزد</span>
                        </div>
                    </div> 
                </div>
    </>);
}
 
export default FeedCart;