import { useState } from "react";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: uuidv4(), task, isCompleted: false }]);
      setTask("");
    }
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleCheckbox = (e) => {
    const id = e.target.name;
    const updatedTasks = tasks.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTasks(updatedTasks);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    const taskToEdit = tasks.find((item) => item.id === id);
    setTask(taskToEdit.task);
    setTasks(tasks.filter((item) => item.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto bg-gray-800 text-white my-5 rounded-xl p-5 min-h-[80vh] shadow-lg max-w-4xl">
        <div className="addTodo mb-5">
          <h2 className="text-lg font-semibold mb-2">Add a Task</h2>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <input
              onChange={handleChange}
              value={task}
              type="text"
              className="w-full sm:w-3/4 text-white bg-gray-700 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-teal-500"
              placeholder="Enter your task"
            />
            <button
              onClick={handleAdd}
              className="bg-teal-500 hover:bg-teal-600 p-2 px-5 text-black rounded-md text-sm transition-transform transform hover:scale-105"
            >
              Add
            </button>
          </div>
        </div>
        <h2 className="text-lg font-semibold mb-3">Your Tasks</h2>
        <div className="Tasks space-y-4">
          {tasks.length > 0 ? (
            tasks.map((item) => (
              <div
                key={item.id}
                className="Task flex flex-col sm:flex-row sm:items-center justify-between bg-gray-700 p-4 rounded-md shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <input
                    name={item.id}
                    onChange={handleCheckbox}
                    type="checkbox"
                    checked={item.isCompleted}
                    className="h-5 w-5 accent-teal-500"
                  />
                  <span
                    className={
                      item.isCompleted
                        ? "line-through text-gray-400"
                        : "text-white"
                    }
                  >
                    {item.task}
                  </span>
                </div>
                <div className="buttons flex gap-2 mt-3 sm:mt-0">
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="bg-teal-500 hover:bg-teal-600 p-2 px-4 text-black rounded-md text-sm transition-transform transform hover:scale-105"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 hover:bg-red-600 p-2 px-4 text-black rounded-md text-sm transition-transform transform hover:scale-105"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center">
              No tasks available. Add one to get started!
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
