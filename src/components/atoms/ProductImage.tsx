import "../../styles/ProductStyles.css";

export function ProductImage({ image }: { image: string }) {
    return (
      <div className="product-image">
        <img src={image} alt="Product" />
      </div>
    );
  }
  