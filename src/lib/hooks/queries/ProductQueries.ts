import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../context/AuthContext";
import { GetProducts } from "../../../services/dashboard/ProductService";

export function useProductQueries(){
    const { token } = useAuth();

    const productQuery = useQuery({
        queryKey: ["products"],
        queryFn: () => GetProducts(token ?? "null"),
        enabled: !!token,
    });

    return { productQuery };
}