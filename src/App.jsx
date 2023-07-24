//import "./App.css";

// import { useState } from 'react';
// import AddTasks from './Components/AddTasks';
// import ListTasks from './Components/ListTasks';

// function App() {
//   const [tasks, setTasks] = useState([]);

//   return (
//     <div>
//     <h1>Retro Board</h1>

//     <AddTasks tasks={tasks} setTasks={setTasks} />
//     <ListTasks tasks={tasks} setTasks={setTasks} />
//     </div>
//   );
// }

import { useState } from "react";
import "./App.css";

const App = () => {
 
  const [tasks, setTasks] = useState([]);
 
  const [nameOfTask, setNameOfTask] = useState("");
 
  const [hasError, setHasError] = useState(false);

  const addToList = () => {
 
    setTasks([
      ...tasks,
      {
        nameOfTask,
      },
    ]);
    setNameOfTask("");
  };

  const deleteFromList = (indexToDelete) => {
    setTasks(
      [...tasks].filter((_, index) => index !== indexToDelete)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (nameOfTask) {
      addToList();
      setHasError(false);
    } else setHasError(true);
  };

  return (
    <div className="container">
      <div className="card card-body bg-light mb-2">
        <form method="POST" className="row g-3" onSubmit={handleSubmit}>
          <div className="col">
            <input
              className={
                hasError && !nameOfTask ? "is-invalid form-control" : "form-control"
              }
              type="text"
              placeholder="Name of Task"
              aria-label="Name of Task"
              value={nameOfTask}
              onChange={(e) => setNameOfTask(e.target.value)}
            />
            {hasError && !nameOfTask && (
              <div className="invalid-feedback">
                Please enter a Task
              </div>
            )}
          </div>
     
          <div className="col-md-auto">
            <button type="submit" className="btn btn-success">
              Add
            </button>
          </div>
        </form>
      </div>
      <div className="card card-body border-white">
        <h1 className="h4">Retro Board</h1>
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Went Well</th>
              <th>To Improve</th>
              <th>Action Items</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((item, index) => {
              return (
                <tr key={`item-${index}`}>
                  <td>{item.nameOfTask}</td>
                  <td>${item.cost.toFixed(2)}</td>
                  <td>
                    <button
                      aria-label="Delete"
                      title="Delete"
                      className="btn"
                      onClick={() => deleteFromList(index)}
                    >
                      &times;
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
