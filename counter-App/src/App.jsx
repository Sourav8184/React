import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="main">
      <h1>{count % 2 == 0 ? "even" : "odd"}</h1>
      <h1>{count}</h1>
      <button
        className="btn"
        onClick={() => {
          if (count < 20) {
            setCount(count + 1);
          }
        }}>
        increment
      </button>
      <br />
      <button
        className="btn"
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}>
        decrement
      </button>
    </div>
  );
}

export default App;
