import React, { useContext } from "react";
import "./Product.css";
import { CartContext } from "../CartContext/CartContext";

function Product({ product }) {
  const { cart, toggleCart } = useContext(CartContext);

  const description =
    product.description.length > 50
      ? product.description.substring(0, 50) + "..."
      : product.description;

  return (
    <div className="product">
      <img src={product.thumbnail} alt={product.title} />
      <div className="details">
        <h3>{product.title}</h3>
        <p>{description}</p>
        <h4>Price: ${product.price}</h4>
        <button onClick={() => toggleCart(product)}>
          {cart.find((item) => item.id === product.id)
            ? "Remove From Cart"
            : "Add To Cart"}
        </button>
      </div>
    </div>
  );
}

export default Product;
