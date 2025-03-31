import styles from "./SearchBar.module.css";

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

export function SearchBar({ search, setSearch }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="      Buscar producto..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className={styles.SearchBar}
    />
  );
}
