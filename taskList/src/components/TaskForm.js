import React, { useState } from "react";
// import '../formAnimation';
export default function TaskForm(props) {
  const [text, setText] = useState("");
  const [taskDef, setTaskDef] = useState("");
  // const textarea = document.querySelector(".control-btn>form>textarea");
  // useEffect(() => {
  //   console.log(textarea);
  // });
  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(text, taskDef);
    setText("");
    setTaskDef("");
  }
  function removeAll() {
    props.setTodo([]);
  }

  return (
    <div className="control-btn">
      <form
        method="POST"
        // onFocus={() => (textarea.style.display = "block")}
        // onBlur={() => (textarea.style.display = "none")}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Take a Note"
          value={text}
          required
          name="title"
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        <textarea
          placeholder="Define this task"
          value={taskDef}
          required
          name="body"
          onChange={(e) => setTaskDef(e.target.value)}
        />
        <br />
        <button type="submit" className="add">
          ADD
        </button>
      </form>

      {/* <button className="remove-all" onClick={() => removeAll()}>
        Remove All
      </button> */}
    </div>
  );
}
