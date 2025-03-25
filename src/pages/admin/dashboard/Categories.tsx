import { FormCategory } from "../../../components/molecules/FormCategory"
export function Categories(){
    async function handleSubmit(){
        
    }

    return(
        <>
            <h1>Categorias</h1>
            <FormCategory onSubmit={handleSubmit}></FormCategory>
        </>
    )
}