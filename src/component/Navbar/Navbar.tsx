import { NavLink } from 'react-router-dom';
import NavbarItems from './NavbarItems';

const Navbar = () => {
    // const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({hr:false});
    // const toggleMenu = (menuName: string) => {
    // setOpenMenus(prev => ({ ...prev, [menuName]: !prev[menuName] }));
    // };
    return (
        <> 
            {/* nav height */}
            <div id="navbar-content" className="h-[calc(100vh-110px)]! fixed w-[20%] right-10 overflow-auto bg-navbar shadow shadow-xl" style={{ direction: 'ltr', textAlign: 'right' }}>
                <ul>
                    <li><NavLink to="/" className={({isActive})=> ` ${isActive?"bg-[#ebebeb]! text-blue-600":""}`}>پیشخـوان</NavLink></li>
                    <li><NavLink to="#">پرسنل</NavLink></li>
                    <NavbarItems DropMenu={true} itemInfo={["salam" , "/"]} dropInfo={[["salam" , "salam"] , ["by" , "by"]]}/>
                    <li><NavLink to="#">حضور و غیاب</NavLink></li>
                    <li><NavLink to="#">حساب بانکی</NavLink></li>
                    <li><NavLink to="#">گواهی اشتغال به کار</NavLink></li>
                    <li><NavLink to="#">عملیات حقوق</NavLink></li>
                    <li><NavLink to="#">مدیریت مشتریان</NavLink></li>
                    <li><NavLink to="#">رهبران</NavLink></li>
                    <li><NavLink to="#">ارزیابی عملکرد کارکنان</NavLink></li>
                    <li><NavLink to="#">ارزیابی عملکرد کارکنان</NavLink></li>
                    <li><NavLink to="#">ارزیابی عملکرد کارکنان</NavLink></li>

                </ul>
        </div>
    </>);
}
 
export default Navbar;