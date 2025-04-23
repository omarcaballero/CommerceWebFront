import { useQuery } from "@tanstack/react-query";
import { GetProductsClient } from "../../../services/client/ProductCLient";
import { ProductResponse } from "../../types/types"; 

export function useClientQueries() {
    const productClientQuery = useQuery<ProductResponse>({
        queryKey: ["products"],
        queryFn: () => GetProductsClient()
    });

    return { productClientQuery };
}
