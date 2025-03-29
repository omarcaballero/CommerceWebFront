import { useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useClientQueries } from "../../lib/hooks/queries/ClientQueries";
import { ProductBody } from "../../lib/types/types";
import { ProductModal } from "../../components/molecules/ProductModal";
import { ProductCard } from "../../components/molecules/ProductCard";
import styles from "./Index.module.css";

export function Index() {
    const { productClientQuery } = useClientQueries();
    const productsArray = productClientQuery.data ? Object.values(productClientQuery.data) : [];

    const [selectedProduct, setSelectedProduct] = useState<ProductBody | null>(null);

    return (
        <>
            <Header />

            <h2 className={styles.title}>Productos</h2>
            
            <div className={styles.productsGrid}>
                {productsArray.map((product: ProductBody) => (
                    <ProductCard 
                        key={product.id}
                        product={product} 
                        onClick={() => setSelectedProduct(product)}
                    />
                ))}
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
