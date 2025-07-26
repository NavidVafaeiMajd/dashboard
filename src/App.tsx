// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { NavbarProvider } from "./Context/NavbarContext";
import Layout from "./Layout";

function App() {
   return (
      <NavbarProvider>
         
         <Layout />
      </NavbarProvider>
   );
}

export default App;
