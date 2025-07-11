import NavbarItems from './NavbarItems';
import { CiHome } from "react-icons/ci";

const Navbar = () => {
    // const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({hr:false});
    // const toggleMenu = (menuName: string) => {
    // setOpenMenus(prev => ({ ...prev, [menuName]: !prev[menuName] }));
    // };
    return (
        <> 
            {/* nav height */}
            <div id="navbar-content" className="lg:h-[calc(100vh-110px)]! h-full z-10   fixed w-[50%] lg:w-[20%] lg:right-10 overflow-auto bg-navbar shadow shadow-xl" style={{ direction: 'ltr', textAlign: 'right' }}>
                <ul>
                    <NavbarItems DropMenu={false} itemInfo={[<> <CiHome/> پیشخـوان</>, "/"]} dropInfo={[]} />
                    <NavbarItems DropMenu={false} itemInfo={["پرسنل", "/persnel"]} dropInfo={[]} />
                    <NavbarItems DropMenu={true} itemInfo={["مدیریت منابع انسانی" , "managment"]} dropInfo={[["واحد سازمانی " , "managment/vahed"] , ["سمت سازمانی" , "managment/semat"] , ["خط مشی ها" , "managment/khat"] ,["ابلاغیه" , "managment/eblaghie"] , ["چارت سازمانی " , "managment/chart"]]}/>
                    <NavbarItems DropMenu={true} itemInfo={["حضور و غیاب", "/hozoor"]} dropInfo={[[" حضور و غیاب " , "hozoor"]]} />
                    <NavbarItems DropMenu={false} itemInfo={["حساب بانکی", "/hesab"]} dropInfo={[]} />
                    <NavbarItems DropMenu={false} itemInfo={["گواهی اشتغال به کار", "/govahi"]} dropInfo={[]} />
                    <NavbarItems DropMenu={false} itemInfo={["عملیات حقوق", "/hoghoogh"]} dropInfo={[]} />
                    <NavbarItems DropMenu={false} itemInfo={["مدیریت مشتریان", "/moshtarian"]} dropInfo={[]} />
                    <NavbarItems DropMenu={false} itemInfo={["رهبران", "/rahbaran"]} dropInfo={[]} />
                    <NavbarItems DropMenu={false} itemInfo={["ارزیابی عملکرد کارکنان", "/arzyabi"]} dropInfo={[]} />
                    <NavbarItems DropMenu={false} itemInfo={["ترفیعات و تبدیل وضعیت", "/tarfiyat"]} dropInfo={[]} />
                    <NavbarItems DropMenu={false} itemInfo={["پشتیبـانی", "/support"]} dropInfo={[]} />
                    <NavbarItems DropMenu={false} itemInfo={["درخواست مرخصی", "/morkhasi"]} dropInfo={[]} />
                    <NavbarItems DropMenu={false} itemInfo={["آموزش", "/amoozesh"]} dropInfo={[]} />
                    <NavbarItems DropMenu={false} itemInfo={["پرونده های انضباطی", "/enzebati"]} dropInfo={[]} />


                </ul>
        </div>
    </>);
}
 
export default Navbar;