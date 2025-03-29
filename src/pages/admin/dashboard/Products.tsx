import { ButtonAtom } from "../../../components/atoms/ButtonAtom";
import { useNavigate } from "react-router-dom";
import { useProductQueries } from "../../../lib/hooks/queries/ProductQueries";
import { useProductMutations } from "../../../lib/hooks/mutations/ProductMutations";
import { ProductBody } from "../../../lib/types/types";
import styles from "./Products.module.css";

export function Products() {
    const navigate = useNavigate();
    const { productQuery } = useProductQueries();
    const { deleteProductMutation, ActiveProductMutation } = useProductMutations();

    async function handleDelete(id: number) {
        if (!window.confirm("¿Estás seguro de eliminar este producto?")) return;

        try {
            await deleteProductMutation.mutateAsync({ id });
        } catch (error) {
            console.error("Error en handleDelete", error);
        }
    }

    async function handleActivate(id: number) {
        if (!window.confirm("¿Estás seguro de activar este producto?")) return;

        try {
            console.log("Activando producto con ID:", id);
            await ActiveProductMutation.mutateAsync({ id });
        } catch (error) {
            console.error("Error en handleActivate", error);
        }
    }

    if (productQuery.isLoading) return <p className={styles.loadingText}>Cargando productos...</p>;
    if (productQuery.isError) return <p className={styles.errorText}>Error al cargar productos</p>;

    const productsArray = productQuery.data ? Object.values(productQuery.data) : [];

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Gestión de Productos</h2>

            <div className={styles.actions}>
                <ButtonAtom 
                    label="Regresar" 
                    classType="dashboard" 
                    type="button" 
                    onClick={() => navigate('/dashboard')} 
                />
                <ButtonAtom 
                    label="Crear Producto" 
                    classType="create" 
                    type="button" 
                    onClick={() => navigate('/dashboard/products/create')} 
                />
            </div>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Categoría</th>
                        <th>Marca</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productsArray.map((product: ProductBody) => (
                        <tr key={product.id} className={product.active ? styles.active : styles.inactive}>
                            <td>{product.id}</td>
                            <td>
                                {product.image ? (
                                    <img 
                                        src={product.image instanceof File ? URL.createObjectURL(product.image) : product.image} 
                                        alt={product.name} 
                                        className={styles.productImage}
                                    />
                                ) : "Sin imagen"}
                            </td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>${product.price}</td>
                            <td>{product.stock}</td>
                            <td>{product.category?.name || "Sin categoría"}</td>
                            <td>{product.brand?.name || "Sin marca"}</td>
                            <td className={styles.actionsColumn}>
                                <ButtonAtom 
                                    label="Editar" 
                                    classType="edit" 
                                    type="button" 
                                    onClick={() => navigate(`/dashboard/products/edit/${product.id}`)}
                                />
                                {product.active ? (
                                    <ButtonAtom 
                                        label="Eliminar" 
                                        classType="delete" 
                                        type="button" 
                                        onClick={() => product.id !== undefined && handleDelete(product.id)}
                                    />
                                ) : (
                                    <ButtonAtom 
                                        label="Activar" 
                                        classType="active" 
                                        type="button" 
                                        onClick={() => product.id !== undefined && handleActivate(product.id)}
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
