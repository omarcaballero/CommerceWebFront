import { useState } from "react";
import styles from "./FilterPanel.module.css";

interface FilterPanelProps {
    categories: string[];
    brands: string[];
    selectedCategories: string[];
    selectedBrands: string[];
    setCategories: (categories: string[]) => void;
    setBrands: (brands: string[]) => void;
}

export function FilterPanel({ categories, brands, selectedCategories, selectedBrands, setCategories, setBrands }: FilterPanelProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleCategoryChange = (category: string) => {
        setCategories(
            selectedCategories.includes(category)
                ? selectedCategories.filter((c) => c !== category)
                : [...selectedCategories, category]
        );
    };

    const handleBrandChange = (brand: string) => {
        setBrands(
            selectedBrands.includes(brand)
                ? selectedBrands.filter((b) => b !== brand)
                : [...selectedBrands, brand]
        );
    };

    return (
        <aside className={`${styles.filterPanel} ${isOpen ? styles.open : ""}`}>
            <button className={styles.toggleButton} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "Cerrar Filtros" : "Abrir Filtros"}
            </button>

    
            <div className={`${styles.filterContent} ${isOpen ? styles.show : ""}`}>
                <div className={styles.filterContentdiv} >
                    <h3>Filtrar por</h3>

                    <h4>Categoría</h4>
                    {categories.map((category) => (
                        <label key={category}>
                            <input 
                                type="checkbox" 
                                checked={selectedCategories.includes(category)} 
                                onChange={() => handleCategoryChange(category)}
                            />
                            {category}
                        </label>
                    ))}

                    <h4>Marca</h4>
                    {brands.map((brand) => (
                        <label key={brand}>
                            <input 
                                type="checkbox" 
                                checked={selectedBrands.includes(brand)} 
                                onChange={() => handleBrandChange(brand)}
                            />
                            {brand}
                        </label>
                    ))}
                </div>
            </div>
        </aside>
    );
}
