import React from "react";
import { useSelector } from "react-redux";
import { getItemselector } from "../redux/CardSlice";
function NavBar() {
  const items = useSelector(getItemselector);
  //   console.log(items);
  const Total = items.reduce((acc, curr) => acc + curr.price, 0);
  return (
    <div className="nav">
      <h1>Total item: {items.length}</h1>
      <h1>price: {Total}</h1>
    </div>
  );
}

export default NavBar;
