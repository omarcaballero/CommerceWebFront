import { useState } from "react";
import styles from "./Header.module.css";

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.logo}>Good Melody</div>

            <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
                <a href="#">Inicio</a>
                <a href="#">Contacto</a>
                <a href="#">Ubicación</a>
            </nav>

            <button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </button>
        </header>
    );
}
