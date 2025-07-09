// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from './component/Header'
import './App.css'
import Navbar from './component/Navbar'
import Desk from './assets/pages/Desk'

function App() {
  return (
    <>
      <main className='w-full! min-h-screen flex flex-col'>
        <div>
          <Header />
        </div>
        <section className='container m-auto grid grid-cols-12 flex-1'>
          <div className='col-span-3 bg-amber-500'>
            <Navbar/>
          </div>
          <div className='col-span-9 bg-amber-950'>
            <Desk/>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
