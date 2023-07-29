import { useState } from "react";

// import Likes from "./Likes";
// import Dislikes from "./Dislikes";
import { Likes, Dislikes } from "./(Dis)likes";
//import {DragStart, DragOver, insertAboveTask} from "./drag";

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

  // const OnDragStart = (e.DragEventHandler.HTMLDivElement, index) => {
  //   console.log("Drag Start", index);
  // }
  // const OnDragEnter = (e:DragEvent<HTMLDivElement>, index) => {
  //   console.log("Drag Enter", index)
  // }
  // const OnDragEnd = (e:DragEvent<HTMLDivElement>, index) => {
  //   console.log("Drag End", index)
  // }
//   function handleDrag() {
//     console.log("Dragging...")
// }

  return (
    <div className="container">
      <div className="card card-body bg-light mb-2">
        <form method="POST" className="row g-3" onSubmit={handleSubmit}>
          <div className="col">
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
                Please enter a Text
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
            <li key={`item-${index}`} draggable className="task swim-lane" 
            // onDrag={DragStart} onDrop={DragOver} onDropCapture={insertAboveTask}
            // onDrag={handleDrag}
            // onDrag={DragandDrop} onDrop={DragandDrop}
            // onDragStart={(e) => onDragStart(e, index)}
            // onDragEnter={(e) => onDragEnter(e, index)}
            // onDragEnd={onDragEnd}
            >
              {item.newItem} 
              <button onClick={() => deleteFromList(index)}>❌</button>
              <Likes /> <Dislikes />
            </li>
          )
        }
          )}
      </ul>
      </div>
    </div>
  );
};

export default WentWell;
