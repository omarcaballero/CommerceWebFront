import { FormCategory } from "../../../../components/molecules/FormCategory";
import { useCategoryMutations } from "../../../../lib/hooks/mutations/CategoryMutations";

export function CreateCategory(){
    const {CreateCategoryMutation} = useCategoryMutations();
    async function handleSubmit(name: string){
        try{
            await CreateCategoryMutation.mutateAsync({name});
        }
        catch(error){
            console.error('error al handlesubmit', error)
        }
    }
    return(
        <>
            <FormCategory onSubmit={handleSubmit}/>
        </>
    )
}