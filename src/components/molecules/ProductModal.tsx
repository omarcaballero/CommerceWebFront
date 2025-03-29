import { ProductBody } from "../../lib/types/types";
import "../../styles/ProductStyles.css";
import {ProductImage} from "../atoms/ProductImage";
import {ProductName} from "../atoms/ProductName";
import {ProductPrice} from "../atoms/ProductPrice";

export function ProductModal ({ product, onClose }: { product: ProductBody; onClose: () => void }) {
  if (!product) return null;

  console.log(product);

  return (
    <div className="modal-overlay">
    <div className="modal-content">
      <button onClick={onClose} className="modal-close">❌</button>
  
      <ProductImage image={typeof product.image === "string" ? product.image : ""} />
      <div>
      <ProductName name={product.name ?? "Nombre no disponible"} />
      <ProductPrice price={Number(product.price) || 0} />
    </div>
      <p className="product-description">{product.description ?? "Sin descripción"}</p>
  
      <p className="product-stock">
        <strong>Stock:</strong> {product.stock && product.stock > 0 ? `${product.stock} disponibles` : "Agotado"}
      </p>
  
      <p className="product-brand">
        <strong>Marca:</strong> {product.brand?.name ?? "Sin marca"}
      </p>
  
      <p className="product-category">
        <strong>Categoría:</strong> {product.category?.name ?? "Sin categoría"}
      </p>

    </div>
  </div>
  
  );
};

