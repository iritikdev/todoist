import React from "react";

function TodoList({ tasks, handleTaskRemove }) {
  const handleDelete = (index) => {
    handleTaskRemove(index);
  };
  return (
    <ul>
      {tasks.map((task, index) => (
        <>
          <li key={index}>{task}</li>
          <button onClick={() => handleDelete(index)}>delete</button>
        </>
      ))}
    </ul>
  );
}

export default TodoList;
