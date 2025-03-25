import { useAuth } from "../../lib/context/AuthContext";
import { FormLogin } from "../../components/molecules/FormLogin";
import { useAuthMutations } from "../../lib/hooks/mutations/AuthMutations";

export function Login(){
    const {login} = useAuth();
    const {loginMutation} = useAuthMutations();

    async function handleLogin(email: string, password: string) {
        try {
            const response = await loginMutation.mutateAsync({email, password});
            login(response.token);
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
        }
    }

    return (
        <FormLogin onSubmit={handleLogin}></FormLogin>
    )
}