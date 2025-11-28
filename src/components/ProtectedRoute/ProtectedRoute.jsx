import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) return <h1>Cargando...</h1>;

    if (!user) return <Navigate to="/login" />;

    return <>{children}</>;
};
