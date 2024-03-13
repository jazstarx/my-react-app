import React, { useState } from "react";
import TodoItem from "./TodoItem";

function Todo() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor Appointment",
      completed: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      completed: false,
    },
  ]);

  const [text, setText] = useState("");
  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setText("");
  }
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
        />
      ))}

      <button onClick={() => addTask(text)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15px"
          height="15px"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M11.25 12.75V18H12.75V12.75H18V11.25H12.75V6H11.25V11.25H6V12.75H11.25Z"
            fill="#080341"
          />
        </svg>
      </button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}

export default Todo;
