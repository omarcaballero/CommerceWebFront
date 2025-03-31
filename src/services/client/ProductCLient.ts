import { ProductResponse } from "../../lib/types/types";
import { fetchClient } from "../../lib/helper/fetchClient";

export async function GetProductsClient(page: number = 1): Promise<ProductResponse> {
    return fetchClient(`products/clients?page=${page}`, {
        method: "GET"
    });
}
