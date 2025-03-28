import { FormProduct } from "../../../../components/molecules/FormProduct";
import { useProductMutations } from "../../../../lib/hooks/mutations/ProductMutations";
import { BrandBody } from "../../../../lib/types/types";
import { CategoryBody } from "../../../../lib/types/types";

export function CreateProduct(){
    const {createProductMutation} = useProductMutations();
    async function handleSubmit(product: { 
        name: string; 
        description: string; 
        price: string; 
        stock: number; 
        brand?: BrandBody; 
        category?: CategoryBody; 
        image: File | null; 
    }) {
        try {
            // Create FormData for multipart/form-data
            const formData = new FormData();
            
            // Append text fields
            formData.append('name', product.name);
            formData.append('description', product.description);
            formData.append('price', product.price);
            formData.append('stock', product.stock.toString());
            
            // Append optional fields
            if (product.brand?.id) {
                formData.append('brand_id', product.brand.id.toString());
            }
            
            if (product.category?.id) {
                formData.append('category_id', product.category.id.toString());
            }
            
            if (product.image instanceof File) {
                formData.append('image', product.image);
            } else {
                console.error("❌ Imagen inválida:", product.image);
            }

            console.log('Sending FormData:', Object.fromEntries(formData));
            
            await createProductMutation.mutateAsync(formData as any);
        }
        catch(error) {
            console.error('Error in handleSubmit', error);
        }
    }
    return(
        <>
            <FormProduct
            initialValue={{ name: "", description: "", price: "", stock: 0, brand: undefined, category: undefined, image: null }} 
            onSubmit={handleSubmit}/>
        </>
    )
}