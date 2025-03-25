import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../../../services/auth/AuthService";
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

    // // Puedes agregar más mutaciones aquí, como logout, registro, etc.
    // const logoutMutation = useMutation(() => {
    //     // Implementa la lógica de logout
    //     // Por ejemplo:
    //     // return logoutUser(token);
    // }, {
    //     onSuccess: () => {
    //         // Limpiar token, redirigir, etc.
    //         navigate("/login");
    //     }
    // });

    // Retorna un objeto con las mutaciones para que puedan ser usadas
    return {
        loginMutation,
        // logoutMutation
    };
}
