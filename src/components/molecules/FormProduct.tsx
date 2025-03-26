import { useEffect, useState } from "react";
import { ButtonAtom } from "../atoms/ButtonAtom";
import { InputAtom } from "../atoms/InputAtom";
import styles from "./LoginForm.module.css";
import { ProductFormProps } from "../../lib/types/types";

export function FormProduct({initialValue={name: "",
    description: "",
    price: 0,
    stock: 0,
    brand_id: "",
    category_id: "",
    image: null }, onSubmit ,id}: ProductFormProps) {
    const [name, setName] = useState(initialValue.name);
    const [description, setDescription] = useState(initialValue.description);
    const [price, setPrice] = useState(initialValue.price.toString());
    const [stock, setStock] = useState(initialValue.stock.toString());
    const [brand_id, setBrandId] = useState(initialValue.brand_id);
    const [category_id, setCategoryId] = useState(initialValue.category_id);
    const [image, setImage] = useState<File | null>(null);

    useEffect(()=>{
        setName(initialValue.name);
        setDescription(initialValue.description);
        setPrice(initialValue.price.toString());
        setStock(initialValue.stock.toString());
        setBrandId(initialValue.brand_id);
        setCategoryId(initialValue.category_id);
    }
    ,[initialValue]);

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        onSubmit({
            name,
            description,
            price: parseFloat(price),
            stock: parseInt(stock, 10),
            brand_id,
            category_id,
            image
        });
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <InputAtom
                type="nombre"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
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

            <InputAtom
                type="text"
                placeholder="ID de Marca"
                value={brand_id}
                onChange={(e) => setBrandId(e.target.value)}
                required
                className="product"
            />

            <InputAtom
                type="text"
                placeholder="ID de Categoría"
                value={category_id}
                onChange={(e) => setCategoryId(e.target.value)}
                required
                className="product"
            />

            <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files?.[0] || null)}
                className="product"
            />

            <ButtonAtom label={id ? "Actualizar" : "Registrar"} classType={id ? "edit" : "create"} type="submit" />
        </form>
    );
}
