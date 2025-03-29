import { ProductResponse } from "../../lib/types/types";
import { fetchClient } from "../../lib/helper/fetchClient";

export async function GetProductsClient():Promise <ProductResponse>{
    return fetchClient("products/clients",{
        method:"GET"
    }
   )
}
