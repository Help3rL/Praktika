import React from "react";
import logo from "./assets/images/logo.png";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Toolbar from "./layout/toolbar/toolbar";
import Builder from './features/burgerbuilder/burgerMaster'
import {getBuilderData} from './controls/firebase/database/database'

const navLinks = {
  Home: "/",
  Builder: "/builder",
  Account: "/account",
  Cart: "/account/cart",
};

function App() {
  console.log(`GetData ${getBuilderData}`)
  return (
    <div className="App">
      <header className="App-header">
        <Toolbar links={navLinks} logo={logo} />
      </header>
      <div className="content">
        <Builder/>
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </div>
    </div>
  );
}

export default App;
