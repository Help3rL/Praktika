import React from "react";
import logo from "./assets/images/logo.png";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Toolbar from "./layout/toolbar/toolbar";
import Builder from './features/burgerbuilder/burgerMaster'

const navLinks = {
  Home: "/",
  Builder: "/builder",
  Account: "/account",
  Cart: "/account/cart",
};
const builderConfig = {
  "builder": {
    "basePrice": 400,
    "ingredients": {
      "cheese": 1,
      "lettuce": 1,
      "patty": 1,
      "tomato": 1
    },
    "price": {
      "cheese": 200,
      "lettuce": 250,
      "patty": 150,
      "tomato": 300
    }
  }
}

function App() {
  // console.log(`GetData ${getBuilderData}`)
  return (
    <div className="App">
      <header className="App-header">
        <Toolbar links={navLinks} logo={logo} />
      </header>
      <div className="content">
        <Builder config={builderConfig}/>
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </div>
    </div>
  );
}

export default App;
