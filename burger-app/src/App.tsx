import React from "react";
import logo from "./assets/images/logo.png";
import { Counter } from "./features/actions/counter/Counter";
import "./App.css";
import Toolbar from "./layout/toolbar/toolbar";
import Builder from "./features/burgerbuilder/burgerMaster";
import Login from "./controls/auth/login";
import Register from "./controls/auth/signup";
import Reset from "./controls/auth/reset";
import Orders from './controls/order/order';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const navLinks = {
  Home: "/",
  Builder: "/builder",
  Account: "/account",
  Cart: "/account/cart",
};
const builderConfig = {
  builder: {
    basePrice: 400,
    ingredients: {
      cheese: 1,
      lettuce: 1,
      patty: 1,
      tomato: 1,
    },
    price: {
      cheese: 200,
      lettuce: 250,
      patty: 150,
      tomato: 300,
    },
  },
  ingredients: [
    { name: "patty", amount: 1 },
    { name: "cheese", amount: 2 },
    { name: "lettuce", amount: 3 },
    { name: "tomato", amount: 4 },
  ],
  orderData: {
    ingrName: [{ name: "patty", amount: 1 },
    { name: "cheese", amount: 2 },
    { name: "lettuce", amount: 3 },
    { name: "tomato", amount: 4 },],
    orderCost: 5000,
    paid: false
  }
};

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/orders" element={<Orders orderData={builderConfig.orderData}/>} />
        </Routes>
      </Router>
      <header className="App-header">
        <Toolbar links={navLinks} logo={logo} />
      </header>
      <div className="content">
        <Builder config={builderConfig} />
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </div>
    </div>
  );
}

export default App;
