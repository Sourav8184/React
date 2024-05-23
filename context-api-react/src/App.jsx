import "./App.css";
import CountButton from "./components/CountButton";
import { useContext } from "react";
import { CounterContext } from "./context/Counter";
function App() {
  const counterState = useContext(CounterContext);
  const count = counterState.count;

  return (
    <div>
      <h1>Count is: {count}</h1>
      <CountButton />
      <CountButton />
      <CountButton />
    </div>
  );
}

export default App;
