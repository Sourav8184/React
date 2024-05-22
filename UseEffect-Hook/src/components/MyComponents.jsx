import React, { useEffect, useState } from "react";

function MyComponents() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log("MyConponent is Mount ...");
    return function () {
      console.log("MyComponent is Unmount");
    };
  }, []);

  useEffect(() => {
    console.log("Count is updated " + count + "<==>" + count2);
    return function () {
      console.log("Count is Unmount " + count + "<==>" + count2);
    };
  }, [count, count2]);

  return (
    <div className="myComponent">
      {/* ------------------------- */}
      <h3>{count}</h3>
      <br />
      <button
        onClick={() => {
          setCount(count + 1);
        }}>
        <h3>add</h3>
      </button>
      {/* ------------------------- */}
      <h3>{count2}</h3>
      <br />
      <button
        onClick={() => {
          setCount2(count2 + 1);
        }}>
        <h3>add</h3>
      </button>
      {/* ------------------------- */}
    </div>
  );
}

export default MyComponents;
