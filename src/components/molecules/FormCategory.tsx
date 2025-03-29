import { useEffect, useState } from "react";
import { ButtonAtom } from "../atoms/ButtonAtom";
import { InputAtom } from "../atoms/InputAtom";
import styles from "./LoginForm.module.css";
import { CategoryFormProps } from "../../lib/types/types";
import { useNavigate } from "react-router-dom";

export function FormCategory({initialValue="", onSubmit ,id}: CategoryFormProps) {
    const [category, setCategory] = useState(initialValue);
    const navigate = useNavigate();

    useEffect(()=>{setCategory(initialValue)},[initialValue]);

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        onSubmit(category,id);
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <InputAtom
                type="text"
                placeholder="Categoria"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                className="Category"
            />

            <ButtonAtom label={id ? "Actualizar" : "Registrar"} classType={id ? "edit" : "create"} type="submit" />
            <ButtonAtom 
                label="Cancelar"
                classType="delete" 
                type="button" 
                onClick={() => navigate('/dashboard/categories')} 
            />
        </form>
    );
}
