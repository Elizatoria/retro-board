import { useState } from "react";
import { Likes, Dislikes } from "./(Dis)likes";


const Cards = (props) => {
 
  const [newItem, setNewItem] = useState("");
  const [hasError, setHasError] = useState(false);

  //Function to Add Items to List
  const addToList = () => {

    let itemPlace = props.items[props.items.length - 1];
    if (itemPlace === undefined) {itemPlace = { idNum: 0 }};
 
    props.setItems([
      ...props.items,
      {
        newItem,
        label: props.label,
        idNum: itemPlace.idNum + 1,
      },
    ]);
    setNewItem("");
  };

  //Function to Delete Items from the List
  const deleteFromList = (indexToDelete) => {
    props.setItems(
      [...props.items].filter((_, index) => index !== indexToDelete)
    );
  };

  //Function to Validate Text in Input
  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (newItem) {
      addToList();
      setHasError(false);
    } else setHasError(true);
  };

//Left Arrow Button Function
const MoveLeft = (item) => {
  if (item.label === 3) {
    item.label = 2;
  } else if (item.label === 2) {
    item.label = 1;
  } else if (item.label === 1) {
    item.label = 3;
  }

  const newItem = props.items.filter((targetObj, _) => {
    return targetObj.idNum !== item.idNum;
  });

  props.setItems([
    ...newItem,
      item,
  ]);
  ;
  console.log(props.items);
}

//Right Arrow Button Function
function MoveRight(item) {
  if (item.label === 1) {
    item.label = 2;
  } else if (item.label === 2) {
    item.label = 3;
  } else if (item.label === 3) {
    item.label = 1;
  }

  const newItem = props.items.filter((targetObj, _) => {
    return targetObj.idNum !== item.idNum;
  });

  props.setItems([
    ...newItem,
      item,
  ]);
  ;
  console.log(props.items);
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
        {/*Used Description Lists instead of Ordered or Unordered Lists because the last two leave a space at the front of the item*/}
        <dl>
        {props.items.filter((item) => {
           if (item.label === props.label) {
            return true;
          } else return false;
        })
        .map((item, index) => {
          return (
            <dt key={`item-${index}`}
            >
              {item.newItem} 
              <button onClick={() => deleteFromList(index)}>❌</button>
              <Likes /> <Dislikes />
              <button onClick={() => MoveLeft(item)}>Left⬅️</button>
              <button onClick={() => MoveRight(item)}>Right➡️</button>
            </dt>
          )
        }
          )}
      </dl>
      </div>
    </div>
  );
};

export default Cards;
