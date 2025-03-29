import { ButtonAtom } from "../atoms/ButtonAtom";
import { useNavigate } from "react-router-dom";
import { HeaderDashboardProps } from "../../lib/types/types";

export function HeaderDashboard({ onLogout }: HeaderDashboardProps) {
    const navigate = useNavigate();

    return (
        <header className="header-dashboard">
            <h1>DASHBOARD</h1>
            <div className="dashboard-buttons">
                    <ButtonAtom label="Marcas" classType="dashboard" type="button" onClick={() => navigate("/dashboard/brands")} />
                    <ButtonAtom label="Categorías" classType="dashboard" type="button" onClick={() => navigate("/dashboard/categories")} />
                    <ButtonAtom label="Productos" classType="dashboard" type="button" onClick={() => navigate("/dashboard/products")} />
                </div>
            <ButtonAtom label="Cerrar Sesión" classType="logout" type="button" onClick={onLogout} />
        </header>
    );
}
