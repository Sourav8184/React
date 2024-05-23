import React from "react";
import { useContext } from "react";
import { CounterContext } from "../context/Counter";
function CountButton() {
  const { count, setCount } = useContext(CounterContext);
  return (
    <div className="btn-container">
      <button className="btn" onClick={() => setCount(count - 1)}>
        dec
      </button>
      <button className="btn" onClick={() => setCount(count + 1)}>
        inc
      </button>
    </div>
  );
}

export default CountButton;
