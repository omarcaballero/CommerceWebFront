import { useState } from "react";
import { ButtonAtom } from "../atoms/ButtonAtom";
import { InputAtom } from "../atoms/InputAtom";
import styles from "./LoginForm.module.css";
import { CategoryFormProps } from "../../lib/types/types";

export function FormCategory({ onSubmit }: CategoryFormProps) {
    const [category, setCategory] = useState("");

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        onSubmit(category);
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <InputAtom
                type="text"
                placeholder="Marca"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                className="brand"
            />

            <ButtonAtom label="Registrar" classType="create" type="submit" />
        </form>
    );
}
