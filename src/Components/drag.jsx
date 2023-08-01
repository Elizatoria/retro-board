const card = document.getElementById('card');
const dropZone = document.getElementById('drop-zone');
card.addEventListener('dragstart', function(event) {
	console.log(event)
})
dropZone.addEventListener('dragover', function(event) {
	event.preventDefault()
})
dropZone.addEventListener('drop', function(event) {
	dropZone.prepend(card)
})

// import React, {useState, useRef, useEffect} from 'react'

// function DragNDrop({data}) {

//     const [list, setList] = useState(data); 
//     const [dragging, setDragging] = useState(false);

//     useEffect(() => {
//         setList(data);
//     }, [setList, data])

//     const dragItem = useRef();
//     const dragItemOver = useRef();
    
//     const handletDragStart = (e, item) => {
//         console.log('Starting to drag', item)

//         dragItemOver.current = e.target;
//         dragItemOver.current.addEventListener('dragend', handleDragEnd)
//         dragItem.current = item;

//         setTimeout(() => {
//             setDragging(true); 
//         },0)       
//     }
//     const handleDragEnter = (e, targetItem) => {
//         console.log('Entering a drag target', targetItem)
//         if (dragItemOver.current !== e.target) {
//             console.log('Target is NOT the same as dragged item')
//             setList(oldList => {
//                 let newList = JSON.parse(JSON.stringify(oldList))
//                 newList[targetItem.grpI].items.splice(targetItem.itemI, 0, newList[dragItem.current.grpI].items.splice(dragItem.current.itemI,1)[0])
//                 dragItem.current = targetItem;
//                 localStorage.setItem('List', JSON.stringify(newList));
//                 return newList
//             })
//         }
//     }
//     const handleDragEnd = (e) => {
//         setDragging(false);
//         dragItem.current = null;
//         dragItemOver.current.removeEventListener('dragend', handleDragEnd)
//         dragItemOver.current = null;
//     }
//     const getStyles = (item) => {
//         if (dragItem.current.grpI === item.grpI && dragItem.current.itemI === item.itemI) {
//             return "dnd-item current"
//         }
//         return "dnd-item"
//     }

//     if (list) {
//         return (                
//             <div className="drag-n-drop">
//             {list.map((grp, grpI) => (
//               <div key={grp.title} onDragEnter={dragging && !grp.items.length?(e) => handleDragEnter(e,{grpI, itemI: 0}):null} className="dnd-group">
//                 {grp.items.map((item, itemI) => (
//                   <div draggable key={item}  onDragStart={(e) => handletDragStart(e, {grpI, itemI})} onDragEnter={dragging?(e) => {handleDragEnter(e, {grpI, itemI})}:null} className={dragging?getStyles({grpI, itemI}):"dnd-item"}>
//                     {item}
//                   </div>
//                 ))}
//               </div>
//             ))}
//             </div>
//         )
//     } else { return null}

// }

// export default DragNDrop;

// const DragAndDrop = () => {

// let lists = document.getElementsByClassName("task");
// let want = document.getElementsByClassName("task");
// let improve = document.getElementsByClassName("task");
// let action = document.getElementsByClassName("task");

// for(let task of lists){
// task.addEventListener("dragStart", function(e){
// let selected = e.target;

// want.addEventListener("dragOver", function(e){
//   e.preventDefault();
// })

//   want.addEventListener("drop", function(e){
//     want.appendChild(selected);
//     selected = null;
//   })

//   improve.addEventListener("dragOver", function(e){
//     e.preventDefault();
//   })
  
//     improve.addEventListener("drop", function(e){
//       improve.appendChild(selected);
//       selected = null;
//     })

//     action.addEventListener("dragOver", function(e){
//       e.preventDefault();
//     })
    
//       action.addEventListener("drop", function(e){
//         action.appendChild(selected);
//         selected = null;
//       })
// })
// }
// }
// export default DragAndDrop

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