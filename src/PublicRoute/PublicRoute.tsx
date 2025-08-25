import { Navigate } from "react-router-dom";
import { useAuth } from "@/Context/AuthContext";
import type { JSX } from "react";

interface Props {
  children: JSX.Element;
}

const PublicRoute = ({ children }: Props) => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Navigate to="/" replace />; 
  }

  return children;
};

export default PublicRoute;