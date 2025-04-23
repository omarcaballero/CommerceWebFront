import { ProductBody } from "../../lib/types/types";

interface FilterOptions {
    search: string;
    categories: string[];
    brands: string[];
}

export function filterProducts(products: ProductBody[], filters: FilterOptions): ProductBody[] {
    return products.filter((product) => {
        const matchesSearch = product.name?.toLowerCase().includes(filters.search.toLowerCase());
        const matchesCategory = filters.categories.length > 0 
            ? product.categoryName && filters.categories.includes(product.categoryName) 
            : true;
        const matchesBrand = filters.brands.length > 0
            ? product.brandName && filters.brands.includes(product.brandName)
            : true;

        return matchesSearch && matchesCategory && matchesBrand;
    });
}
