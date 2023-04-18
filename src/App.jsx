import { useEffect, useState } from "react";

import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";
import Button from "./components/Button";

function App() {
  const [filter, setFilter] = useState("all");

  const [tasks, setTasks] = useState([
    { id: 1, name: "👉 task #1", isCompleted: false },
    { id: 2, name: "👉 task #2", isCompleted: false },
    { id: 3, name: "👉 task #3", isCompleted: false },
  ]);

  const [completedTask, setCompletedTask] = useState([]);

  useEffect(() => {
    setCompletedTask(tasks.filter((t) => t.isCompleted === true));
  }, [tasks]);
  const getTask = (task) => {
    setTasks([
      ...tasks,
      { id: tasks.length + 1, name: task, isCompleted: false },
    ]);
  };

  const handleTaskRemove = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: true } : task
      )
    );
  };

  const handleTaskDelete = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <>
      <InputForm getTask={getTask} />
      <hr />
      <TodoList
        tasks={tasks}
        handleTaskRemove={handleTaskRemove}
        handleTaskDelete={handleTaskDelete}
        filter={filter}
      />
      <p>
        {completedTask.length === 0
          ? `No task is completed...`
          : `${completedTask.length} task is completed🔥`}
      </p>
      <p>
        {tasks.length === completedTask.length
          ? "No todo items left!"
          : `${tasks.length - completedTask.length} item left.`}
      </p>
      <hr />
      <Button title={"reset"} onClick={() => setTasks([])} />
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
      <button onClick={() => setFilter("active")}>Active</button>
    </>
  );
}

export default App;
