import { useState } from "react";

import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";
import DarkMode from "./components/DarkMode";

function App() {
  const [tasks, setTasks] = useState(["task #1", "task #2"]);
  const getTask = (task) => {
    setTasks([...tasks, task]);
  };
  const handleTaskRemove = (i) => {
    setTasks(tasks.filter((task, index) => i !== index));
  };
  return (
    <>
      <DarkMode />
      <InputForm getTask={getTask} />
      <TodoList tasks={tasks} handleTaskRemove={handleTaskRemove} />
      <p>
        {tasks.length === 0
          ? "No todo items left!"
          : `${tasks.length} items left`}
      </p>
    </>
  );
}

export default App;
