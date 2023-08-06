import { useState } from "react";
import { Likes, Dislikes } from "./(Dis)likes";
import MoveLeft from "./Move";


const WentWell = (props) => {
 
  const [newItem, setNewItem] = useState("");
  //const [items, setItems] = useState([]);
  const [hasError, setHasError] = useState(false);

  const addToList = () => {
 
    props.setItems([
      ...props.items,
      {
        newItem,
        label: props.label,
      },
    ]);
    setNewItem("");
    console.log(props.items);
  };

  const deleteFromList = (indexToDelete) => {
    props.setItems(
      [...props.items].filter((_, index) => index !== indexToDelete)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (newItem) {
      addToList();
      setHasError(false);
    } else setHasError(true);
  };

  // const dragItem = useRef(null);
  // const dragOverItem = useRef(null);

  // const handleSort = () => {
  //   let _items = [...items];
  //   const draggedItemContent=_items.splice(dragItem.current, 1)[0];
  //   _items.splice(dragOverItem.current, 0, draggedItemContent)
  //   dragItem.current = null;
  //   dragOverItem.current = null;
  //   setItems(_items);
  // }

  //That was for the drag and drop
  //I comment them all out

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
        {props.items.filter((item) => {
           if (item.label === props.label) {
            return true;
          } else return false;
        })
        .map((item, index) => {
          return (
            <li key={`item-${index}`} className="well improve action"
            // draggable
            // onDragStart={(e) => dragItem.current=index}
            // onDragEnter={(e) => dragOverItem.current=index}
            // onDragEnd={() => handleSort(index)} This is the only place Handlesort is being used
            // onDragOver={(e) => e.preventDefault()}
            >
              {item.newItem} 
              <button onClick={() => deleteFromList(index)}>❌</button>
              <Likes /> <Dislikes /> 
              <MoveLeft items={props.items} setItems={props.setItems} newItem={newItem} setNewItem={setNewItem} />
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
