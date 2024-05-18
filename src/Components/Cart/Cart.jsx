import React, { useState, useEffect, useContext } from "react";
import "./Cart.css";
import { CartContext } from "../CartContext/CartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const initialQuantities = cart.reduce((acc, product) => {
      acc[product.id] = 1;
      return acc;
    }, {});
    setQuantities(initialQuantities);
  }, [cart]);

  const handleQuantityChange = (productId, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: quantity,
    }));
  };

  const subtotal = cart.reduce(
    (acc, product) => acc + product.price * (quantities[product.id] || 1),
    0
  );

  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <>
      <div className="cart-container">
        {cart.length === 0 ? (
          <img
            src="https://www.eyecatchers.in/shop-online/images/cart-empty.jpg"
            alt="Empty cart"
          />
        ) : (
          <div>
            {cart.map((product) => (
              <div key={product.id} className="cart-product">
                <div className="cart-product-image">
                  <img src={product.thumbnail} alt={product.title} />
                </div>
                <div className="cart-product-details">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </div>
                <div className="cart-product-info">
                  <div className="cart-product-price">
                    <h4>Price: ${product.price}</h4>
                  </div>
                  <div className="cart-product-quantity">
                    <label htmlFor={`quantity-${product.id}`}></label>
                    <select
                      id={`quantity-${product.id}`}
                      name="quantity"
                      value={quantities[product.id] || 1}
                      onChange={(e) =>
                        handleQuantityChange(product.id, Number(e.target.value))
                      }
                    >
                      {[...Array(10).keys()].map((num) => (
                        <option key={num + 1} value={num + 1}>
                          {num + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="cart-product-remove">
                    <button
                      className="cart-remove-button"
                      onClick={() => removeFromCart(product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="cart-summary">
        <div className="subtotal">
          <div>
            <h4>Subtotal:</h4>
          </div>
          <div>
            <h4>${subtotal.toFixed(2)}</h4>
          </div>
        </div>
        <div className="Shipping">
          <div>
            <h4>Shipping:</h4>
          </div>
          <div>
            <h4>Free</h4>
          </div>
        </div>
        <div className="total">
          <div>
            <h4>Total:</h4>
          </div>
          <div>
            <h4>${total.toFixed(2)}</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
