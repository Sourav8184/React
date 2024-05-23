import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
function Cart() {
  const cart = useContext(CartContext);
  console.log(cart);
  const total = cart.item.reduce((acc, curr) => acc + curr.price, 0);
  return (
    <div className="cart-container">
      <div className="cart-item">
        <h1>Total Item: {cart.item.length}</h1>
        {cart &&
          cart.item.map((item, ind) => (
            <li key={ind}>
              {item.name} - {item.price}
            </li>
          ))}
      </div>
      <h4>Total Bill: {total}</h4>
    </div>
  );
}

export default Cart;
