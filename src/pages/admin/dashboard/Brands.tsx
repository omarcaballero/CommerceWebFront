import { ButtonAtom } from "../../../components/atoms/ButtonAtom";
import { useNavigate } from "react-router-dom";
import { useBrandQueries } from "../../../lib/hooks/queries/BrandQueries";
import { useBrandMutations } from "../../../lib/hooks/mutations/BrandMutations";
import styles from "./Brands.module.css";

export function Brands() {
    const navigate = useNavigate();
    const { brandsQuery } = useBrandQueries();
    const { DeleteBrandMutation, ActiveBrandMutation } = useBrandMutations();

    async function handleDelete(id: number) {
        if (!window.confirm("¿Estás seguro de eliminar esta marca?")) return;

        try {
            await DeleteBrandMutation.mutateAsync({ id });
        } catch (error) {
            console.error("Error en el handleDelete", error);
        }
    }

    async function handleActivate(id: number) {
        if (!window.confirm("¿Estás seguro de activar esta marca?")) return;

        try {
            await ActiveBrandMutation.mutateAsync({ id });
        } catch (error) {
            console.error("Error en el handleActivate", error);
        }
    }

    if (brandsQuery.isLoading) return <p className={styles.loadingText}>Cargando marcas...</p>;
    if (brandsQuery.isError) return <p className={styles.errorText}>Error al cargar marcas</p>;

    const brandsArray = brandsQuery.data ? Object.values(brandsQuery.data) : [];

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Gestión de Marcas</h2>

            <div className={styles.actions}>
                <ButtonAtom 
                    label="Regresar" 
                    classType="dashboard" 
                    type="button" 
                    onClick={() => navigate('/dashboard')} 
                />
                <ButtonAtom 
                    label="Crear Marca" 
                    classType="create" 
                    type="button" 
                    onClick={() => navigate('/dashboard/brands/create')} 
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
                    {brandsArray.map((brand) => (
                        <tr key={brand.id} className={brand.active ? styles.active : styles.inactive}>
                            <td>{brand.id}</td>
                            <td>{brand.name}</td>
                            <td className={styles.actionsColumn}>
                                <ButtonAtom 
                                    label="Editar" 
                                    classType="edit" 
                                    type="button" 
                                    onClick={() => navigate(`/dashboard/brands/edit/${brand.id}`)}
                                />
                                {brand.active ? (
                                    <ButtonAtom 
                                        label="Eliminar" 
                                        classType="delete" 
                                        type="button" 
                                        onClick={() => handleDelete(brand.id)}
                                    />
                                ) : (
                                    <ButtonAtom 
                                        label="Activar" 
                                        classType="active" 
                                        type="button" 
                                        onClick={() => handleActivate(brand.id)}
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
