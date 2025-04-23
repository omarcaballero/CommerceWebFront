import { FormLogin } from "../../../components/molecules/FormLogin";
import { useAuthMutations } from "../../../lib/hooks/mutations/AuthMutations";

export function Login(){
    const {loginMutation} = useAuthMutations();

    async function handleLogin(username: string, password: string) {
        try {
            console.log(username, password);
            await loginMutation.mutateAsync({username, password});
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
        }
    }

    return (
        <FormLogin onSubmit={handleLogin}></FormLogin>
    )
}