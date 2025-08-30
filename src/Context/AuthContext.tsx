import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import Cookies from "js-cookie";

interface User {
  id: string;
  name: string;
  // هر فیلدی که لازمه
}

interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  console.log(user)
  useEffect(() => {
    const cookieUser = Cookies.get("user");
    if (cookieUser) {
      setUser(JSON.parse(cookieUser));
    }
  }, []);

  const login = (userData: User) => {
    setUser(userData);
    Cookies.set("user", JSON.stringify(userData), { expires: 1 }); // 1 روز اعتبار
  };

  const logout = () => {
    setUser(null);
    Cookies.remove("user");
  };
  return (
    <>
      <AuthContext.Provider value={{ user, login, logout }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;

export const useAuth = () => {
  const user = Cookies.get("user"); // یا localStorage.getItem("user")
  const isLoggedIn = Boolean(user);
  return { isLoggedIn, user };
};
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuthContext must be used within AuthProvider");
  return context;
};