import { fetchClient } from "../../lib/helper/fetchClient";
import { ProductFormProps } from "../../lib/types/types";

export async function CreateProduct(producto:ProductFormProps) {
    return fetchClient("products",{
        method:"POST",
        body: JSON.stringify(producto),
    }
   )
}

export async function EditProduct(producto:ProductFormProps) {
    return fetchClient("products",{
        method:"PUT",
        body: JSON.stringify(producto),
    }
   )
}

export async function GetProducts(producto:ProductFormProps) {
    return fetchClient("products",{
        method:"GET",
        body: JSON.stringify(producto),
    }
   )
}