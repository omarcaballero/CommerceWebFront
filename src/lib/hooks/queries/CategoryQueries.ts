import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../context/AuthContext";
import { GetCategories } from "../../../services/dashboard/CategoryService";

export function useCategoryQueries(){
    const { token } = useAuth();

    const categoryQuery = useQuery({
        queryKey: ["categories"],
        queryFn: () => GetCategories(token ?? "null"),
        enabled: !!token,
    });

    return { categoryQuery };
}