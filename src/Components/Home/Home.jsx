import React, { useState, useContext } from "react";
import data from "../../assets/product.json";
import Product from "../Product/Product";
import "./Home.css";
import { CartContext } from "../CartContext/CartContext";

function Home() {
  const [products] = useState(data.products);
  const { cart, toggleCart } = useContext(CartContext);

  return (
    <div className="product-container">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          isInCart={!!cart.find((item) => item.id === product.id)}
          toggleCart={toggleCart}
        />
      ))}
    </div>
  );
}

export default Home;
