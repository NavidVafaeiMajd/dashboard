import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import Cookies from "js-cookie";

interface User {
  id: string;
  name: string;
  // هر فیلدی که لازمه
}

interface AuthContextType {
  user: User | null;
  login: (userData: User, token?: string) => void;
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

  const login = (userData: User, token?: string) => {
    setUser(userData);
    Cookies.set("user", JSON.stringify(userData), { expires: 1 }); // 1 روز اعتبار
    if (token) {
      Cookies.set("token", token, { expires: 1 });
    }
  };

  const logout = () => {
    setUser(null);
    Cookies.remove("user");
    Cookies.remove("token");
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
  const token = Cookies.get("token");
  const user = Cookies.get("user");
  const isLoggedIn = Boolean(token);
  return { isLoggedIn, user, token };
};
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuthContext must be used within AuthProvider");
  return context;
};