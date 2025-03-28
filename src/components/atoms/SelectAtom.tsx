import styles from "./SelectAtom.module.css";

interface SelectAtomProps {
    label?: string;
    value: string | number;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { id: number; name: string }[];
    required?: boolean;
    className?: string;
    placeholder?: string;
}

export function SelectAtom({ 
    label, 
    value, 
    onChange, 
    options, 
    required = false, 
    className = '', 
    placeholder = 'Seleccione una opción'
}: SelectAtomProps) {
    return (
        <div className={`${styles.selectContainer} ${className}`}>
            {label && <label className={styles.label}>{label}</label>}
            <select 
                value={value} 
                onChange={onChange} 
                required={required} 
                className={styles.select}
            >
                <option value="" disabled>
                    {placeholder}
                </option>
                {options.map((option) => (
                    <option key={option.id} value={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
}