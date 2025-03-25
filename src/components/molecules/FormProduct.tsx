import { useState } from "react";
import { ButtonAtom } from "../atoms/ButtonAtom";
import { InputAtom } from "../atoms/InputAtom";
import styles from "./LoginForm.module.css";
import { ProductFormProps } from "../../lib/types/types";

export function FormProduct({ onSubmit }: ProductFormProps) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [brand_id, setBrandId] = useState("");
    const [category_id, setCategoryId] = useState("");
    const [image, setImage] = useState<File | null>(null);

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

            <ButtonAtom label="Ingresar" classType="create" type="submit" />
        </form>
    );
}
