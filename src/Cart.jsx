import React, { useState } from "react";
import "./Cart.css";

const Cart = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>🛒 Items in Cart: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Add One 🐔</button>
    </div>
  );
};

export default Cart;
