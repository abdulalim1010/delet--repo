import React, { useState } from "react";

const ProductList = () => {
  const products = [
    { id: 1, name: "Apple", price: 30 },
    { id: 2, name: "Banana", price: 10 },
    { id: 3, name: "Orange", price: 25 },
  ];

  const [quantities, setQuantities] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = 0;
      return acc;
    }, {})
  );

  const handleIncrease = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  const handleDecrease = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : 0,
    }));
  };

  const getTotalPrice = () => {
    return products.reduce(
      (total, product) => total + product.price * quantities[product.id],
      0
    );
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>🛒 Product List</h2>
      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: "15px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
          <h4>{product.name} — ৳{product.price}</h4>
          <div>
            <button onClick={() => handleDecrease(product.id)}>-</button>
            <span style={{ margin: "0 10px" }}>{quantities[product.id]}</span>
            <button onClick={() => handleIncrease(product.id)}>+</button>
          </div>
          <p>Subtotal: ৳{product.price * quantities[product.id]}</p>
        </div>
      ))}

      <hr />
      <h3>Total Price: ৳{getTotalPrice()}</h3>
    </div>
  );
};

export default ProductList;
