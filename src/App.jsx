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
 
  const [wentWell, setWentWell] = useState("");
  const [toImprove, setToImprove] = useState("");
  const [actionItem, setActionItem] = useState("");
 
  const [hasError, setHasError] = useState(false);

  const addToList = () => {
 
    setTasks([
      ...tasks,
      {
        wentWell,
      },
    ]);
    setWentWell("");
  };

  const deleteFromList = (indexToDelete) => {
    setTasks(
      [...tasks].filter((_, index) => index !== indexToDelete)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (wentWell) {
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
                hasError && !wentWell ? "is-invalid form-control" : "form-control"
              }
              type="text"
              placeholder="Name of Task"
              aria-label="Name of Task"
              value={wentWell}
              onChange={(e) => setWentWell(e.target.value)}
            />
            {hasError && !wentWell && (
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
                  <td>{item.wentWell}</td>
                  <td>{item.toImprove}</td>
                  <td>{item.actionItem}</td>
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
