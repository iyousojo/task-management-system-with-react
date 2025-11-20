import React, { useState } from "react";

function Todoapp() {
  // Fixed state names (camelCase + meaningful)
  const [tasks, setTasks] = useState([
    "Eat breakfast",
    "Take a shower",
    "Work out",
  ]);

  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((prev) => [...prev, newTask.trim()]);
      setNewTask("");
    } else {
      alert("Please enter a task! ⚠️");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const moveTaskUp = (index) => {
    if (index === 0) return;
    const updated = [...tasks];
    [updated[index], updated[index - 1]] = [updated[index - 1], updated[index]];
    setTasks(updated);
  };

  const moveTaskDown = (index) => {
    if (index === tasks.length - 1) return;
    const updated = [...tasks];
    [updated[index], updated[index + 1]] = [updated[index + 1], updated[index]];
    setTasks(updated);
  };

  return (
    <div className="todo-wrapper">
      <h1 className="todo-title">My Tasks</h1>

      <div className="input-row">
        <input
          type="text"
          placeholder="What needs to be done today?"
          value={newTask}
          onChange={handleInputChange}
          onKeyPress={(e) => e.key === "Enter" && addTask()}
        />
        <button className="btn add-btn" onClick={addTask}>
          Add Task
        </button>
      </div>

      {tasks.length === 0 ? (
        <p className="empty-state">No tasks yet! Add one above ✨</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={`${task}-${index}`} className="task-item">
              <span className="task-text">{task}</span>

              <div className="btn-group">
                <button
                  className="btn delete-btn"
                  onClick={() => deleteTask(index)}
                  title="Delete task"
                >
                  ×
                </button>

                <button
                  className="btn move-btn"
                  onClick={() => moveTaskUp(index)}
                  disabled={index === 0}
                  title="Move up"
                >
                  ↑
                </button>

                <button
                  className="btn move-btn"
                  onClick={() => moveTaskDown(index)}
                  disabled={index === tasks.length - 1}
                  title="Move down"
                >
                  ↓
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Todoapp;