// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from './component/Header'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Desk from './component/pages/Desk'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <main className='w-full! min-h-screen flex flex-col'>
        <div className='fixed z-100 w-full'>
          <Header />
        </div>
        <Router>
          <div className=' flex flex-1 py-5 mt-[75px] '>
            <div className='w-[25%] overflow-auto '>
              <Navbar/>
            </div>
            <div className='w-[75%] overflow-auto'>
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
