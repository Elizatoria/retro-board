import "./App.css";
import Cards from "./Components/Cards";
import { useState } from "react";

function App() {
  // Declare items and setItems here
  const [items, setItems] = useState([]);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
    <h1>Retro Board</h1>
    </div>

<div className="app">
    <div className="box well">
      <h2>Went Well</h2>
      {/* We need to pass items and setItems as a prop here */}
      <Cards items={items} setItems={setItems} label={1} 
      likes={likes} setLikes={setLikes} 
      dislikes={dislikes} setDislikes={setDislikes}
       />
    </div>

    <div className="box improve">
      <h2>To Improve</h2>
      {/* We need to pass items and setItems as a prop here */}
      <Cards items={items} setItems={setItems} label={2} 
      likes={likes} setLikes={setLikes} 
      dislikes={dislikes} setDislikes={setDislikes}
      />
    </div>

    <div className="box action">
      <h2>Action Items</h2>
      {/* We need to pass items and setItems as a prop here */}
      <Cards items={items} setItems={setItems} label={3} 
      likes={likes} setLikes={setLikes} 
      dislikes={dislikes} setDislikes={setDislikes} 
      />
    </div>
</div>
    </div>
    </div>
  );
}

export default App;