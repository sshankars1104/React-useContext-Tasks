import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const toggleCart = (product) => {
    if (cart.find((item) => item.id === product.id)) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
    } else {
      setCart((prevCart) => [...prevCart, product]);
    }
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, toggleCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
