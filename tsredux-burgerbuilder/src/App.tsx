import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Router from 'react-router';
import RouterDom, {createBrowserRouter, RouterProvider} from 'react-router-dom';
let router = createBrowserRouter([
  {
    path: "/",
    element: <h2>Main</h2>,
    loader: Counter,
    children: [
      {
        path: '/builder',
        element: <h2></h2>,
      },
      {
        path: '/account',
        loader: Counter,
        element: <h2></h2>,
        errorElement: <h1>You need to login</h1>,
        children:[
          {
            path: '/account/history',
            element: <span>History of account</span>,
            errorElement: <span>Error</span>,
          },
          {
            path: 'account/logout'
          }
        ]
      }
    ]

  }
]);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </header>
    </div>
  );
}

export default App;
