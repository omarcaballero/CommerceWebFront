import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../lib/context/AuthContext";

export function ProtectedRoute() {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}
