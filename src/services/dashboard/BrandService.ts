import { fetchClient } from "../../lib/helper/fetchClient";
import { BrandResponse } from "../../lib/types/types";
import { BrandBody } from "../../lib/types/types";

export async function CreateBrand(brand: BrandBody, token: string): Promise<BrandResponse> {
    return fetchClient("brands", {
        method: "POST",
        body: JSON.stringify(brand),
    }, token);
}


export async function EditBrand(brand:BrandBody,token:string):Promise<BrandResponse>{
    return fetchClient(`brands/${brand.id}`,{
            method:"PUT",
            body: JSON.stringify(brand),
        },token);
}

export async function GetBrands(token: string):Promise<BrandResponse> {
    return fetchClient("brands",{
        method:"GET",
    },token)
}

export async function DeleteBrand(brand:BrandBody,token:string):Promise<BrandResponse>{
    return fetchClient(`brands/${brand.id}`,{
        method:"DELETE"
    },token);
}