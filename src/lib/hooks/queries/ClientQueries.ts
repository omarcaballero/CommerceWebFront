import { useQuery } from "@tanstack/react-query";
import { GetProductsClient } from "../../../services/client/ProductCLient";
import { ProductResponse } from "../../types/types"; // Asegúrate de importar el tipo ProductResponse

export function useClientQueries(page: number = 1) {
    const productClientQuery = useQuery<ProductResponse>({
        queryKey: ["products", page],
        queryFn: () => GetProductsClient(page),
        keepPreviousData: true, 
    });

    return { productClientQuery };
}
