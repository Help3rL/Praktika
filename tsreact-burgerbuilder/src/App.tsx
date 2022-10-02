import React from 'react';
import './App.css';
import Toolbar from './layout/toolbar/toolbar';
import Builder from './builder/builderMaster';
import Ingredients from './builder/ingredients/ingredients';
import logo from './assets/images/logo.png';
import cartIcon from './assets/icons/Cart_icon.svg';
// import Router from 'react-router-dom';
import Controller from './builder/controller/controller'
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
  cartIcon: '/account/cart',
}
let orderIngridients:Array<string> = ['tomato','patty','cheese','bacon'];
let orderIngridientsCost=[0];

const Burger = {
  ingredients:{
      tomato: 500,
      bacon: 210,
      cheese: 340,
      patty: 8750,
  },
  settings:{
    basePrice: 2000,
    state: false,
    clicked: false,
  },
}
orderIngridientsCost.push(Burger.settings.basePrice)
function App() {
  const toolbar = new Toolbar('', navLinks, logo, cartIcon);
  const builder = new Builder(Burger, orderIngridientsCost);
  const ingredients = new Ingredients(orderIngridients)
  const controller = new Controller(Burger)
  return (
    <div className="App">
      <header className="App-header">
        {toolbar.getTest || undefined}
      </header>
      <div>
        {builder.Visual(ingredients.getDiv)||undefined}
        {controller.getController}
        <p>
          <span className='DONE'>Builder & Ingridients</span>,<br/>
          <span className="inProgress"><span className="DONE">BuilderControls[Ingr[Name (price)</span>: amount] <span className="DONE">Buttons</span>[More | Less]]</span>
        </p>
        <p></p>
      </div>
    </div>
  );
}

export default App;
