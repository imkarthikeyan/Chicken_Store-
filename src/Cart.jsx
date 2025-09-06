import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const [count, setCount] = useState(0);

  return (
        <div className="cart-container">
      <button onClick={()=>setCount(count + 1)}>How much you want {count}</button>
      <button onClick={() => setCount(0)}>Clear Cart 🗑️</button>
      <Link to="/order">
        <button
          onClick={() => alert(`Proceeding to Order with ${count} items.`)}
        >
          Place Order 🛍️
        </button>
      </Link>
    </div>
  );
};

export default Cart;
