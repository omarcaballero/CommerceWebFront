import { FormBrand } from "../../../../components/molecules/FormBrand";
import { useBrandMutations } from "../../../../lib/hooks/mutations/BrandMutations";

export function CreateBrand(){
    const {CreateBrandMutation} = useBrandMutations();
    async function handleSubmit(name: string){
        try{
            await CreateBrandMutation.mutateAsync({name});
        }
        catch(error){
            console.error('error al handlesubmit', error)
        }
    }
    return(
        <>
            <FormBrand onSubmit={handleSubmit}></FormBrand>
        </>
    )
}