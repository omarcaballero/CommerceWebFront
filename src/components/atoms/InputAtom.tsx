import styles from './InputAtom.module.css';
import { ChangeEvent } from "react";

interface InputProps{
    type: string,
    placeholder: string,
    value: string,
    onChange : (e: ChangeEvent<HTMLInputElement>)=> void,
    required? : boolean,
    className: string,
};

export function InputAtom({type, placeholder, value, onChange, required, className}: InputProps){
    return(
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            className={`${styles.input} ${styles[className]}`}
            />
    )
}