import { useParams } from "react-router-dom";
import { FormCategory } from "../../../../components/molecules/FormCategory";
import { useCategoryMutations } from "../../../../lib/hooks/mutations/CategoryMutations";
import { useCategoryQueries } from "../../../../lib/hooks/queries/CategoryQueries";

export function EditCategory() {
    const { EditCategoryMutation } = useCategoryMutations();
    const { categoryQuery } = useCategoryQueries();
    const { id } = useParams();

    const categoryToEdit = categoryQuery.data 
        ? Object.values(categoryQuery.data).find(category => category.id === Number(id))
        : null;

    async function handleSubmit(name: string,id?: number) {
        try {
            await EditCategoryMutation .mutateAsync({ name, id });
        } catch (error) {
            console.error('error al handlesubmit', error);
        }
    }

    if (!categoryToEdit) return <p>Marca no encontrada</p>;

    return (
        <FormCategory
            initialValue={categoryToEdit.name} 
            onSubmit={handleSubmit}
            id={categoryToEdit.id}
        />
    );
}