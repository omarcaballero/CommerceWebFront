import { useEffect, useState } from "react";
import { ButtonAtom } from "../atoms/ButtonAtom";
import { InputAtom } from "../atoms/InputAtom";
import styles from "./LoginForm.module.css";
import { BrandFormProps } from "../../lib/types/types";

export function FormBrand({initialValue="", onSubmit, id}: BrandFormProps) {
    const [brand, setBrand] = useState(initialValue);

    useEffect(()=>{setBrand(initialValue)},[initialValue])

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        onSubmit(brand,id);
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <InputAtom
                type="text"
                placeholder="Marca"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                required
                className="brand"
            />

            <ButtonAtom 
                label={id ? "Actualizar" : "Registrar"}  // 🔹 Cambiar el texto según si es edición o creación
                classType="create" 
                type="submit" 
            />
        </form>
    );
}
