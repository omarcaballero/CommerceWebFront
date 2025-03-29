import { useAuth } from "../../context/AuthContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { CategoryBody , CategoryResponse } from "../../types/types";
import { ActiveCategory, CreateCategory, DeleteCategory, EditCategory } from "../../../services/dashboard/CategoryService";

export function useCategoryMutations(){
    const { token } = useAuth();
    const queryClient = useQueryClient()
    const navigate= useNavigate();

    const CreateCategoryMutation = useMutation<CategoryResponse,Error,CategoryBody>({
        mutationFn: (Category: CategoryBody) => {
            return CreateCategory(Category, token?? "null")
        },
        onSuccess(){
            navigate('/dashboard/categories')
        },
        onError(error){
            console.error('Error al crear Category',error);
        }
    })

    const EditCategoryMutation = useMutation<CategoryResponse,Error, CategoryBody>({
        mutationFn: (Category: CategoryBody) => {
            return EditCategory(Category, token?? "null")
        },
        onSuccess(){
            navigate('/dashboard/categories')
        },
        onError(error){
            console.error('Error al editar Category',error);
        }
    })

    const DeleteCategoryMutation = useMutation<CategoryResponse,Error, CategoryBody>({
        mutationFn: (Category: CategoryBody) => {
            return DeleteCategory(Category, token?? "null")
        },
        onSuccess(){
            queryClient.invalidateQueries({ queryKey: ["categories"] });
        },
        onError(error){
            console.error('Error al borrar', error);
        }
    })

    const ActiveCategoryMutation = useMutation<CategoryResponse,Error, CategoryBody>({
        mutationFn: (Category: CategoryBody) => {
            return ActiveCategory(Category, token?? "null")
        },
        onSuccess(){
            queryClient.invalidateQueries({ queryKey: ["categories"] });
        },
        onError(error){
            console.error('Error al borrar', error);
        }
    })

    return {
        CreateCategoryMutation,
        EditCategoryMutation,
        DeleteCategoryMutation,
        ActiveCategoryMutation
    }
}