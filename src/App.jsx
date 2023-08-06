import "./App.css";

import WentWell from "./Components/WentWell";
//import ToImprove from "./Components/ToImprove";
// import ActionItems from "./Components/ActionItems";

import { useState } from "react";

function App() {
  // Declare items and setItems here
  const [items, setItems] = useState([]);

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
      <WentWell items={items} setItems={setItems} label={1} />
    </div>

    <div className="box improve">
      {/* <ToImprove /> */}
      <h2>To Improve</h2>
      {/* We need to pass items and setItems as a prop here */}
      <WentWell items={items} setItems={setItems} label={2} />
    </div>

    <div className="box action">
      {/* <ActionItems /> */}
      <h2>Action Items</h2>
      {/* We need to pass items and setItems as a prop here */}
      <WentWell items={items} setItems={setItems} label={3} />
    </div>
</div>
    </div>
    </div>
  );
}

export default App;