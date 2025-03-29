import { useMutation } from "@tanstack/react-query"
import { ProductBody, ProductResponse } from "../../types/types"
import { ActiveProduct, CreateProduct, DeleteProduct, EditProduct } from "../../../services/dashboard/ProductService"
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

export function useProductMutations(){
    const { token } = useAuth();
    const navigate= useNavigate();
    const queryClient = useQueryClient()
    
    const createProductMutation = useMutation<ProductResponse,Error,ProductBody>({
        mutationFn:(formData)=>{
            return CreateProduct(formData, token?? "null")},
        onSuccess(data){
            console.log('Producto creado',data);
            navigate('/dashboard/products');
        },
        onError(error){
            console.error('Error al crear producto',error);
        }
    })

    const editProductMutation = useMutation<ProductResponse,Error,ProductBody>({
        mutationFn:(formData)=>{
            return EditProduct(formData, token?? "null")},
        onSuccess(data){
            console.log('Producto editado',data);
            navigate('/dashboard/products');
        },
        onError(error){
            console.error('Error al editar producto',error);
        }
    })
    const deleteProductMutation = useMutation<ProductResponse,Error,ProductBody>({
        mutationFn:(product : ProductBody)=>{return DeleteProduct(product, token?? "null")},
        onSuccess(data){
            console.log('Producto eliminado',data);
            queryClient.invalidateQueries({ queryKey: ["products"] });
        },
        onError(error){
            console.error('Error al eliminar producto',error);
        }
    })

    const ActiveProductMutation = useMutation<ProductResponse,Error,ProductBody>({
        mutationFn:(product : ProductBody)=>{return ActiveProduct(product, token?? "null")},
        onSuccess(data){
            console.log('Producto eliminado',data);
            queryClient.invalidateQueries({ queryKey: ["products"] });
        },
        onError(error){
            console.error('Error al eliminar producto',error);
        }
    })
    return {
        createProductMutation,
        editProductMutation,
        deleteProductMutation,
        ActiveProductMutation
    }
}