import React, { useState } from "react";
//import "./App.css";

function Well () {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const [hasError, setHasError] = useState(false);

  function AddItem() {
    if (newItem) {
      AddItem();
      setHasError(false);
    } else setHasError(true);

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
      // Add new item to items array
      setItems((oldList) => [...oldList, item]);

      // Reset newItem back to original state
      setNewItem("");
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="Well">
      <h1>Went Well</h1>

      <input type="text" 
      placeholder="...Place Went Well Text Here..." 
      className={
        hasError && !newItem ? "is-invalid form-control" : "form-control"
      }
      value={newItem} 
      onChange={(e) => setNewItem(e.target.value)} />

      <button onClick={AddItem()}>Add</button>

      <ul>
        {items.map(item => {
          return (
            <li key={item.id}>
              {item.value} 
              <button onClick={() => deleteItem(item.id)}>❌</button>
            </li>
          )
        }
          )}
      </ul>

    </div>
      )}

export default Well;