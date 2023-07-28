
import "./App.css";

import WentWell from "./Components/WentWell";
// import ToImprove from "./Components/ToImprove";
// import ActionItems from "./Components/ActionItems";

function App() {

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
    <h1>Retro Board</h1>
    </div>

<div className="app">
    <div className="box">
      <h2>Went Well</h2>
      <WentWell />
    </div>

    <div className="box">
      {/* <ToImprove /> */}
      <h2>To Improve</h2>
      <WentWell />
    </div>

    <div className="box">
      {/* <ActionItems /> */}
      <h2>Action Items</h2>
      <WentWell />
    </div>
</div>
    </div>
    </div>
  );
}

export default App;
