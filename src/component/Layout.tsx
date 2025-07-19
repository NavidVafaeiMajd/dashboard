import Header from './Header';
import Navbar from './Navbar/Navbar';
import Desk from './pages/Desk';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import LayoutStaffList from './pages/Staff/LayoutStaffList';
import StaffList from './pages/Staff/StaffList/StaffList';
import SetRoles from './pages/Staff/SetRoles/SetRoles';
import OfficeShifts from './pages/Staff/OfficeShifts/OfficeShifts';
import EmployExit from './pages/Staff/EmployExit/EmployExit';

const Layout = () => {
    const [headerMenu, setheaderMenu] = useState<boolean>(false);

    const handleDataFromChild = () => {
        setheaderMenu(prev => !prev);
    };
    return (
    <>
              <main className='w-full! min-h-screen flex flex-col'>
                    <div className='fixed z-100 w-full'>
                    <Header headerMenu={handleDataFromChild} />
                    </div>
                    <Router>
                    <div className=' flex flex-1 py-5 lg:mt-[75px] mt-[50px] max-lg:flex-col'>
                        <div className={`w-[25%] overflow-auto ${headerMenu?"show":"max-lg:hidden"}`}>
                        <Navbar />
                        <div  className='max-lg:bg-black/50 md:hidden fixed h-full w-full z-9'></div>
                        </div>
                        <div className='lg:w-[85%] overflow-auto  px-5 md:px-10'>
                        <Routes>
                                <Route path="/" element={<Desk />} />
                                <Route path="staff" element={<LayoutStaffList />} >
                                    <Route index element={<StaffList />} />
                                    <Route path='set-roles' element={<SetRoles />} />
                                    <Route path='office-shifts' element={<OfficeShifts/>} />
                                    <Route path='employ-exit' element={<EmployExit/>} />

                                </Route>
                        </Routes>
                        </div>
                    </div>
                    </Router>
                </main>
    </>);
}
 
export default Layout;