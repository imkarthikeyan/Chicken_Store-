import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import MenuList from "./MenuList";
import Cart from "./Cart";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">🐔 Welcome to S.K Chicken Centre 🐔</h1>
      <nav className="navbar">
        <Link to="/" className="nav-link">
          🏠 Home
        </Link>
        <Link to="/cart" className="nav-link">
          🛒 Cart
        </Link>
      </nav>
      {/* Routes here */}

      <Routes>
        <Route path="/" element={<MenuList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<MenuList />} /> {/* Optional fallback */}
      </Routes>
    </div>
  );
};

export default App;
