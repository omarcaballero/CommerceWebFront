import styles from "./Footer.module.css";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.contact}>
                <h3>Contacto</h3>
                <p>📞 +51 987 654 321</p>
                <p>📍 Av. Ejemplo 123, Lima</p>
            </div>

            <div className={styles.socials}>
                <h3>Síguenos</h3>
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">WhatsApp</a>
            </div>

            <div className={styles.dev}>
                <p>Desarrollado por <a href="https://tulink.com" target="_blank">Tu Nombre</a></p>
            </div>
        </footer>
    );
}
