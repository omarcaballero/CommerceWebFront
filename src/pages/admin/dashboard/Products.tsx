import { FormProduct } from "../../../components/molecules/FormProduct"

export function Products(){
    async function handleSubmit(){
        
    }
    return(
        <>
            <h1>Productos</h1>
            <FormProduct onSubmit={handleSubmit}></FormProduct>
        </>
    )
}