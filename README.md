# Shopping App using React useContext

Shopping App is a simple shopping cart application built with React. It allows users to browse products, add them to a cart, view the cart, and adjust item quantities. The app uses React Context to manage the state of the cart globally.

## Features

- Browse products on the home page.
- Add or remove products from the cart.
- Adjust quantities of items in the cart.
- View the total price and subtotal in the cart.
- Display the quantity of items in the cart as a superscript in the header.

## Usage

# Home Page

The home page displays a list of products. Each product has a title, description, price, and a button to add or remove it from the cart.

# Cart Page

The cart page displays the products added to the cart. Users can adjust the quantity of each item, remove items, and view the subtotal and total prices.

# Header

The header contains navigation links to the home and cart pages. The total number of items in the cart is displayed as a superscript next to the "View Cart" link.

# Context API

The app uses React Context to manage the state of the cart globally. The context is defined in CartContext.js and provides the cart state and functions to manipulate the cart.
