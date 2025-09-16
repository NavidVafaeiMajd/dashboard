import React, { type ReactNode, Suspense } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/Context/AuthContext";
import SkeletonLoading from "@/components/ui/skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Suspense fallback={<SkeletonLoading />}>
      {children}
    </Suspense>
  );
};

export default ProtectedRoute;