import { useParams } from "react-router-dom";
import { FormBrand } from "../../../../components/molecules/FormBrand";
import { useBrandMutations } from "../../../../lib/hooks/mutations/BrandMutations";
import { useBrandQueries } from "../../../../lib/hooks/queries/BrandQueries";

export function EditBrand() {
    const { EditBrandMutation } = useBrandMutations();
    const { brandsQuery } = useBrandQueries();
    const { id } = useParams();

    const brandToEdit = brandsQuery.data 
        ? Object.values(brandsQuery.data).find(brand => brand.id === Number(id))
        : null;

    async function handleSubmit(name: string, id?: number) {
        try {
            console.log(id)
            await EditBrandMutation.mutateAsync({ name, id });
        } catch (error) {
            console.error('error al handlesubmit', error);
        }
    }

    if (!brandToEdit) return <p>Marca no encontrada</p>;

    return (
        <FormBrand 
            initialValue={brandToEdit.name} 
            onSubmit={handleSubmit}
            id={brandToEdit.id}
        />
    );
}