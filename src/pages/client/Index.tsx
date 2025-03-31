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
    const [page, setPage] = useState(1); // Estado para manejar la página
    const { productClientQuery } = useClientQueries(page);
    
    // Si la API devuelve metadatos de paginación
    const paginationMeta = productClientQuery.data?.meta || {};
    const productsArray = productClientQuery.data?.data || [];
    
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

            {/* Controles de paginación */}
            <div className={styles.pagination}>
                {paginationMeta.current_page > 1 && (
                    <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>
                        Anterior
                    </button>
                )}
                <span>Página {paginationMeta.current_page} de {paginationMeta.last_page}</span>
                {paginationMeta.current_page < paginationMeta.last_page && (
                    <button onClick={() => setPage((prev) => prev + 1)}>
                        Siguiente
                    </button>
                )}
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
