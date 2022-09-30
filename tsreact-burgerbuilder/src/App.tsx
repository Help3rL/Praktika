import React from 'react';
import './App.css';
import Toolbar from './layout/toolbar/toolbar';
import Builder from './builder/builderMaster'

import logo from './assets/images/logo.png'

// const links ={
//   "Home": {
//     "link": "/",
//     "txt": "Home"
//   },
//   "builder": {
//     "link": "/builder",
//     "txt": "Builder"
//   },
//   "account": {
//     "txt": "Account",
//     "links": {
//       "home": {
//         "link": "/account",
//         "txt": "Home"
//       },
//       "history": {
//         "link": "/account/history",
//         "txt": "History"
//       },
//       "profile": {
//         "link": "account/profile",
//         "txt": "Profile"
//       }
//     }
//   },
//   "cart": {
//     "link": "/account/cart",
//     "img": "./assets/icons/Cart_icon.svg",
//     "txt": "Cart"
//   }
// }
const navLinks ={
  Home: '/',
  Builder: '/builder',
  Account: '/account',
  Cart: '/account/cart',
}
let orderIngridients = [0];
let orderIngridientsCost=[0];

const Burger = {
  ingredients:{
      tomato: 0,
      bacon: 0,
      cheese: 0,
      patty: 0,
  },
  settings:{
    basePrice: 2,
    state: false,
    clicked: false,
  },
}

console.log(orderIngridients,orderIngridientsCost,Burger)

function App() {
  const toolbar = new Toolbar('', navLinks, logo);
  const builder = new Builder(navLinks, [50,30,50,80,90,81,651,156,561,61,6,51,61,19,19819,1,189,1]);
  return (
    <div className="App">
      <header className="App-header">
        {toolbar.getTest || undefined}
      </header>
      <div>
        {builder.Visual||undefined}
        <p><span className='inProgress'>Builder</span>,BuilderControls[Ingr[Name (price): amount] Buttons[More | Less]]</p>
        <p></p>
      </div>
      
    </div>
  );
}

export default App;
