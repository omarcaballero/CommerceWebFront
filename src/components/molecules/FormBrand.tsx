import { useEffect, useState } from "react";
import { ButtonAtom } from "../atoms/ButtonAtom";
import { InputAtom } from "../atoms/InputAtom";
import styles from "./LoginForm.module.css";
import { BrandFormProps } from "../../lib/types/types";
import { useNavigate } from "react-router-dom";

export function FormBrand({initialValue="", onSubmit, id}: BrandFormProps) {
    const [brand, setBrand] = useState(initialValue);
    const navigate = useNavigate();

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
                label={id ? "Actualizar" : "Registrar"}
                classType={id ? "edit" : "create"}
                type="submit" 
            />

            <ButtonAtom 
                label="Cancelar"
                classType="delete" 
                type="button" 
                onClick={() => navigate('/dashboard/brands')} 
            />
        </form>
    );
}
