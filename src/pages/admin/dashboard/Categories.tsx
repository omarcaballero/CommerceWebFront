import { useCategoryQueries } from "../../../lib/hooks/queries/CategoryQueries";
import { useCategoryMutations } from "../../../lib/hooks/mutations/CategoryMutations";
import { ButtonAtom } from "../../../components/atoms/ButtonAtom";
import { useNavigate } from "react-router-dom";
import styles from "./Categories.module.css";

export function Categories() {
    const { categoryQuery } = useCategoryQueries();
    const { DeleteCategoryMutation, ActiveCategoryMutation } = useCategoryMutations();
    const navigate = useNavigate();

    async function handleDelete(id: number) {
        if (!window.confirm("¿Estás seguro de eliminar esta categoría?")) return;

        try {
            await DeleteCategoryMutation.mutateAsync({ id });
        } catch (error) {
            console.error("Error en handleDelete", error);
        }
    }

    async function handleActivate(id: number) {
        if (!window.confirm("¿Estás seguro de activar esta categoría?")) return;

        try {
            await ActiveCategoryMutation.mutateAsync({ id });
        } catch (error) {
            console.error("Error en handleActivate", error);
        }
    }

    if (categoryQuery.isLoading) return <p className={styles.loadingText}>Cargando categorías...</p>;
    if (categoryQuery.isError) return <p className={styles.errorText}>Error al cargar categorías</p>;

    const categoriesArray = categoryQuery.data ? Object.values(categoryQuery.data) : [];

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Gestión de Categorías</h2>

            <div className={styles.actions}>
                <ButtonAtom 
                    label="Regresar" 
                    classType="dashboard" 
                    type="button" 
                    onClick={() => navigate('/dashboard')} 
                />
                <ButtonAtom 
                    label="Crear Categoría" 
                    classType="create" 
                    type="button" 
                    onClick={() => navigate('/dashboard/categories/create')} 
                />
            </div>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {categoriesArray.map((category) => (
                        <tr key={category.id} className={category.active ? styles.active : styles.inactive}>
                            <td>{category.id}</td>
                            <td>{category.name}</td>
                            <td className={styles.actionsColumn}>
                                <ButtonAtom 
                                    label="Editar" 
                                    classType="edit" 
                                    type="button" 
                                    onClick={() => navigate(`/dashboard/categories/edit/${category.id}`)}
                                />
                                {category.active ? (
                                    <ButtonAtom 
                                        label="Eliminar" 
                                        classType="delete" 
                                        type="button" 
                                        onClick={() => handleDelete(category.id)}
                                    />
                                ) : (
                                    <ButtonAtom 
                                        label="Activar" 
                                        classType="active" 
                                        type="button" 
                                        onClick={() => handleActivate(category.id)}
                                    />
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
