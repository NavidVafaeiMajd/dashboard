import { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import Table from "./Table";
import Form from "./Form";
import { Link } from "react-router-dom";

const EmployExit: React.FC = () => {
  const title = "انفصال از خدمت";
  useEffect(() => {
    document.title = title;
  }, []);

  const [accordion, setAccordion] = useState(false);

  return (
    <>
      <Form accordion={accordion} setAccordion={setAccordion} />
      <div className="card bg-bgBack ">
        <div className="flex justify-between p-2 px-5 border-b-2 border-red-500 items-center">
          <h2> لیست همه انفصال از خدمت </h2>

          <div className="flex gap-2">
            <button className="cart-header-btn  bg-greenDark text-white items-center p-2 rounded-sm cursor-pointer">
              <Link to="/exit-type" className="flex items-center gap-2">
                <GoPlus className="w-5 h-5" />
                نوع انفصال
              </Link>
            </button>{" "}
            <button
              onClick={() => setAccordion(!accordion)}
              className="cart-header-btn flex bg-greenDark text-white items-center p-2 gap-2 rounded-sm cursor-pointer"
            >
              <GoPlus className="w-5 h-5" />
              ثبت جدید
            </button>
          </div>
        </div>
        <div>
          <Table />
        </div>
      </div>
    </>
  );
};

export default EmployExit;
