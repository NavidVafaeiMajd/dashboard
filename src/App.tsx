
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
