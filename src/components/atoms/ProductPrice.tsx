import "../../styles/ProductStyles.css";

export function ProductPrice({ price }: { price: number }) {
    return (
      <div className="product-price">
        <h3>{price} S/.</h3>
      </div>
    );
  }
  