import { ButtonAtom } from "../atoms/ButtonAtom";
import { HeaderDashboardProps } from "../../lib/types/types";

export function HeaderDashboard({ onLogout }: HeaderDashboardProps) {

    return (
        <header className="header-dashboard">
            <h1>DASHBOARD</h1>
            <ButtonAtom label="Cerrar Sesión" classType="logout" type="button" onClick={onLogout} />
        </header>
    );
}
