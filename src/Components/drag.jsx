let dragged;

/* events fired on the draggable target */
const source = document.getElementById("draggable");
source.addEventListener("drag", (event) => {
  console.log("dragging");
});

source.addEventListener("dragstart", (event) => {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.classList.add("dragging");
});

source.addEventListener("dragend", (event) => {
  // reset the transparency
  event.target.classList.remove("dragging");
});

/* events fired on the drop targets */
const target = document.getElementById("droptarget");
target.addEventListener(
  "dragover",
  (event) => {
    // prevent default to allow drop
    event.preventDefault();
  },
  false,
);

target.addEventListener("dragenter", (event) => {
  // highlight potential drop target when the draggable element enters it
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.add("dragover");
  }
});

target.addEventListener("dragleave", (event) => {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.remove("dragover");
  }
});

target.addEventListener("drop", (event) => {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged element to the selected drop target
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.remove("dragover");
    event.target.appendChild(dragged);
  }
});

// import { useState } from "react";

// export default function useDragAndDrop() {
//   const [dragOver, setDragOver] = useState(false);
//   const [fileDropError, setFileDropError] = useState("")

//   const onDragOver = (e: React.SyntheticEvent) => {
//     e.preventDefault();
//     setDragOver(true);
//   };

//   const onDragLeave = () => setDragOver(false);

//   return {
//     dragOver,
//     setDragOver,
//     onDragOver,
//     onDragLeave,
//     fileDropError,
//     setFileDropError,
//   };
// }

// const initialDnDState = {
//   draggedFrom: null,
//   draggedTo: null,
//   isDragging: false,
//   originalOrder: [],
//   updatedOrder: []
// }

// const items = [
//   { number: "1", title: "🇦🇷 Argentina"},
//   { number: "2", title: "🤩 YASS"},
//   { number: "3", title: "👩🏼‍💻 Tech Girl"},
//   { number: "4", title: "💋 Lipstick & Code"},
//   { number: "5", title: "💃🏼 Latina"},
// ]

// const DragToReorderList = () => {

//   // We'll use the initialDndState created above

//   const [dragAndDrop, setDragAndDrop] = React.useState( initialDnDState );

//   // The initial state of "list"
//   // is going to be the static "items" array
//   const [list, setList] = React.useState( items );

//   //...

//   // So let's update our .map() to loop through
//   // the "list" hook instead of the static "items"
//   return(
//    //...
//    {list.map( (item, index) => {
//      return(
//        // ...
//      )
//    })}
//    //...
//    )
// }

// const onDragStart = (event) => {
//   // We'll access the "data-position" attribute
//   // of the current element dragged
//   const initialPosition = Number(event.currentTarget.dataset.position);
//   setDragAndDrop({
//     // we spread the previous content
//     // of the hook variable
//     // so we don't override the properties 
//     // not being updated
//     ...dragAndDrop, 
//     draggedFrom: initialPosition, // set the draggedFrom position
//     isDragging: true, 
//     originalOrder: list // store the current state of "list"
//   });
//   // Note: this is only for Firefox.
//   // Without it, the DnD won't work.
//   // But we are not using it.
//   event.dataTransfer.setData("text/html", '');
//  }

//  const onDragOver = (event) => {
//   event.preventDefault();

//   // Store the content of the original list
//   // in this variable that we'll update
//   let newList = dragAndDrop.originalOrder;

//   // index of the item being dragged
//   const draggedFrom = dragAndDrop.draggedFrom; 

//   // index of the drop area being hovered
//   const draggedTo = Number(event.currentTarget.dataset.position); 

//   // get the element that's at the position of "draggedFrom"
//   const itemDragged = newList[draggedFrom];

//   // filter out the item being dragged
//   const remainingItems = newList.filter((item, index) => index !== draggedFrom);

//   // update the list 
//   newList = [
//     ...remainingItems.slice(0, draggedTo),
//     itemDragged,
//     ...remainingItems.slice(draggedTo)
//   ];

//    // since this event fires many times
//    // we check if the targets are actually
//    // different:
//    if (draggedTo !== dragAndDrop.draggedTo){
//      setDragAndDrop({
//      ...dragAndDrop,

//       // save the updated list state
//       // we will render this onDrop
//       updatedOrder: newList, 
//       draggedTo: draggedTo
//      })
//   }

//  }

//  const onDrop = () => {

//   // we use the updater function
//   // for the "list" hook
//   setList(dragAndDrop.updatedOrder);

//   // and reset the state of
//   // the DnD
//   setDragAndDrop({
//    ...dragAndDrop,
//    draggedFrom: null,
//    draggedTo: null,
//    isDragging: false
//   });
//  }


// const draggables = document.querySelectorAll(".task");
// const droppables = document.querySelectorAll(".swim-lane");

// export const DragStart = () => {

// draggables.forEach((task) => {
//   task.addEventListener("dragstart", () => {
//     task.classList.add("is-dragging");
//   });
//   task.addEventListener("dragend", () => {
//     task.classList.remove("is-dragging");
//   });
// });

// }

// export const DragOver = () => {

// droppables.forEach((zone) => {
//   zone.addEventListener("dragover", (e) => {
//     e.preventDefault();

//     const bottomTask = insertAboveTask(zone, e.clientY);
//     const curTask = document.querySelector(".is-dragging");

//     if (!bottomTask) {
//       zone.appendChild(curTask);
//     } else {
//       zone.insertBefore(curTask, bottomTask);
//     }
//   });
// });

// }

// export const insertAboveTask = (zone, mouseY) => {
//   const els = zone.querySelectorAll(".task:not(.is-dragging)");

//   let closestTask = null;
//   let closestOffset = Number.NEGATIVE_INFINITY;

//   els.forEach((task) => {
//     const { top } = task.getBoundingClientRect();

//     const offset = mouseY - top;

//     if (offset < 0 && offset > closestOffset) {
//       closestOffset = offset;
//       closestTask = task;
//     }
//   });

//   return closestTask;
// };