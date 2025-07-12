
import { useEffect } from "react";
import Breadcrumb from "../breadcrumb";

const Personnel = () => {
    const title = "پرسنل";
    useEffect(() => {
    document.title = title;
  }, []);

    return (
        <>
            <Breadcrumb>
                {title}
            </Breadcrumb>
        </>
    );
}
 
export default Personnel;