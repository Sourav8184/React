import React from "react";
import "../todoItem/TodoItem.css";
function TodoItem(props) {
  return (
    <div className="todoItem">
      <div className="twoItem">
        <input type="checkbox" />
        <span>{props.name}</span>
      </div>
      <p>...</p>
    </div>
  );
}

export default TodoItem;
