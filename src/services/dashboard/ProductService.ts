import { fetchClient } from "../../lib/helper/fetchClient";
import { ProductBody, ProductResponse } from "../../lib/types/types";

export async function CreateProduct(formData :any, token: string): Promise <ProductResponse> {
    console.log('Formdata en edit product:', Object.fromEntries(formData));
    return fetchClient("products",{
        method:"POST",
        body: formData,
    },token
   )
}

export async function EditProduct(formData :any, token: string):Promise <ProductResponse> {
    console.log('Formdata en edit product:', Object.fromEntries(formData));
    return fetchClient(`products/${Object.fromEntries(formData).id}`,{
        method:"POST",
        body: formData,
    },token
   )
}

export async function GetProducts( token: string):Promise <ProductResponse>{
    return fetchClient("products",{
        method:"GET"
    },token
   )
}

export async function DeleteProduct(product:ProductBody, token: string) : Promise <ProductResponse>{
    return fetchClient(`products/${product.id}`,{
        method:"DELETE"
    },token)
}

export async function ActiveProduct(product:ProductBody, token: string) : Promise <ProductResponse>{
    return fetchClient(`products/active/${product.id}`,{
        method:"PUT"
    },token)
}