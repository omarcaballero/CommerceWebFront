import { ButtonAtom } from "../atoms/ButtonAtom";
import { useNavigate } from "react-router-dom";


export function HeaderDashboard(){

    const navigate = useNavigate();
    return(
        <>
        <section>
            <h1>DASHBOARD</h1>
            <ButtonAtom label="Marcas" classType="dashboard" type="button" onClick={()=>navigate('/dashboard/brands')}/>
            <ButtonAtom label="Categorias" classType="dashboard" type="button" onClick={()=>navigate('/dashboard/categories')}/>
            <ButtonAtom label="Productos" classType="dashboard" type="button" onClick={()=>navigate('/dashboard/products')}/>
        </section>
        </>
    )
}