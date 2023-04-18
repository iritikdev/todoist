import React, { useState } from "react";
import Button from "./Button";

function InputForm({ getTask }) {
  const [task, setTask] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (task !== "") getTask(task);
    setTask("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter your todo..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button title="+" />
      </form>
    </>
  );
}

export default InputForm;
