import { useEffect, useState } from "react";
import { ButtonAtom } from "../atoms/ButtonAtom";
import { InputAtom } from "../atoms/InputAtom";
import styles from "./LoginForm.module.css";
import { ProductFormProps } from "../../lib/types/types";
import { SelectAtom } from "../atoms/SelectAtom";
import { useCategoryQueries } from "../../lib/hooks/queries/CategoryQueries";
import { useBrandQueries } from "../../lib/hooks/queries/BrandQueries";
import { useNavigate } from "react-router-dom";

export function FormProduct({
    initialValue = {
        name: "",
        description: "",
        price: "",
        stock: 0,
        brand: { id: 0, name: "" },
        category: { id: 0, name: "" },
        image: null
    }, 
    onSubmit, 
    id
}: ProductFormProps) {
    const [name, setName] = useState(initialValue?.name || "");
    const [description, setDescription] = useState(initialValue?.description || "");
    const [price, setPrice] = useState(initialValue?.price ? initialValue.price.toString() : "");
    const [stock, setStock] = useState(initialValue?.stock ? initialValue.stock.toString() : "0");
    const [brandId, setBrandId] = useState(initialValue?.brand?.id || 1);
    const [categoryId, setCategoryId] = useState(initialValue?.category?.id || 1);
    const [image, setImage] = useState<File | null>(null);
    const { categoryQuery } = useCategoryQueries();
    const { brandsQuery } = useBrandQueries();
    const navigate = useNavigate();

    useEffect(() => {
        if (!initialValue) return; 
        setName(initialValue?.name || "");
        setDescription(initialValue?.description || "");
        setPrice(initialValue?.price ? initialValue.price.toString() : "");
        setStock(initialValue?.stock ? initialValue.stock.toString() : "0");
        setBrandId(initialValue?.brand?.id || 1);
        setCategoryId(initialValue?.category?.id || 1);
    }, [initialValue , id]);

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
    
        const brand = brandsQuery.data?.brand; // Access the single brand object
        const category = categoryQuery.data?.category; // Assuming categories are an array
    
        onSubmit({
            name,
            description,
            price,
            stock: parseInt(stock, 10),
            brand: { 
                id: brandId, 
                name: brand?.id === brandId ? brand.name : ""
            },
            category: { 
                id: categoryId, 
                name: category?.id === categoryId ? category.name : ""
            },
            image
        });
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <InputAtom
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => {setName(e.target.value);
                    console.log(e.target.value)}}
                required
                className="product"
            />

            <InputAtom
                type="text"
                placeholder="Descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="product"
            />

            <InputAtom
                type="number"
                placeholder="Precio"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                className="product"
            />

            <InputAtom
                type="number"
                placeholder="Stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                required
                className="product"
            />

            <SelectAtom 
                label="Marca"
                value={brandId}
                onChange={(e) => setBrandId(Number(e.target.value))}
                options={Array.isArray(brandsQuery.data) ? brandsQuery.data : []}
                required
            />

            <SelectAtom 
                label="Categoría"
                value={categoryId}
                onChange={(e) => setCategoryId(Number(e.target.value))}
                options={Array.isArray(categoryQuery.data) ? categoryQuery.data : []}
                placeholder="Elija una categoría"
                required
            />

            <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files?.[0] || null)}
                className="product"
            />

            <ButtonAtom 
                label={id ? "Actualizar" : "Registrar"} 
                classType={id ? "edit" : "create"} 
                type="submit" 
            />
            <ButtonAtom 
                label="Cancelar"
                classType="delete" 
                type="button" 
                onClick={() => navigate('/dashboard/products')} 
            />
        </form>
    );
}