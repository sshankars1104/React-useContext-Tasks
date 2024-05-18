import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import "./Header.css";

function Header() {
  const { cart } = useContext(CartContext);
  const totalItems = cart.length;

  return (
    <div className="navBar">
      <div className="logo">React useContext Task</div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">
            View Cart
            {totalItems > 0 && (
              <sup className="cart-quantity">{totalItems}</sup>
            )}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
