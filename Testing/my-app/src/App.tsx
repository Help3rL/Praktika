import React from "react";
import "./App.css";
import Comp from "./controller/controlls";
import ReduxComp from "./controller/reduxbuttons";
function App() {
  return (
    <div className="App">
      <div className="hooks">
        <Comp />
      </div>
      <div className="devider"></div>
      <div className="redux">
        <ReduxComp />
      </div>
    </div>
  );
}

export default App;
