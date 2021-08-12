import React, { useState, useEffect } from "react";
import axios from "axios";

import TaskForm from "./TaskForm";
import Task from "./Task";
import Header from "./Header";

//TODO: 1. dont fetch and display when added new instead add it locally and then send to db

export default function Body(props) {
  //variables and template
  const defaultTask = [{ title: "Let;s Get Started", body: "Welcome to EH" }];

  //  states
  const [todo, setTodo] = useState(defaultTask || getTodosFromServer);

  // fetch and set Todo
  function getTodosFromServer() {
    axios.get("/api/getTask").then((doc) => {
      setTodo(doc.data);
    });
  }

  // Add Task
  const addTask = (title, body) => {
    axios
      .post("/api/addTask", { title, body })
      .then(() => getTodosFromServer())
      .catch((err) => console.log("error occured\n" + err));
  };

  // Delete Task
  function deleteTask(idx) {
    axios.delete(`/api/deleteTask/${idx}`).then(() => getTodosFromServer());
  }

  useEffect(() => {
    getTodosFromServer();
  }, [todo]);

  return (
    <div className="body">
      <Header username="anand yada" />
      <hr />
      <TaskForm addTask={addTask} setTodo={setTodo} />
      <div className="taskgroup">
        {todo.map((child, idx) => {
          return (
            <Task
              title={child.title}
              body={child.body}
              key={idx}
              idx={child._id}
              deleteTask={() => {
                deleteTask(child._id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
