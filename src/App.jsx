
import "./App.css";
import { useState } from 'react';

import Well from "./Components/Well";
import Improve from "./Components/Improve";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const [showEdit, setShowEdit] = useState(-1);
  const [updatedText, setUpdatedText] = useState("");

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
    <h1>Retro Board</h1>
    </div>

    <div>
      <Well newItem={newItem} setNewItem={setNewItem} items={items} setItems={setItems} showEdit={showEdit} setShowEdit={setShowEdit} updatedText={updatedText} setUpdatedText={setUpdatedText}/>
    </div>

    <div>
      <Improve newItem={newItem} setNewItem={setNewItem} items={items} setItems={setItems} showEdit={showEdit} setShowEdit={setShowEdit} updatedText={updatedText} setUpdatedText={setUpdatedText}/>
    </div>

    </div>
    </div>
  );
}

export default App;
