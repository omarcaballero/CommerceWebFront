import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../context/AuthContext";
import { GetBrands } from "../../../services/dashboard/BrandService";

export function useBrandQueries(){
    const { token } = useAuth();

    const brandsQuery = useQuery({
        queryKey: ["brands"],
        queryFn: () => GetBrands(token ?? "null"),
        enabled: !!token,
    });

    return { brandsQuery };
}