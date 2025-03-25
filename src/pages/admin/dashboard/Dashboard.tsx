import { ButtonAtom } from "../../../components/atoms/ButtonAtom"
import { useAuth } from "../../../lib/context/AuthContext"
import { useAuthMutations } from "../../../lib/hooks/mutations/AuthMutations";
import { HeaderDashboard } from "../../../components/molecules/HeaderDashboard";

export function Dashboard(){
const {logoutMutation} = useAuthMutations();
    const {token,logout} = useAuth();
async function handleLogout(){
try{
    if (token) {
        await logoutMutation.mutateAsync(token);
        logout();
    } else {
        throw new Error('Token is null');
    }
}
catch(error){
    console.error('error al logout', error);
    throw error
}
}

    return(
        <>
            <HeaderDashboard />
            <ButtonAtom label="Cerrar Sesion" classType="logout" type="button" onClick={handleLogout} />
        </>

    )
}