import { ButtonAtom } from "../../../components/atoms/ButtonAtom";
import { useNavigate } from "react-router-dom";
import { useBrandQueries } from "../../../lib/hooks/queries/BrandQueries";
import { BrandBody } from "../../../lib/types/types";
import { useBrandMutations } from "../../../lib/hooks/mutations/BrandMutations";

export function Brands() {
    const navigate = useNavigate();
    const { brandsQuery } = useBrandQueries();
    const { DeleteBrandMutation } = useBrandMutations();

    async function handleDelete(id: number) {
        const confirmDelete = window.confirm("¿Estás seguro de eliminar esta marca?");
        if (!confirmDelete) return;

        try {
            await DeleteBrandMutation.mutateAsync({ id });
        } catch (error) {
            console.error("Error en el handleDelete", error);
        }
    }

    if (brandsQuery.isLoading) return <p>Cargando marcas...</p>;
    if (brandsQuery.isError) return <p>Error al cargar marcas</p>;

    const brandsArray = brandsQuery.data ? Object.values(brandsQuery.data) : [];

    return (
        <>
            <ul>
                {brandsArray.map((brand: BrandBody) => (
                    <li key={brand.id}>
                        {brand.name}
                        <ButtonAtom 
                            label="Editar" 
                            classType="edit" 
                            type="button" 
                            onClick={() => navigate(`/dashboard/brands/edit/${brand.id}`)}
                        />
                        <ButtonAtom 
                            label="Eliminar" 
                            classType="delete" 
                            type="button" 
                            onClick={() => brand.id !== undefined && handleDelete(brand.id)}
                        />
                    </li>
                ))}
            </ul>
            <ButtonAtom 
                label="Crear Marca" 
                classType="create" 
                type="button" 
                onClick={() => navigate('/dashboard/brands/create')} 
            />
        </>
    );
}
