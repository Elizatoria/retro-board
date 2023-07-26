import { useState } from "react";
//import "./App.css";

import Likes from "./Likes";
import Dislikes from "./Dislikes";

const WentWell = () => {
 
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const [hasError, setHasError] = useState(false);

  const addToList = () => {
 
    setItems([
      ...items,
      {
        newItem,
      },
    ]);
    setNewItem("");
  };

  const deleteFromList = (indexToDelete) => {
    setItems(
      [...items].filter((_, index) => index !== indexToDelete)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (newItem) {
      addToList();
      setHasError(false);
    } else setHasError(true);
  };

  return (
    <div className="container">
      <div className="card card-body bg-light mb-2">
        <form method="POST" className="row g-3" onSubmit={handleSubmit}>
          <div className="col">
          <h2 className="h4">Went Well</h2>
            <input
              className={
                hasError && !newItem ? "is-invalid form-control" : "form-control"
              }
              type="text"
              placeholder="Name of Task"
              aria-label="Name of Task"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />
            {hasError && !newItem && (
              <div className="invalid-feedback">
                Please enter a Task
              </div>
            )}
            
            <button type="submit" className="btn btn-success">
              Add
            </button>
          </div>
     
        </form>
      </div>
      <div className="card card-body border-white">
        <ul>
        {items.map((item, index) => {
          return (
            <li key={`item-${index}`}>
              {item.newItem} 
              <button onClick={() => deleteFromList(index)}>❌</button>
              <Likes /> <Dislikes />
            </li>
          )
        }
          )}
      </ul>
        {/* <table className="table table-sm">
          <thead>
            <tr>
              <th>Went Well</th>
              <th>Likes</th>
              <th>Dislikes</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              return (
                <tr key={`item-${index}`}>
                  <td>{item.newItem}</td>
                  <td><Likes /></td>
                  <td><Dislikes /></td>
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
        </table> */}
      </div>
    </div>
  );
};

export default WentWell;
