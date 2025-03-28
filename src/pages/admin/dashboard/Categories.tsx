import { useCategoryQueries } from "../../../lib/hooks/queries/CategoryQueries";
import { useCategoryMutations } from "../../../lib/hooks/mutations/CategoryMutations";
import { ButtonAtom } from "../../../components/atoms/ButtonAtom";
import { useNavigate } from "react-router-dom";

export function Categories(){
    const { categoryQuery } = useCategoryQueries();
    const { DeleteCategoryMutation } = useCategoryMutations();
    const navigate = useNavigate();

    async function handleDelete(id: number) {
        const confirmDelete = window.confirm("¿Estás seguro de eliminar esta marca?");
        if (!confirmDelete) return;

        try {
            await DeleteCategoryMutation.mutateAsync({ id });
        } catch (error) {
            console.error("Error en el handleDelete", error);
        }
    }

    if(categoryQuery.isLoading) return <p>Cargando...</p>;
    
    if(categoryQuery.isError) return <p>Error al cargar categorias</p>;

    const categoriesArray = categoryQuery.data ? Object.values(categoryQuery.data) : [];

    return(
        <>
            <ul>
                {categoriesArray.map((category) => (
                    <li key={category.id}>
                        {category.name}
                        <ButtonAtom 
                            label="Editar" 
                            classType="edit" 
                            type="button" 
                            onClick={() => navigate(`/dashboard/categories/edit/${category.id}`)}
                        />
                        <ButtonAtom 
                            label="Eliminar" 
                            classType="delete" 
                            type="button" 
                            onClick={() => category.id !== undefined && handleDelete(category.id)}
                        />
                        {!category.active && (
                            <ButtonAtom 
                            label="Activar" 
                            classType="active" 
                            type="button" 
                            onClick={() => console.log(category.id)}
                        />
                        )}
                    </li>
                ))}

            </ul>
            <ButtonAtom 
                label="Crear Categoria" 
                classType="create" 
                type="button" 
                onClick={() => navigate('/dashboard/categories/create')} 
            />
        </>
    )
}