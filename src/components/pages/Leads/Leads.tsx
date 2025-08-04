import Breadcrumb from "@/components/shared/breadcrumb";
import { GoPlus } from "react-icons/go";

const Leads = () => {
   return (
      <div>
         <Breadcrumb>رهبران</Breadcrumb>
         <div className="flex flex-col w-full mt-5 rounded-md overflow-hidden shadow-md h-full">
            <div className="flex bg-bgBack justify-between p-2 px-5 border-b-2 border-red-500 items-center">
               <h2>لیست همه رهبران</h2>
               <button className="cart-header-btn flex bg-greenDark text-white items-center p-2 gap-2 rounded-sm cursor-pointer">
                  <GoPlus className="w-5 h-5" />
                  ثبت جدید
               </button>
            </div>
            {/* TODO:DATA TABLE */}
         </div>
      </div>
   );
};
export default Leads;
