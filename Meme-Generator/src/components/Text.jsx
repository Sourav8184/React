import React from "react";
import Draggable from "react-draggable";
import { useState } from "react";
function Text() {
  const [editMode, setEditmode] = useState(false);
  const [value, setValue] = useState("Double click to edit");

  return (
    <Draggable>
      {editMode ? (
        <input
          onDoubleClick={(e) => setEditmode(false)}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <h4 onDoubleClick={(e) => setEditmode(true)}>{value}</h4>
      )}
    </Draggable>
  );
}

export default Text;
