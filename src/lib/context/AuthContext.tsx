import { useContext, createContext, useState, ReactNode, useEffect } from "react";

interface AuthContextType {
    token: string | null;
    login: (token: string) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!localStorage.getItem("token"));

    useEffect(() => {
        setIsAuthenticated(!!token);
    }, [token]);

    function login(token: string) {
        setToken(token);
        localStorage.setItem("token", token);
        setIsAuthenticated(true);  // Asegurar que se actualiza correctamente
    }

    function logout() {
        setToken(null);
        localStorage.removeItem("token");
        setIsAuthenticated(false);  // Actualizar estado correctamente
    }

    return (
        <AuthContext.Provider value={{ token, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth debe estar dentro de un AuthProvider");
    }
    return context;
}
