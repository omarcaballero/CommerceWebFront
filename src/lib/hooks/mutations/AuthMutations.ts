import { useMutation } from "@tanstack/react-query";
import { loginUser, logoutUser } from "../../../services/auth/AuthService";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { LoginCredentials } from "../../types/types";
import { LoginResponse } from "../../types/types";
 
  
  export function useAuthMutations() {

    const { login } = useAuth();
    const navigate = useNavigate();
  
    const loginMutation = useMutation<LoginResponse, Error, LoginCredentials>({
      mutationFn: (credentials: LoginCredentials) => loginUser(credentials),
      onSuccess: (response) => {
        login(response.token);
        navigate("/dashboard");
      },
      onError: (error: Error) => {
        console.error("Error al iniciar sesión:", error);
      }
    });

    const logoutMutation = useMutation<void, Error, string>({
        mutationFn:(token: string)=>logoutUser(token),
        onSuccess:() =>{
            navigate("/login");
        },
        onError: (error: Error) =>{
            console.error("Error al cerrar sesion",error);
        }
    });

    return {
        loginMutation,
        logoutMutation
    };
}
