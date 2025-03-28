import { useParams } from "react-router-dom";
import { FormProduct } from "../../../../components/molecules/FormProduct";
import { useProductMutations } from "../../../../lib/hooks/mutations/ProductMutations";
import { useProductQueries } from "../../../../lib/hooks/queries/ProductQueries";
import { BrandBody, CategoryBody } from "../../../../lib/types/types";

interface ProductFormData {
    name: string;
    description: string;
    price: string;
    stock: number;
    brand?: BrandBody;
    category?: CategoryBody;
    image: File | null;
}

export function EditProduct() {
    const { editProductMutation } = useProductMutations();
    const { productQuery } = useProductQueries();
    const { id } = useParams<{ id: string }>();

    const productToEdit = productQuery.data 
        ? Object.values(productQuery.data).find(
            (product) => product.id === Number(id)
        )
        : null;

    async function handleSubmit(product: ProductFormData) {
        try {
            if (!product.name || !product.description || !product.price) {
                throw new Error("Missing required fields");
            }

            const formData = new FormData();
            
            formData.append('_method', "PUT");
            formData.append('id', id || '');
            formData.append('name', product.name);
            formData.append('description', product.description);
            formData.append('price', product.price);
            formData.append('stock', product.stock.toString());
            
            if (product.brand?.id) {
                formData.append('brand_id', product.brand.id.toString());
            }
            
            if (product.category?.id) {
                formData.append('category_id', product.category.id.toString());
            }
            
            if (product.image instanceof File) {
                formData.append('image', product.image);
            } else if (product.image !== null) {
                console.warn("Invalid image provided");
            }

            await editProductMutation.mutateAsync(formData);
        } catch (error) {
            console.error('Error editing product:', error);
        }
    }

    if (!productToEdit) return <p>Product not found</p>;

    return (
        <FormProduct
            initialValue={productToEdit} 
            onSubmit={(product) => handleSubmit({
                ...product,
                brand: product.brand || { id: 0, name: "" },
                category: product.category || { id: 0, name: "" },
            })}
            id={productToEdit.id}
        />
    );
}