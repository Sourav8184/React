import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./store/slice/todoSlice";
function App() {
  const dispathch = useDispatch();
  const state = useSelector((state) => state);
  console.log("State:", state);
  if (state.todo.isLoading) {
    return <h1>Loading ...</h1>;
  }
  return (
    <div>
      <button onClick={(e) => dispathch(fetchTodos())}>Fetch Todos</button>

      <div className="app">
        {state.todo.data &&
          state.todo.data.map((todo) => {
            return (
              <div className="card">
                <h4>UserId: {todo.userId}</h4>
                <h3>Id: {todo.id}</h3>
                <h2>Title: {todo.title}</h2>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
