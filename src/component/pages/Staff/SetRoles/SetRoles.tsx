import { useEffect } from "react";
const SetRoles = () => {
        const title = "سطح دسترسی ها";
        useEffect(() => {
        document.title = title;
      }, []);
    
    return (
        <>
            set route
        </>
    );
}
 
export default SetRoles;