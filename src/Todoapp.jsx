import React, { useState } from "react";

function Todoapp() {
  const [Todoapp, setTask] = useState([
    "Eat breakfast",
    "Take a shower",
    "Work out",
  ]);

  const [newtask, setnewTask] = useState("");

  function handleinputtask(event) {
    setnewTask(event.target.value);
  }

  function addtask() {
    if (newtask.trim() !== "") {
      setTask((t) => [...t, newtask]);
      setnewTask("");
    } else {
      window.alert("Please enter a task!");
    }
  }

  function deletetask(index) {
    const updated = Todoapp.filter((_, i) => i !== index);
    setTask(updated);
  }

  function movetaskup(index) {
    if (index > 0) {
      const updated = [...Todoapp];
      [updated[index], updated[index - 1]] = [
        updated[index - 1],
        updated[index],
      ];
      setTask(updated);
    }
  }

  function movetaskdown(index) {
    if (index < Todoapp.length - 1) {
      const updated = [...Todoapp];
      [updated[index], updated[index + 1]] = [
        updated[index + 1],
        updated[index],
      ];
      setTask(updated);
    }
  }

  return (
    <div className="todo-wrapper">

      <h1 className="todo-title">My Tasks</h1>

      <div className="input-row">
        <input
          type="text"
          placeholder="Enter a task..."
          value={newtask}
          onChange={handleinputtask}
        />
        <button className="btn add-btn" onClick={addtask}>
          Add Task
        </button>
      </div>

      <ol className="task-list">
        {Todoapp.map((task, index) => (
          <li key={index} className="task-item">
            <span className="task-text">{task}</span>

            <div className="btn-group">
              <button
                className="btn delete-btn"
                onClick={() => deletetask(index)}
              >
                Delete
              </button>
              <button
                className="btn move-btn"
                onClick={() => movetaskup(index)}
              >
                ↑
              </button>
              <button
                className="btn move-btn"
                onClick={() => movetaskdown(index)}
              >
                ↓
              </button>
            </div>
          </li>
        ))}
      </ol>

    </div>
  );
}

export default Todoapp;
