import { useQuery } from "@tanstack/react-query";
import { GetProductsClient } from "../../../services/client/ProductCLient";

export function useClientQueries(){

    const productClientQuery = useQuery({
        queryKey: ["products"],
        queryFn: () => GetProductsClient()
    });

    return { productClientQuery };
}