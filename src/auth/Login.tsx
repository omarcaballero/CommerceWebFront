import { useState } from "react";
import { loginUser } from "../services/AuthService";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useAuth();
    const navigate = useNavigate();

    async function handleSendLogin(event: React.FormEvent) {
        event.preventDefault();
        try {
            const response = await loginUser({email, password})
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
            <button type="submit">Ingresar</button>
        </form>
        </>
    )
}