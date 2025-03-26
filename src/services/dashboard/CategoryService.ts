import { fetchClient } from "../../lib/helper/fetchClient";
import { CategoryBody, CategoryResponse } from "../../lib/types/types";

export async function CreateCategory(brand: CategoryBody, token: string): Promise<CategoryResponse> {
    return fetchClient("categories", {
        method: "POST",
        body: JSON.stringify(brand),
    }, token);
}


export async function EditCategory(brand:CategoryBody,token:string):Promise<CategoryResponse>{
    return fetchClient(`categories/${brand.id}`,{
            method:"PUT",
            body: JSON.stringify(brand),
        },token);
}

export async function GetCategories(token: string):Promise<CategoryResponse> {
    return fetchClient("categories",{
        method:"GET",
    },token)
}

export async function DeleteCategory(brand:CategoryBody,token:string):Promise<CategoryResponse>{
    return fetchClient(`categories/${brand.id}`,{
        method:"DELETE"
    },token);
}