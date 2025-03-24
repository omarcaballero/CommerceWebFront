import styles from "./ButtonAtom.module.css";

interface ButtonProps {
    label: string;
    onClick: () => void;
    classType: "create" | "edit" | "delete" | "login" | "logout";
    type?: "button" | "submit" | "reset";
}

export function ButtonAtom({ label, onClick, classType, type = "button" }: ButtonProps) {
    return (
        <button type={type} onClick={onClick} className={`${styles.primary} ${styles[classType]}`}>
            {label}
        </button>
    );
}
