import React from 'react';
import logo from './assets/images/logo.png';
import { Counter } from './features/counter/Counter';
import './App.css';
import Toolbar from './layout/toolbar/toolbar'
import cartIcon from './assets/icons/Cart_icon.svg';
import {createBrowserRouter, RouterProvider, Route, Outlet, Link} from 'react-router-dom';



const navLinks ={
  Home: '/',
  Builder: '/builder',
  Account: '/account',
  Cart: '/account/cart',
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Toolbar links={navLinks} logo={logo}/>
      </header>
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </div>
    </div>
  );
}

export default App;
