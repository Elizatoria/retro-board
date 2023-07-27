
import "./App.css";

import WentWell from "./Components/WentWell";
import ToImprove from "./Components/ToImprove";
import ActionItems from "./Components/ActionItems";

function App() {

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
    <h1>Retro Board</h1>
    </div>

<div className="app">
    <div className="box">
      <WentWell />
    </div>

    <div className="box">
      <ToImprove />
    </div>

    <div className="box">
      <ActionItems />
    </div>
</div>
    </div>
    </div>
  );
}

export default App;
