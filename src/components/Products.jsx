import { useState } from "react";
import ProductInfo from "./ProductInfo";

export default function Products() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 7077 },
    { id: 2, name: "Phone", price: 3002 },
    { id: 3, name: "Headphones", price: 151 },
    { id: 4, name: "Book", price: 60 },
    { id: 5, name: "Speakers", price: 505 },
  ]);

  function deleteProduct(id) {
    let cloneProducts = structuredClone(products);

    let newProducts = cloneProducts.filter((prod) => prod.id !== id);
    setProducts(newProducts);
  }

  return (
    <section>
      <h2>Products</h2>
      {products.length > 0 ? (
        products.map((product) => (
          <ProductInfo
            key={product.id}
            product={product}
            onDelete={deleteProduct}
          />
        ))
      ) : (
        <p>all gone :(</p>
      )}
    </section>
  );
}
