import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
function Item(props) {
  const { item, setItem } = useContext(CartContext);

  return (
    <div className="item-container">
      <h3>{props.name}</h3>
      <h4>Rs. {props.price}</h4>
      <button
        className="btn"
        onClick={() =>
          setItem([...item, { name: props.name, price: props.price }])
        }>
        Add to cart
      </button>
    </div>
  );
}

export default Item;
