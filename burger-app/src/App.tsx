import React from "react";
import logo from "./assets/images/logo.png";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Toolbar from "./layout/toolbar/toolbar";
import Builder from './features/burgerbuilder/burgerMaster'
import Modal from './features/actions/modal/modal'
import Login from './features/auth/auth'
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
  },
  ingredients: [
    {name: 'patty', amount: 1},
    {name: 'cheese', amount: 2},
    {name: 'lettuce', amount: 3},
    {name: 'tomato', amount: 4}
  ]
}

function App() {
  // console.log(`GetData ${getBuilderData}`)
  return (
    <div className="App">
      <Modal>
        <Login case='Singup'/>
      </Modal>
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
