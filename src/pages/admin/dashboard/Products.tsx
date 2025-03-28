import { ButtonAtom } from "../../../components/atoms/ButtonAtom";
import { useNavigate } from "react-router-dom";
import { useProductQueries } from "../../../lib/hooks/queries/ProductQueries";
import { ProductBody } from "../../../lib/types/types";
import { useProductMutations } from "../../../lib/hooks/mutations/ProductMutations";

export function Products() {
    const navigate = useNavigate();
    const { productQuery } = useProductQueries();
    const { deleteProductMutation } = useProductMutations();

    async function handleDelete(id: number) {
        const confirmDelete = window.confirm("¿Estás seguro de eliminar esta marca?");
        if (!confirmDelete) return;

        try {
            await deleteProductMutation.mutateAsync({ id });
        } catch (error) {
            console.error("Error en el handleDelete", error);
        }
    }

    if (productQuery.isLoading) return <p>Cargando marcas...</p>;
    if (productQuery.isError) return <p>Error al cargar marcas</p>;

    const productsArray = productQuery.data ? Object.values(productQuery.data) : [];

    return (
        <>
            <ul>
                {productsArray.map((product: ProductBody) => (
                    <li key={product.id}>
                        {product.name}<br></br>
                        {product.description}<br></br>
                        {product.price}<br></br>
                        {product.stock}<br></br>
                        {product.image ? (
                            <img 
                                src={product.image instanceof File ? URL.createObjectURL(product.image) : product.image} 
                                alt={product.name} 
                                width={100} 
                            />
                        ) : "Sin imagen"}
                        

                        Categoría: {product.category?.name || "Sin categoría"}<br />
                        Marca: {product.brand?.name || "Sin marca"}<br />
                        <ButtonAtom 
                            label="Editar" 
                            classType="edit" 
                            type="button" 
                            onClick={() => navigate(`/dashboard/products/edit/${product.id}`)}
                        />
                        <ButtonAtom 
                            label="Eliminar" 
                            classType="delete" 
                            type="button" 
                            onClick={() => product.id !== undefined && handleDelete(product.id)}
                        />
                        {!product.active && (
                            <ButtonAtom 
                            label="Activar" 
                            classType="active" 
                            type="button" 
                            onClick={() => console.log(product.id)}
                        />
                        )}
                    </li>
                ))}
            </ul>
            <ButtonAtom 
                label="Crear Producto" 
                classType="create" 
                type="button" 
                onClick={() => navigate('/dashboard/products/create')} 
            />
        </>
    );
}
