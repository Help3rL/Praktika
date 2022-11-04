import React, { useState } from "react";
import "./App.css";
import Comp from "./controller/controlls";
import ReduxComp from "./controller/reduxbuttons";
import Layout from "./layout/hooks";
import ReduxLayout from "./layout/redux";
function App() {
  const [Counter, setCounter] = useState(0);
  return (
    <div className="App">
      <div className="hooks">
        <Layout data={Counter} />
        <Comp
          addState={() => setCounter(Counter + 1)}
          reduceState={() => setCounter(Counter - 1)}
          resetState={() => setCounter(0)}
        />
      </div>
      <div className="devider"></div>
      <div className="redux">
        <ReduxLayout />
        <ReduxComp />
      </div>
    </div>
  );
}

export default App;
