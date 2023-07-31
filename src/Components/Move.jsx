export const MoveLeft = (id, idx) => {
  let newItems = [...items];
  for (let card of newItems) {
    if (card.id === id && card.type === "Went Well") {
      card.type = "Action Items";
    } else if (card.id === id && card.type === "To Improve") {
      card.type = "Went Well";
    } else if (card.id === id && card.type === "Action Items") {
      card.type = "To Improve";
    }
  }
  newCards.push(newCards[idx]);
  newCards.splice(idx, 1);
  this.setState({
    Cards: newCards
  });
  <button
onClick={() => {
  MoveLeft(cardId, idx);
}}
>
{" "}
<i className="fas fa-caret-left left" title="Move card to the left" />
</button>
};

export const MoveRight = (id, idx) => {
  let newCards = [...this.state.Cards];
  for (let card of newCards) {
    if (card.id === id && card.type === "Went Well") {
      card.type = "To Improve";
    } else if (card.id === id && card.type === "To Improve") {
      card.type = "Action Items";
    } else if (card.id === id && card.type === "Action Items") {
      card.type = "Went Well";
    }
  }
  newCards.push(newCards[idx]);
  newCards.splice(idx, 1);
  this.setState({
    Cards: newCards
  });
  <button
          onClick={() => {
            MoveRight(cardId, idx);
          }}
        >
          {" "}
          <i
            className="fas fa-caret-right right"
            title="Move card to the right"
          />
        </button>
};