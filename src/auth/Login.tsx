import { useState } from "react";
import { loginUser } from "../services/auth/AuthService";
import { useAuth } from "../lib/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ButtonAtom } from "../components/atoms/ButtonAtom";

export function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useAuth();
    const navigate = useNavigate();

    async function handleSendLogin(event: React.FormEvent) {
        event.preventDefault();
        try {
            console.log('antes de enviar')
            const response = await loginUser({email, password}) as { token: string };
            login(response.token);
            navigate('/dashboard');

        } catch (error) {
            console.error("Error al iniciar sesión:", error);
        }
    }

    return (
        <>
        <form onSubmit={handleSendLogin}>
            <input
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
            <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
            <ButtonAtom label="Ingresar" onClick={() => handleSendLogin} classType="login" />
        </form>
        </>
    )
}