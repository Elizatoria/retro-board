function MoveLeft(props) {
  if (`item-${props.index}` && props.label === 1) {
      props.label = 2;
    } else if (`item-${props.index}` && props.label === 2) {
      props.label = 3;
    } else if (`item-${props.index}` && props.label === 3) {
      props.label = 1;
    }

    props.items.push(props.items[props.index]);
    
  return (
  <button onClick={() => MoveLeft(props)}>MoveLeft</button>
  )
}
export default MoveLeft;
// if (`item-${props.index}` && props.className === "well") {
//       props.className = "action";
//     } else if (`item-${props.index}` && props.className === "improve") {
//       props.className = "well";
//     } else if (`item-${props.index}` && props.className === "action") {
//       props.className = "improve";
//     }
//  props.items.push(props.items[props.index]);
//   //props.setItems(props.newItems);

//   return (
//     <button
// onClick={() => {
//   MoveLeft(props); 
// }}
// >Move Left</button>
//   )
// }


// if (item && cost) {
//   const row = { item: item, cost: cost};
//   const newList = { ...list, row};
//   setList(newList);
//   setItem("");
//   setCost("");

// export const MoveLeft = (id, idx) => {
//   let newItems = [...items];
//   for (let card of newItems) {
//     if (card.id === id && card.type === "Went Well") {
//       card.type = "Action Items";
//     } else if (card.id === id && card.type === "To Improve") {
//       card.type = "Went Well";
//     } else if (card.id === id && card.type === "Action Items") {
//       card.type = "To Improve";
//     }
//   }
//   newCards.push(newCards[idx]);
//   newCards.splice(idx, 1);
//   this.setState({
//     Cards: newCards
//   });
//   <button
// onClick={() => {
//   MoveLeft(cardId, idx);
// }}
// >
// {" "}
// <i className="fas fa-caret-left left" title="Move card to the left" />
// </button>
// };

// export const MoveRight = (id, idx) => {
//   let newCards = [...this.state.Cards];
//   for (let card of newCards) {
//     if (card.id === id && card.type === "Went Well") {
//       card.type = "To Improve";
//     } else if (card.id === id && card.type === "To Improve") {
//       card.type = "Action Items";
//     } else if (card.id === id && card.type === "Action Items") {
//       card.type = "Went Well";
//     }
//   }
//   newCards.push(newCards[idx]);
//   newCards.splice(idx, 1);
//   this.setState({
//     Cards: newCards
//   });
//   <button
//           onClick={() => {
//             MoveRight(cardId, idx);
//           }}
//         >
//           {" "}
//           <i
//             className="fas fa-caret-right right"
//             title="Move card to the right"
//           />
//         </button>
// };