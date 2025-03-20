import { useContext,createContext,useState, ReactNode } from "react";

interface AuthContextType {
    token: string | null;
    login: (token: string) => void;
    logout: () => void;
    isAuthenticated: boolean;
  }

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({children}:{children:ReactNode}){
    const [token, setToken] = useState<string | null>(
        localStorage.getItem("token") || null
    )

    function login(token: string) {
        setToken(token);
        localStorage.setItem("token", token); // Guardamos el token
      }
    
      function logout() {
        setToken(null);
        localStorage.removeItem("token");
      }
      return (
        <AuthContext.Provider value={{ token, login, logout, isAuthenticated: !!token }}>
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