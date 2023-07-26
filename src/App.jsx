
import "./App.css";

import WentWell from "./Components/WentWell";
import Improve from "./Components/Improve";

function App() {

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
    <h1>Retro Board</h1>
    </div>

    <div className="app">
      <WentWell />
    </div>

    <div className="app">
      <Improve />
    </div>

    </div>
    </div>
  );
}

export default App;
