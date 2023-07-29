// import React from 'react';

// const DragAndDrop = props => {
//   const handleDragEnter = e => {
//     e.preventDefault();
//     e.stopPropagation();
//   };
//   const handleDragLeave = e => {
//     e.preventDefault();
//     e.stopPropagation();
//   };
//   const handleDragOver = e => {
//     e.preventDefault();
//     e.stopPropagation();
//   };
//   const handleDrop = e => {
//     e.preventDefault();
//     e.stopPropagation();
//   };
//   return (
//     <div className={'drag-drop-zone'}
//       onDrop={e => handleDrop(e)}
//       onDragOver={e => handleDragOver(e)}
//       onDragEnter={e => handleDragEnter(e)}
//       onDragLeave={e => handleDragLeave(e)}
//     >
//       <p>Drag files here to upload</p>
//     </div>
//   );
// };
// export default DragAndDrop;

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