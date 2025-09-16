import { Navigate } from "react-router-dom";
import { useAuth } from "@/Context/AuthContext";
import { Suspense } from "react";
import type { JSX } from "react";
import SkeletonLoading from "@/components/ui/skeleton";

interface Props {
  children: JSX.Element;
}



const PublicRoute = ({ children }: Props) => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Navigate to="/" replace />; 
  }

  return (
    <Suspense fallback={<SkeletonLoading />}>
      {children}
    </Suspense>
  );
};

export default PublicRoute;