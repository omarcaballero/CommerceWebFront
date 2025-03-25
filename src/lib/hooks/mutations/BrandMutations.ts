import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../../context/AuthContext";
import { CreateBrand, EditBrand, DeleteBrand} from "../../../services/dashboard/BrandService";
import { BrandBody, BrandResponse } from "../../types/types";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export function useBrandMutations(){
    const { token } = useAuth();
    const queryClient = useQueryClient()
    const navigate= useNavigate();

    const CreateBrandMutation = useMutation<BrandResponse,Error,BrandBody>({
        mutationFn: (brand: BrandBody) => {
            return CreateBrand(brand, token?? "null");
        },
        onSuccess(){
            navigate('/dashboard/brands')
        },
        onError(error){
            console.error('Error al crear Brand',error);
        }
    })

    const EditBrandMutation = useMutation<BrandResponse,Error,BrandBody>({
        mutationFn: (brand:BrandBody)=>{return EditBrand(brand,token?? "null ")},
        onSuccess(){
            navigate('/dashboard/brands')
        },
        onError(error){
            console.error('Error al editar Brand',error);
        }
    })

    const DeleteBrandMutation = useMutation<BrandResponse,Error,BrandBody>({
        mutationFn: (brand:BrandBody)=>{return DeleteBrand(brand,token??"null")},
        onSuccess(){
            queryClient.invalidateQueries({ queryKey: ["brands"] });
        },
        onError(error){
            console.error('Error al borrar', error);
        }
    })

    return{
        CreateBrandMutation,
        EditBrandMutation,
        DeleteBrandMutation
    }
}