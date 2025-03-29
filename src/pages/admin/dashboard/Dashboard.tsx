import { ButtonAtom } from "../../../components/atoms/ButtonAtom";
import { useAuth } from "../../../lib/context/AuthContext";
import { useAuthMutations } from "../../../lib/hooks/mutations/AuthMutations";
import { HeaderDashboard } from "../../../components/molecules/HeaderDashboard";
import { useNavigate } from "react-router-dom";

export function Dashboard() {
    const { logoutMutation } = useAuthMutations();
    const { token, logout } = useAuth();
    const navigate = useNavigate();

    async function handleLogout() {
        try {
            if (token) {
                await logoutMutation.mutateAsync(token);
                logout();
            } else {
                throw new Error("Token is null");
            }
        } catch (error) {
            console.error("Error al cerrar sesión", error);
        }
    }

    return (
        <>
            <HeaderDashboard onLogout={handleLogout} />
            <div className="dashboard-container">
                <h2>Bienvenido al Panel de Administración</h2>
                <p>Administra marcas, categorías y productos fácilmente.</p>

                <div className="dashboard-buttons">
                    <ButtonAtom label="Marcas" classType="dashboard" type="button" onClick={() => navigate("/dashboard/brands")} />
                    <ButtonAtom label="Categorías" classType="dashboard" type="button" onClick={() => navigate("/dashboard/categories")} />
                    <ButtonAtom label="Productos" classType="dashboard" type="button" onClick={() => navigate("/dashboard/products")} />
                </div>
            </div>
        </>
    );
}
