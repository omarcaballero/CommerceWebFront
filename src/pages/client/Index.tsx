import { useState, useMemo } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useClientQueries } from "../../lib/hooks/queries/ClientQueries";
import { ProductBody } from "../../lib/types/types";
import { ProductModal } from "../../components/molecules/ProductModal";
import { ProductCard } from "../../components/molecules/ProductCard";
import { SearchBar } from "../../components/SearchBar";
import styles from "./Index.module.css";
import { filterProducts } from "../../lib/helper/filterProducts";
import { FilterPanel } from "../../components/FilterPanel";
import Carousel from "../../components/Hero";

export function Index() {
    const { productClientQuery } = useClientQueries();
    
    // Simplify to just use the data directly without pagination metadata
    const productsArray: ProductBody[] = Array.isArray(productClientQuery.data)
        ? (productClientQuery.data as ProductBody[])
        : [];
    
    const [selectedProduct, setSelectedProduct] = useState<ProductBody | null>(null);
    const [search, setSearch] = useState("");
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

    const filteredProducts = useMemo(
        () => filterProducts(productsArray, { search, categories: selectedCategories, brands: selectedBrands }),
        [search, selectedCategories, selectedBrands, productsArray]
    );

    const categories = Array.from(new Set(productsArray.map((p:any) => p.category?.name).filter(Boolean))) as string[];
    const brands = Array.from(new Set(productsArray.map((p:any) => p.brand?.name).filter(Boolean))) as string[];

    return (
        <>
            <Header />
            <Carousel />

            <div className={styles.containerIndex}>
                <div className={styles.SearchBarIndex}>
                    <SearchBar search={search} setSearch={setSearch} />
                </div>
                <div className={styles.FIlterPanelIndex}>
                    <FilterPanel 
                        categories={categories}
                        brands={brands}
                        selectedCategories={selectedCategories}
                        selectedBrands={selectedBrands}
                        setCategories={setSelectedCategories}
                        setBrands={setSelectedBrands}
                    />
                </div>
                <div className={styles.ProductsIndex}>
                    <div className={styles.productsGrid}>
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product: ProductBody) => (
                                <ProductCard 
                                    key={product.id}
                                    product={product} 
                                    onClick={() => setSelectedProduct(product)}
                                />
                            ))
                        ) : (
                            <p>No se encontraron productos</p>
                        )}
                    </div>
                </div>
            </div>

            {selectedProduct && (
                <ProductModal 
                    product={selectedProduct} 
                    onClose={() => setSelectedProduct(null)} 
                />
            )}

            <Footer />
        </>
    );
}