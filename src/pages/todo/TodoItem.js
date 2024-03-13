import React from "react";
import "./Todo.css";
function TodoItem({ task, deleteTask, toggleCompleted }) {
  function handleChange() {
    toggleCompleted(task.id);
  }

  return (
    <div className="todo-item">
      {/* <input type="checkbox" checked={task.completed} onChange={handleChange} /> */}
      <button onClick={() => deleteTask(task.id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15px"
          height="15px"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9 4.5V6H6V7.5H18V6H15V4.5H9ZM6.75 8.25H8.25V17.6893L8.56066 18H15.4393L15.75 17.6893V8.25H17.25V18.3107L16.0607 19.5H7.93934L6.75 18.3107V8.25Z"
            fill="#080341"
          />
        </svg>
      </button>
      <span>{task.text}</span>
    </div>
  );
}
export default TodoItem;
