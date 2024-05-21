import "./App.css";
import Button from "./components/button/Button";
import Header from "./components/header/Header";
import TodoItem from "./components/todoItem/TodoItem";
function App() {
  return (
    <div className="main-containter">
      <Header />
      <TodoItem name="Eat" />
      <TodoItem name="Code" />
      <TodoItem name="Sleep" />
      <TodoItem name="Repeat" />
      <Button />
    </div>
  );
}

export default App;
