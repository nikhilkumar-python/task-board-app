import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("High");
  const [tasks, setTasks] = useState([]);

  // Load tasks when page opens
  useEffect(() => {
    fetchTasks();
  }, []);

  // Get all tasks
  const fetchTasks = async () => {
    const response = await fetch("https://task-board-backend.onrender.com/tasks");
    const data = await response.json();
    setTasks(data);
  };

  // Add task
  const addTask = async () => {
    if (title.trim() === "") {
      alert("Please enter a task");
      return;
    }

    await fetch("https://task-board-backend.onrender.com/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        priority,
      }),
    });

    setTitle("");
    setPriority("High");
    fetchTasks();
  };

  // Toggle complete
  const toggleTask = async (id) => {
    await fetch(`https://task-board-backend.onrender.com/tasks/${id}`, {
      method: "PUT",
    });

    fetchTasks();
  };

  // Delete task
  const deleteTask = async (id) => {
    await fetch(`https://task-board-backend.onrender.com/tasks/${id}`, {
      method: "DELETE",
    });

    fetchTasks();
  };

  // Progress
  const completed = tasks.filter((task) => task.completed).length;

  const progress =
    tasks.length === 0
      ? 0
      : Math.round((completed / tasks.length) * 100);

  return (
    <div className="container">
      <h1>📋 Task Board</h1>

      <input
        type="text"
        placeholder="Enter task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <button onClick={addTask}>Add Task</button>

      <hr />

      <h3>{progress}% Completed</h3>

      <div className="progress">
        <div
          className="fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <h2>Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        tasks.map((task) => (
          <div className="task" key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />

            <span className={task.completed ? "completed" : ""}>
              {task.title}
            </span>

            <span
              className={`priority ${task.priority.toLowerCase()}`}
            >
              {task.priority}
            </span>

            <button onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default App;