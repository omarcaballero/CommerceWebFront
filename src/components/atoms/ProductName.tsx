import "../../styles/ProductStyles.css";

export function ProductName({ name }: { name: string }) {
  return <h3 className="product-name">{name}</h3>;
}
