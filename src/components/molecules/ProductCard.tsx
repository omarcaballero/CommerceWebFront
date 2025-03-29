import "../../styles/ProductStyles.css";
import { ProductImage } from "../atoms/ProductImage";
import { ProductName } from "../atoms/ProductName";
import { ProductPrice } from "../atoms/ProductPrice";
import { ProductBody } from "../../lib/types/types";

export function ProductCard({ product, onClick }: { product: ProductBody; onClick: () => void }) {
  return (
    <div className="product-card" onClick={onClick}>
      <ProductImage image={typeof product.image === "string" ? product.image : ""}/>
      <div>
        <ProductName name={product.name || ""} />
        <ProductPrice price={Number(product.price) || 0} />
      </div>
    </div>
  );
};
