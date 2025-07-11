// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from './component/Header'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Desk from './component/pages/Desk'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
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
              <div className='max-lg:bg-black/50 md:hidden fixed h-full w-full z-9'></div>
            </div>
            <div className='lg:w-[75%] overflow-auto'>
              <Routes>
                <Route path="/" element={<Desk />} />
              </Routes>
            </div>
          </div>
        </Router>
      </main>
    </>
  )
}

export default App
