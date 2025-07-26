import { createContext, useContext, useState, type ReactNode } from 'react';

// Define the shape of the context
interface NavbarContextType {
  isNavbarOpen: boolean;
  toggleNavbar: () => void;
  setIsNavbarOpen: (value: boolean) => void;
}

// Create the context with default value
const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

// Create the provider component
export const NavbarProvider = ({ children }: { children: ReactNode }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);

  const toggleNavbar = () => setIsNavbarOpen(prev => !prev);

  return (
    <NavbarContext.Provider value={{ isNavbarOpen, toggleNavbar, setIsNavbarOpen }}>
      {children}
    </NavbarContext.Provider>
  );
};

// Custom hook to use the navbar context
export const useNavbar = (): NavbarContextType => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error('useNavbar must be used within a NavbarProvider');
  }
  return context;
};
