import React from "react";
export default function Task(props) {
  return (
    <div className="task">
      <span className="tasktitle">{props.title}</span>
      <span className="taskbody">{props.body}</span>
      <button onClick={() => props.deleteTask(props.idx)}>DEL</button>
    </div>
  );
}
