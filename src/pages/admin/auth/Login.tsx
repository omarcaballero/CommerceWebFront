import { FormLogin } from "../../../components/molecules/FormLogin";
import { useAuthMutations } from "../../../lib/hooks/mutations/AuthMutations";

export function Login(){
    const {loginMutation} = useAuthMutations();

    async function handleLogin(email: string, password: string) {
        try {
            await loginMutation.mutateAsync({email, password});
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
        }
    }

    return (
        <FormLogin onSubmit={handleLogin}></FormLogin>
    )
}