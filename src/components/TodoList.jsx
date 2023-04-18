function TodoList({ tasks, handleTaskRemove, handleTaskDelete, filter }) {
  console.log(filter);
  return (
    <ul>
      {tasks
        .filter((task) => {
          if (filter === "completed") {
            return task.isCompleted;
          } else if (filter === "active") {
            return !task.isCompleted;
          } else {
            return true;
          }
        })
        .map((task, index) => (
          <>
            {task.isCompleted ? (
              <li style={{ textDecoration: "line-through" }} key={index}>
                {task.name}
              </li>
            ) : (
              <li key={index}>{task.name}</li>
            )}

            <button onClick={() => handleTaskRemove(task.id)}>completed</button>
            <button onClick={() => handleTaskDelete(task.id)}>delete</button>
          </>
        ))}
      {/* {tasks.map((task, index, ) => (
        <>
          {task.isCompleted ? (
            <li style={{ textDecoration: "line-through" }} key={index}>
              {task.name}
            </li>
          ) : (
            <li key={index}>{task.name}</li>
          )}

          <button onClick={() => handleTaskRemove(task.id)}>completed</button>
          <button onClick={() => handleTaskDelete(task.id)}>delete</button>
        </>
      ))} */}
    </ul>
  );
}

export default TodoList;
