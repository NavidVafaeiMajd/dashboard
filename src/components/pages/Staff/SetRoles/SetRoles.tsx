import { useEffect ,useState} from "react";
import Form from "./Form";
import Table from "./Table";
import { GoPlus } from "react-icons/go";
import AccessForm from "./PermissionsTree/Form2";

const SetRoles = () => {
    const title = "نقش های کارکنان";
    useEffect(() => {
    document.title = title;
    }, []);

    const [accordion, setAccordion] = useState(false);

    return (
        <>
            <Form accordion={accordion} setAccordion={setAccordion} />
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
 
export default SetRoles;