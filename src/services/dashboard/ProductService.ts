import { fetchClient } from "../../lib/helper/fetchClient";
import { ProductFormProps } from "../../lib/types/types";

export async function CreateProduct(product:ProductFormProps, token: string) {
    return fetchClient("products",{
        method:"POST",
        body: JSON.stringify(product),
    },token
   )
}

export async function EditProduct(product:ProductFormProps, token: string) {
    return fetchClient("products",{
        method:"PUT",
        body: JSON.stringify(product),
    },token
   )
}

export async function GetProducts(product:ProductFormProps, token: string) {
    return fetchClient("products",{
        method:"GET",
        body: JSON.stringify(product),
    },token
   )
}

export async function DeleteProduct(product:ProductFormProps, token: string){
    return fetchClient("products",{
        method:"DELETE",
        body: JSON.stringify(product)
    },token)
}