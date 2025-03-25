import { useState } from "react";
import { ButtonAtom } from "../atoms/ButtonAtom";
import { InputAtom } from "../atoms/InputAtom";
import styles from "./LoginForm.module.css";
import { LoginFormProps } from "../../lib/types/types";


export function FormLogin({ onSubmit }: LoginFormProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        onSubmit(email, password);
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <InputAtom
                type="email"
                placeholder="Correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="login"
            />

            <InputAtom
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="login"
            />

            <ButtonAtom label="Ingresar" classType="login" type="submit" />
        </form>
    );
}
