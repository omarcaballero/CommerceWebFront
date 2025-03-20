import { useAuth } from "../../context/AuthContext";

export function Dashboard(){
    const { token } = useAuth(); 

    return(
        <>
            <h1>DAsboard</h1>
            <p>Token: {token ? token : "No autenticado"}</p>
        </>

    )
}