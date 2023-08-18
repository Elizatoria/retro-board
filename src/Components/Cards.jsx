import { useState } from "react";
import { Likes, Dislikes } from "./(Dis)likes";
//import MoveLeft from "./Move";


const Cards = (props) => {
 
  const [newItem, setNewItem] = useState("");
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

//   const MoveLeft = (indexToMove) => {
//     if (newItem.index === props.items.indexToMove &&  props.items.label === 1) {
//       props.items.label = 2;
//       } else if (newItem.index === props.items.indexToMove &&  props.items.label === 2) {
//         props.items.label = 3;
//       } else if (newItem.index === props.items.indexToMove &&  props.items.label === 3) {
//         props.items.label = 1;
//       }
// console.log( props.items.label);
//       // newItem.push(newItem[indexToMove]);
      
//     return (
//     <button onClick={() => MoveLeft(indexToMove)}>MoveLeft</button>
//     )
//   }

function MoveLeft() {
  const [label, setLabel] = useState(props.label);

  const changeLabel = () => {
    if (label === 1) {
            setLabel(2);
            } else if (label === 2) {
              setLabel(3);
            } else if (label === 3) {
              setLabel(1);
            }
  };

  return (
    <div>
      <h1>{label}</h1>
      <button onClick={changeLabel}>Change Label</button>
    </div>
  );
}

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
            >
              {item.newItem} 
              <button onClick={() => deleteFromList(index)}>❌</button>
              <Likes /> <Dislikes /> <MoveLeft />
            </li>
          )
        }
          )}
      </ul>
      </div>
    </div>
  );
};

export default Cards;
