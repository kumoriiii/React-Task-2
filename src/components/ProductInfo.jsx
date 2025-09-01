export default function ProductInfo({ product, onDelete }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <span>
        <strong>{product.name}</strong> — ${product.price}
      </span>
      <button
        onClick={() => onDelete(product.id)}
        style={{ marginLeft: "10px" }}
      >
        Delete
      </button>
    </div>
  );
}
