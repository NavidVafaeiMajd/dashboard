// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from './component/header'
import './App.css'
import Navbar from './component/Navbar'
import Desk from './assets/pages/Desk'

function App() {
  return (
    <>
      <main>
        <Header />
        <section>
          <div>
            <Navbar/>
          </div>
          <div>
            <Desk/>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
