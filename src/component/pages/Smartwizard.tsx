import {  NavLink } from "react-router-dom";

interface dataProps {
    data : [React.ReactNode , string , string, string ][]
}
const Smartwizard = ({data} :dataProps) => {
    return (
        <>

            <div id="smartwizard" className="flex mt-10 mb-5 justify-around border border-[#24C96F] bg-[#DFF5E2] py-3 rounded-md" >
                {data.map((item , index) => (
                    <div>
                        <NavLink key={index} to={item[1]} className={({isActive})=>` flex items-center gap-5 ${isActive && "text-cupurple"} hover:text-cupurple`} end>
                            <div className="flex flex-col gap-2">
                                <span>{ item[2]}</span>
                                <span className="text-sm text-black/50">{ item[3]}</span>
                            </div>
                            <div>{item[0]}</div>
                        </NavLink>
                    </div>
                ))}
            </div>
        </>
    );
}
 
export default Smartwizard;